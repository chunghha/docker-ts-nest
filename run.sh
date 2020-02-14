#!/usr/bin/env bash

if [ "$1" = "rebuild" ]; then
    docker build --tag=docker-ts-nest -f ./Dockerfile .
fi

if [ "$1" = "api" ]; then
    docker build --tag=docker-ts-nest -f ./Dockerfile .
fi

API_PORT=3000 REDIS_PORT=6379 docker-compose up -d api
