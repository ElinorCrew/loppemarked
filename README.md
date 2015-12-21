# Loppekartet

![Travis CI Status](https://travis-ci.org/ElinorCrew/loppemarked.svg)

## Running Locally


Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
npm install
npm run dev
```

Loppekartet should now be running on [localhost:9000](http://localhost:9000/).

To run in production mode

```
npm install
npm start
```

## Deploying to Heroku


Add the heroku remote with:

```
heroku git:remote -a loppemarked
```

You will now be able to push to heroku with:

```
git push heroku master
```
