loppemarked
===========

Running Locally
---------------

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```
npm install
npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

Deploying to Heroku
-------------------

Add the heroku remote with:

```
heroku git:remote -a loppemarked
```

You will now be able to push to heroku with:

```
git push heroku master
```
