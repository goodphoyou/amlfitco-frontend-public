IMAGE_TAG='amlfitco/node-drivenmensfitness'
CONTAINER_ID=$(sudo docker ps -a -q --filter ancestor=$IMAGE_TAG --format="{{.ID}}")

sudo docker exec -it $CONTAINER_ID /bin/bash    