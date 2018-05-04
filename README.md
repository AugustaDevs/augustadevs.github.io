# augustadevs.github.io

> Just a simple website for us Augusta developers

## Development

To develop on this website clone the project and run ```yarn```.

This will get all the dependencies for the project. To get the local dev server up and running do a ```yarn start:dev```.

You can also just build the dev project by running ```yarn build:dev```.

## Deployment

Once you're done making your changes and are satisfied with it all run ```yarn build:prod```. This will minify the project and set the NODE_ENV to production.

Next just push your changes to master (and version the bundle.js) and Github pages will auto deploy everything.

## Simplicity

This app was built out of the desire to have something painfully simple. There are no complex databases, complex styles, or intense features. It displays the links that are needed and connects to githubs api.

The Tech used is:

* React
* React Router
* CSS
* Webpack
* Babel (ES6)
