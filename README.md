# Getir test

## Description

Solution to the 'Getir case study'.
A `Node.js` REST API, using `express.js` framework.

This API is deployed on Heroku, at URL: `https://git.heroku.com/getir-louis-foged`.

## Overview

-   Handles / tracks multiple currency pairs at the same time.
-   Accepts all parameters (currency pairs, fetch interval, price percentage change), as arguments.
-   Retrieves price data for specified currency pairs from [Uphold public ticker](https://uphold.com/en/developer/api/documentation/#get-tickers-for-currency-pair), at specified interval.
-   Alerts user of price percentage changes (price increase / decrease), for / above specified percentage change.
-   0 dependencies (only dev dependencies).

## Running program locally

-   You need `Node.js v.14` or above, installed on your machine, to run this proram locally.

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
