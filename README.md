# React Wordle

![Docker Pulls](https://img.shields.io/docker/pulls/modem7/wordle)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/modem7/wordle/latest)
[![Build Status](https://drone.modem7.com/api/badges/modem7/react-wordle/status.svg)](https://drone.modem7.com/modem7/react-wordle)
[![GitHub last commit](https://img.shields.io/github/last-commit/modem7/react-wordle)](react-wordle)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/modem7/react-wordle/React%20app%20deployement?label=gh%20pages)

This is a clone project of the popular word guessing game we all know and love. Made using React, Typescript, and Tailwind.

Modified by [modem7](https://github.com/modem7) for github-pages. 

[**Try it out!**](https://modem7.github.io/react-wordle/)

# Breaking changes note
This repo has now been merged with the old Worlde repo which had the old NYT container. 

The reasoning for this is to lower maintenance across multiple repos and reduce build time. 

There is also a [Github pages](https://modem7.github.io/react-wordle/) version of "latest".

As such, there is a new configuration: 

## Latest
This is a new version of Wordle, created by [cwackerfuss](https://github.com/cwackerfuss/react-wordle), and as such, it will not match with the latest "Word of the day". 

Please see the configuration below to set this up. 

## Legacy
This is the original Worlde, cloned from the orignal website, and shunted into an Nginx container. This is as close as you'll get to the NYT version, and it should be in line with the latest word of the day. 

This will not be updated, except for security updates and Nginx updates.

Please see the configuration below to set this up.

# Configuration

## Latest
Note: Sharing feature requires this to be hosted via https as per [#331](https://github.com/cwackerfuss/react-wordle/issues/331#issuecomment-1073155476).

```yaml
version: "2.4"

services:

  wordle:
    image: modem7/wordle:latest
    container_name: Wordle
    ports:
      - 80:8080
```

## Legacy

```yaml
version: "2.4"

services:

  wordle:
    image: modem7/wordle:legacy
    container_name: Wordle
    ports:
      - 80:80
```

# Tags
| Tag | Description |
| :----: | --- |
| latest | Latest version |
| legacy | Legacy version |

## Project Screenshot

![image](https://user-images.githubusercontent.com/4349962/158677511-50faa60b-26a1-4880-a580-b433389f03aa.png)

## Original Project
[Cwackerfuss/React-Wordle](https://github.com/cwackerfuss/react-wordle)
