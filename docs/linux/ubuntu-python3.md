---
title: How to install python 3.8 on Ubuntu
sidebar: false
---

## How to install python 3.8 on Ubuntu

1. Update repository

   `$ sudo apt update`

   `$ sudo apt install software-properties-common`

3. Add "Deadsnakes PPA" into repository list
   
   `$ sudo add-apt-repository ppa:deadsnakes/ppa`

4. Install Python 3.8[^1]
   
   `$ sudo apt install python3.8`

5. Check success
   
   `$ python3.8 --version`


[^1]: Other version also is allowed. 3.8, 3.9 etc.