#! /usr/bin/bash

# 81.68.101.112
yarn
yarn build
rm -rf /var/www/html/*
cp -R ./docs/.vuepress/dist/* /var/www/html/
sudo systemctl restart nginx