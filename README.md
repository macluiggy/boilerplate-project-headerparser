
# Request Header Parser Microservice

This a project with a simple micro-service that parses the request header and sends back a JSON object with information about your device such as: `ipaddress`, `language` and `software` keys.

This project is my solution for [Back End Development and APIs Projects - Request Header Parser Microservice] 
and it's a part of Back End Development and APIs Certification by [freeCodeCamp].

## Requirements

- [X] A request to `/api/whoami` should return a JSON object with your IP address in the `ipaddress` key.

- [x] A request to `/api/whoami` should return a JSON object with your preferred language in the `language` key.

- [x] A request to `/api/whoami` should return a JSON object with your software in the `software` key.


[Back End Development and APIs Projects - Request Header Parser Microservice]: https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/request-header-parser-microservice

[freeCodeCamp]: https://www.freecodecamp.org/

## Installation

### Install dependencies
```bash
$ npm install
```

### Start the server
```bash
$ npm run dev
```