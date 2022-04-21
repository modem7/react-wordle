
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/).

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
  
### Changed
- Updated from Nginx 1.21.5 to 1.21.6.

### Fixed
