---
title: How to install jenkins on Ubuntu
sidebar: auto
next: /linux/ubuntu-python3.html
---

# How to install jenkins on Ubuntu

[[toc]]

## JDK Installation

```shell
sudo apt-get update
sudo apt-get install openjdk-11-jdk
sudo apt-get clean all
```

## Jenkins Installation

```shell
wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key | sudo apt-key add -
sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt-get update
sudo apt-get install jenkins
```

## Jenkins Permmision

```shell
sudo echo "jenkins ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers.d/jenkins
sudo chmod 704 /etc/sudoers.d/jenkins
sudo systemctl start jenkins
```