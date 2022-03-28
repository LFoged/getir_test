# Getir test

## Description

Solution to the 'Getir case study'.  
A `Node.js` REST API, using `express.js` framework.

The app is deployed to Heroku.  
It responds to `POST` requests at URL: `https://getir-louis-foged.herokuapp.com/api/records`. 

## Overview

-   The endpoint `https://getir-louis-foged.herokuapp.com/api/records` accepts `POST` requests only.

-   Request payload *must* contain the following key/values:
    1.  `startDate` [string] -> format: `YYYY-MM-DD`
    2.  `endDate` [string] -> format: `YYYY-MM-DD`
    3.  `minCount` [number]
    4.  `maxCount` [number]

-   The API will respond with the records in the DB that have a `createdAt` date that is between `startDate` (inclusive) and `endDate` (not included), and a `counts` array sum value between `minCount` and `maxCount` (both inclusive).

-   Successful requests will return HTTP statusCode `200`, and a response payload containing the following key/values:
    -  `code` [number] -> `0` on successful requests
    -  `msg` [string] -> `Success` on successful requests
    -  `totalMatches` [integer] -> total number of returned records, that match the specified date & count filters
    -  `records` [array] [objects] -> array of record objects that match the specified date & count filters

-   Error responses will return one of the following HTTP statusCodes:
    -  `400`: invalid requests -> input error
    -  `404`: not found -> no matching resources error
    -  `500`: server error -> unaexpected server error

-   Error responses will return a payload with the following key/values:
    -  `code`: [number] -> a non-0 response code, corresponging to the error type
    -  `error`: [string] -> a description of the error type
    -  `msg`: [string] -> an error message, providing more context into the error
    -  `errors`: [array?] -> (input validation errors) array of objects containing info about the error(s)

## Running program locally

You need `Node.js v.14` or above, installed on your machine, to run this proram locally.

1. Clone this repo to your machine.
2. Navigate to your local clone of the repo.
3. Run `npm i` in your terminal to install dependencies.
4. Run `npm start` in your terminal to start the server.
5. The server is now listening for HTTP POST requests at `http://127.0.0.1:4000/api/records`.

## Immediate improvements

-   More unit tests.
-   Enhance input validation?
-   Use a process manager (`PM2` is not compatibile with ES modules, which requires configuring).

#### Author

Louis Foged
