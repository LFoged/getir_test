# Getir test

## Description

Solution to the 'Getir case study'.
A `Node.js` REST API, using `express.js` framework.

The app is deployed to Heroku.  
It responds to `POST` requests at URL: `https://getir-louis-foged.herokuapp.com/api/records`. 

## Overview

-   The endpoint `https://getir-louis-foged.herokuapp.com/api/records` accepts `POST` requests only.

-   Request payload *must* contain the following key/values:
    1.  `startDate` <string> -> format: `YYYY-MM-DD`
    2.  `endDate` <string> -> format: `YYYY-MM-DD`
    3.  `minCount` <number>
    4.  `maxCount` <number>

-   The API will respond with the records in the DB that have a `createdAt` date that is between `startDate` (inclusive) and `endDate` (not included), and a `counts` array sum value between `minCount` and `maxCount` (both inclusive).

-   Successful requests will return HTTP statusCode `200`, and a response payload containing the following key/values:
    1.  `code` <number> -> `0` on successful requests
    2.  `msg` <string> -> `Success` on successful requests
    3.  `totalMatches` <integer> -> total number of returned records, that match the specified date & count filters
    4.  `records` <array><objects> -> array of record objects that match the specified date & count filters

-   Error responses will return one of the following HTTP statusCodes:
    1.  `400`: invalid requests -> input error
    2.  `404`: not found -> no matching resources error
    3.  `500`: server error -> unaexpected server error

-   Error responses will return a payload with the following key/values:
    1.  `code`: <number> -> a non-0 response code, corresponging to the error type
    2.  `error`: <string> -> a description of the error type
    3.  `msg`: <string> -> an error message, providing more context into the error
    4.  `errors`: <array?> -> (on input validation errors) an array of objects containing info. on which fields the error(s) occurred and more details about the validation error(s)

## Running program locally

You need `Node.js v.14` or above, installed on your machine, to run this proram locally.

1. Clone this repo to your machine.
2. Navigate to your local clone of the repo.
3. Run `npm i` in your terminal to install dependencies.
4. Run `npm start` in your terminal to start the server.
5. The server is now listening for HTTP POST requests at `http://127.0.0.1:4000/api/records`.

## Immediate improvements

-   Add more unit tests.
-   Possibly enhance input validation.
-   Use a process manager (PM2 has compatibility issues with ES6 modules, so will require some configuring).

#### Author

Louis Foged
