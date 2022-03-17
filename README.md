# React Wordle

![Docker Pulls](https://img.shields.io/docker/pulls/modem7/wordle)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/modem7/wordle/latest)
[![Build Status](https://drone.modem7.com/api/badges/modem7/react-wordle/status.svg)](https://drone.modem7.com/modem7/react-wordle)
[![GitHub last commit](https://img.shields.io/github/last-commit/modem7/react-wordle)](react-wordle)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/modem7/react-wordle/React%20app%20deployement?label=gh%20pages)

This is a clone project of the popular word guessing game we all know and love. Made using React, Typescript, and Tailwind.

Modified by [modem7](https://github.com/modem7) for github-pages. 

[**Try it out!**](https://modem7.github.io/react-wordle/)

# Configuration

```yaml
version: "2.4"

services:

  wordle:
    image: modem7/wordle
    container_name: Wordle
    ports:
      - 80:8080
```

# Tags
| Tag | Description |
| :----: | --- |
| latest | Latest version |

## Project Screenshot

![image](https://user-images.githubusercontent.com/4349962/158677511-50faa60b-26a1-4880-a580-b433389f03aa.png)

## Original Project
[Cwackerfuss/React-Wordle](https://github.com/cwackerfuss/react-wordle)
