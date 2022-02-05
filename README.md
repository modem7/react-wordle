# Self Hosted, self contained https://www.powerlanguage.co.uk/wordle/ Wordle clone

![Docker Pulls](https://img.shields.io/docker/pulls/modem7/wordle)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/modem7/wordle/latest)
[![Build Status](https://drone.modem7.com/api/badges/modem7/docker-wordle/status.svg)](https://drone.modem7.com/modem7/docker-wordle)

More info can be found here: https://www.powerlanguage.co.uk/wordle/

Image is based on Nginx stable alpine, and all the content is local to the container.

# Container Screenshot
![image](![image](https://user-images.githubusercontent.com/4349962/152651540-821b7b52-aab1-4d24-a0d3-031a9408f11c.png))


# Configuration

```bash
version: "2.4"

services:

  starwars:
    image: modem7/wordle
    container_name: Wordle
    ports:
      - 80:80
```

# Tags
| Tag | Description |
| :----: | --- |
| Latest | Latest version |
