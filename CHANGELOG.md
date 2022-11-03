
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/).

## 2022-11-03

### Fixed
- Merged all files and changes from https://github.com/cwackerfuss
- Reducing number of platforms that are built

## 2021-05-19

### Fixed
- Bump node from 18.1.0-alpine3.15 to 18.2.0-alpine3.15

## 2021-05-10

### Fixed
- Converted the modal close div to a button 

## 2021-05-05

### Fixed
- Bump node from 18.0.0-alpine3.15 to 18.1.0-alpine3.15

## 2021-05-03

### Fixed
- Merged all files and changes from https://github.com/cwackerfuss

## 2021-04-22

### Fixed
- Bump @testing-library/react from 12.1.4 to 13.1.1 (https://github.com/modem7/react-wordle/pull/45)
- Bump react-scripts from 5.0.0 to 5.0.1 (https://github.com/modem7/react-wordle/pull/46)
- Bump prettier from 2.6.0 to 2.6.2 (https://github.com/modem7/react-wordle/pull/48)
- Bump @types/node from 17.0.22 to 17.0.25 (https://github.com/modem7/react-wordle/pull/49)
- Bump @types/react-dom from 17.0.14 to 18.0.2 (https://github.com/modem7/react-wordle/pull/50)

## 2021-04-21

### Fixed
- Bump node from 17.9.0-alpine3.15 to 18.0.0-alpine3.15 in /docker (https://github.com/modem7/react-wordle/pull/39)
- Bump react and react-dom (https://github.com/modem7/react-wordle/pull/40)
- Bump lint-staged from 12.3.7 to 12.4.0 (https://github.com/modem7/react-wordle/pull/41)
- Bump @testing-library/user-event from 13.5.0 to 14.1.1 (https://github.com/modem7/react-wordle/pull/42)
- Bump @testing-library/jest-dom from 5.16.2 to 5.16.4 (https://github.com/modem7/react-wordle/pull/43)
- Bump @types/react from 17.0.41 to 18.0.5 (https://github.com/modem7/react-wordle/pull/44)

## 2021-04-06

### Fixed
- Bump minimist from 1.2.5 to 1.2.6 (https://github.com/modem7/react-wordle/pull/31)

## 2021-03-23

### Fixed
- Updated Dependencies.

## 2021-03-22

### Fixed
- Updated Dependencies.

## 2021-03-20

### Changed
- Added Changelog.

### Fixed
- Updated Dependencies.

## 2021-03-16

### Changed
- Merged old repo into new one to reduce maintenance and increase visibility
- Added [:legacy](https://hub.docker.com/layers/modem7/wordle/legacy/images/sha256-a438e949fac97d769d747aaf0a819fe467fc20f425a46a3561a8679752bb023f?context=explore) tag in Docker to keep old version. Breaking change, check the readme for new port assignments. 

### Fixed
- Updated Dependencies.

## 2021-03-15

### Added
- Cloned new Wordle container from [cwackerfuss/react-wordle](https://github.com/cwackerfuss/react-wordle).
- Added GH-Pages.
  
## 2021-02-08
 
### Added
- Cloned original Wordle website (pre-NYT) and ported it to an Nginx container.
  
### Fixed
- Updated from Nginx 1.21.5 to 1.21.6.
