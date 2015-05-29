#Loppekartet
![Travis CI Status](https://travis-ci.org/ElinorCrew/loppemarked.svg)

##Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

    npm install
    bower install
    grunt serve


To run all tests use:
    
    grunt test 


##Deploying to Heroku

Build

    grunt

Commit and push the resulting build, located in your dist folder:

    grunt heroku

To test dist folder before deplayment use

    grunt serve:dist


## Fullstack

[Readme](https://github.com/DaftMonk/generator-angular-fullstack/blob/master/readme.md)
