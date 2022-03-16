# Self Hosted, self contained [Wordle](https://www.powerlanguage.co.uk/wordle/) clone

![Docker Pulls](https://img.shields.io/docker/pulls/modem7/wordle)
![Docker Image Size (tag)](https://img.shields.io/docker/image-size/modem7/wordle/latest)
[![Build Status](https://drone.modem7.com/api/badges/modem7/docker-wordle/status.svg)](https://drone.modem7.com/modem7/docker-wordle)
[![GitHub last commit](https://img.shields.io/github/last-commit/modem7/docker-wordle)](https://github.com/modem7/docker-wordle)

More info can be found here: [Wordle](https://www.powerlanguage.co.uk/wordle/)

Image is based on Nginx stable alpine, and all the content is local to the container.

# Container Screenshot
![image](https://user-images.githubusercontent.com/4349962/152651710-32fc8be9-b63a-47b3-b1f3-ec7baf0e34f8.png)


# Configuration

```bash
version: "2.4"

services:

  wordle:
    image: modem7/wordle
    container_name: Wordle
    ports:
      - 80:80
```

# Tags
| Tag | Description |
| :----: | --- |
| Latest | Latest version |
