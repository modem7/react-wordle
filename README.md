# Self Hosted, self contained https://www.powerlanguage.co.uk/wordle/ Wordle clone

![Docker Pulls](https://img.shields.io/docker/pulls/modem7/wordle)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/modem7/wordle/latest)
[![Build Status](https://drone.modem7.com/api/badges/modem7/docker-wordle/status.svg)](https://drone.modem7.com/modem7/docker-wordle)

More info can be found here: https://www.powerlanguage.co.uk/wordle/

Image is based on Nginx stable alpine, and all the content is local to the container.

# Container Screenshot
![image](https://user-images.githubusercontent.com/4349962/128192966-26c74fd7-839c-49ce-b00f-af1050aece90.png)


# Configuration

```bash
version: "2.4"

services:

  starwars:
    image: modem7/docker-starwars
    container_name: StarWars
    ports:
      - 80:80
```

# Tags
| Tag | Description |
| :----: | --- |
| Latest | Latest version |
