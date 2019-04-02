#!/bin/bash

dir="${0%/*}"

# Create the topics
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic raw-votes
kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 4 --topic individual-votes

# Register the schemas
declare -A schemas=( \
["MINISTERS_STREAM"]="$dir/schema/ministers.avsc" \
["PARTIES_STREAM"]="$dir/schema/parties.avsc" \
["VOTES_STREAM"]="$dir/schema/votes.avsc" \
)

for topic in "${!schemas[@]}";
do
    jq --arg text "$(<${schemas[$topic]})" '.schema=$text' <<< "{}" | \
        curl -d @- -X POST -H "Content-Type: application/vnd.schemaregistry.v1+json" \
        http://localhost:8081/subjects/$topic-value/versions
    curl -X POST -i -H "Content-Type: application/vnd.schemaregistry.v1+json" \
        --data '{"schema": "{\"type\": \"string\"}"}' \
        http://localhost:8081/subjects/$topic-key/versions
done

# Create the streams
ksql < $dir/ksql/streams.ksql

# Produce the votes to the topic
votes=( \

`# Indicative Votes 2` \
1108904 `# Common Market 2.0` \
1108905 `# Customs Union` \
1108906 `# Public Vote` \
1108907 `# Parliamentary Supremacy ` \
)

for i in "${votes[@]}";
do
    # Publish the whole result, but it's probably not useful
    curl http://lda.data.parliament.uk/commonsdivisions/id/$i.json | \
        jq -c . | kafka-console-producer --broker-list localhost:9092 --topic raw-votes;
    # Publish the individual votes
    curl http://lda.data.parliament.uk/commonsdivisions/id/$i.json | \
        jq -c '.result.primaryTopic.vote[]' | \
        sed "s/^/$i|/" | \
        kafka-console-producer --broker-list localhost:9092 --topic individual-votes --property "parse.key=true" --property "key.separator=|"
done
