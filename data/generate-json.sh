#!/bin/bash

declare -A queries=( \
["parties.json"]="SELECT * FROM PARTIES;" \
["ministers.json"]="SELECT * FROM MINISTERS_PARTIES;" \
)

for file in "${!queries[@]}";
do
    # curl the data into a json file.
    curl -X "POST" "http://localhost:8088/query" \
         --max-time 10 \
         -H "Content-Type: application/vnd.ksql.v1+json; charset=utf-8" \
         -d $'{
      "ksql": "'"${queries[$file]}"'",
      "streamsProperties": {
        "ksql.streams.auto.offset.reset": "earliest"
      }
    }' > $file

    # Remove empty lines
    sed -i -e '/^[[:space:]]*$/d' $file
done

# Convert to json arrays
jq -c '{
    "party": .row.columns[1],
    "ayes": .row.columns[3],
    "nays": .row.columns[4],
    "num_mps": .row.columns[5],
    "ayes_per_mp": .row.columns[6],
    "nays_per_mp": .row.columns[7],
    "ayes_nays_ratio": .row.columns[8]
}' parties.json | jq -sc '.' > parties2.json

jq -c '{
    "link": .row.columns[1],
    "name": .row.columns[3],
    "party": .row.columns[4],
    "ayes": .row.columns[5],
    "nays": .row.columns[6]
}' ministers.json | jq -sc '.' > ministers2.json

# Merge the files
jq -sc '{"parties": .[0], "ministers": .[1]}' parties2.json ministers2.json > data.json

# Remove the files
rm parties.json
rm parties2.json
rm ministers.json
rm ministers2.json
