# Awesome frameworkless project
[![Build Status](https://travis-ci.com/DmitriyKozyatinskiy/ci-integration.svg?branch=master)](https://travis-ci.com/DmitriyKozyatinskiy/ci-integration)

Implemented by IPS team

## Installation:
- Install [NodeJS](https://nodejs.org/en/)
- Run `npm install`

## Development:
- `npm run start` - start development server at <http://127.0.0.1:8000>
- `npm run tslint` - run lint check
- `npm run test` - run tests

## Production:
- `npm run build` - build production-ready bundle at `/dist/bundle.js`

## Dockerizing:
- `docker build -t app .` - create image
- `docker run -p 3000:3000 app` - run container with the server at <http://0.0.0.0:3000/>
