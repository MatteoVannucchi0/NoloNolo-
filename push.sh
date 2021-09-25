#!/bin/bash

git checkout main
git fetch
git pull
git status
git add .
git status
echo $1
git commit -m $1
git push
