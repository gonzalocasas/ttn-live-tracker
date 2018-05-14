# The Things Network GPS Live Tracker

> Minimal GPS live tracker example based on [The Things Network](https://thethingsnetwork.org) tracker nodes.

## Prerequisites

* [Node.JS](https://nodejs.org/) (use a new-ish version, I tested with 8.x only)
* An account and application in [The Things Network Console](https://console.thethingsnetwork.org/).

## Getting Started

* Clone this repository and open a terminal in that directory
* Update your `appID` and `accessKey` in the [index.js][index.js] file
* Install dependencies:

        $ npm install

* Run it:

        $ npm start

* Browse to [localhost:8080](http://localhost:8080/)

## Deploying

If you want to release this onto the big wide interwebs, you can use any node.js hosting provider out there, but I particularly love [now](https://zeit.co/now)'s insanely awesome service:

* First make sure you have installed `now` globally:

        $ npm install -g now

* Login to `now`:

        $ now --login

* Deploy:

        $ now

* Profit! :rocket:

## License

This content is licensed under the MIT License, see the [LICENSE](LICENSE) file for details.
