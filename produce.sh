#!/bin/bash

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
