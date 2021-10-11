#! /usr/bin/bash

rm -rf /usr/local/nginx/html/*
cp -R ./docs/.vitepress/dist/* /usr/local/nginx/html/
sudo systemctl restart nginx