#!/bin/bash
export IMAGE_TAG='amlfitco/node-drivenmensfitness'


# How to build a docker image using the docker file
# -t is the tag "name"
sudo docker build . -t $IMAGE_TAG

# View images
sudo docker images