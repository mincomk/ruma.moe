#!/usr/bin/env bash

docker build . -t ruma-moe-backend
docker image tag ruma-moe-backend:latest registry.walruslab.org/pub/ruma-moe-backend:latest
docker push registry.walruslab.org/pub/ruma-moe-backend:latest

