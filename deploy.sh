#! /usr/bin/bash

yarn
yarn build
rm -rf /var/www/html/*
cp -R ./docs/.vitepress/dist/* /var/www/html/
sudo systemctl restart nginx