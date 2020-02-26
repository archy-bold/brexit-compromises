#!/bin/bash

dir="${0%/*}"

# Create the topics
docker exec -i bc-broker kafka-topics --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic raw-votes
docker exec -i bc-broker kafka-topics --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 4 --topic individual-votes

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
docker exec -i bc-ksqldb-cli ksql http://ksqldb-server:8088 < $dir/ksql/streams.ksql

# Start connectors
# confluent load parties-file-sink -d $dir/connect/parties-file-sink.json
# confluent load ministers-file-sink -d $dir/connect/ministers-file-sink.json
