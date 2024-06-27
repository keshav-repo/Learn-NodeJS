## Setup

```shell
# run all the broker and zookeeper node
docker-compose up

# Enter into one of kafka broker and run below command
docker exec -it kafka1 /bin/bash

# create a topic
kafka-topics --create --topic order --partitions 1 --replication-factor 3 --if-not-exists --bootstrap-server localhost:9092

# List all topics
kafka-topics --list --bootstrap-server localhost:9092
```
