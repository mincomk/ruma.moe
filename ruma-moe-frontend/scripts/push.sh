#!/usr/bin/env bash

docker build . -t ruma-moe-frontend
docker image tag ruma-moe-frontend:latest registry.walruslab.org/pub/ruma-moe-frontend:latest
docker push registry.walruslab.org/pub/ruma-moe-frontend:latest

