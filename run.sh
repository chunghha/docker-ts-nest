#!/usr/bin/env bash

docker build . -t ts-nest
docker run -i -t -p 3000:3000 ts-nest