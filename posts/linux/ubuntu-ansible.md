---
title: How to configurate ansible on Ubuntu
sidebar: auto
prev: /linux/ubuntu-python3.html
next: /linux/ubuntu-jenkins.html
---

# How to configurate ansible on Ubuntu

## 1. Installation

1. [Python Installation](/linux/ubuntu-python3.html)

2. Ansible Installation

```shell
python3 -m pip install ansible
```

## 2. SSH Configuration

1. Machine 1

```shell
ssh-keygen -t rsa -b 4096 -C "M1"

# Copy pub key to M2's ~/.ssh/
cd ~/.ssh
cat ./id_rsa.pub 
```

2. Machine 2

```shell
ssh-keygen -t rsa -b 4096 -C "M2"

# Copy pub key to M1's ~/.ssh/
cd ~/.ssh
cat ./id_rsa.pub 
```

3. Verify Connection

```shell
# M1
ssh m2.ip.address

# M2
ssh m1.ip.address
```

## 3. Basic Inventory

```shell
# M1
# edit or create
vim /etc/ansible/hosts

#+ m2.ip.address

# Ping
ansible all -m ping
# Echo
ansible all -a "/bin/echo hello"
```

## 4. Run playbook

```yml
# M1
# mytask.yml
---
- name: My task
  hosts: all
  tasks:
    - name: Leaving a mark
      command: "touch /tmp/ansible_was_here"
```

```shell
# M1
ansible-playbook mytask.yml
```

```shell
# M2
ls /tmp | grep ansible
```

TODO...