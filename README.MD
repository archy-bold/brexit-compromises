# Brexit Parliamentary Compromise

This is a small project to see how likely UK MPs were to compromise on Brexit options when it came to votes on Theresa May's deal and the indicative votes.

## Building Data

To build the data, you need docker and docker-compose installed.

To start the containers, run:

```bash
cd data/
docker-compose up
```

Once Kafka and ksqlDB are running, you can initialise the topics, the schema and the ksqlDB streams by running the following script:

```bash
./data/init.sh
```

Then to produce the data to the kafka broker:

```bash
./data/produce.sh
```

### Destroy Containers

To destroy the containers, run:

```bash
docker-compose down -v
```

## Running Queries

You can run your own queries through the ksqlDB cli. To open a cli session, run the following:

```bash
docker exec -it bc-ksqldb-cli ksql http://ksqldb-server:8088
```

© 2019/2020 Simon Archer
