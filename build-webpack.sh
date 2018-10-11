#!/usr/bin/env bash

until cd /app && npm install
do
  echo "Retrying npm install"
done

webpack --mode development ./frontend/src/index.js --output ./frontend/static/frontend/main.js
