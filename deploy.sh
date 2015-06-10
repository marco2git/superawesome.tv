#!/bin/bash

touch ~/hook.time
cd /var/superawesome.tv
git pull origin master
forever restart index.js
