/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var models = require('../models');
var Market = models.Markets;

Market.sync({
  force: true
}).then(function () {
  Market.create({
    name: 'Briskeby Janitsar loppemarked',
    description: 'Loppemarkedet inneholder lopper fra hele Oslo. Det vil bli servert kaffe, boller og brus. Det selges møbler, sykler, antikviteter og ski.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-02-15T18:23:33.000Z',
    imageSmall: 'http://lorempixel.com/175/145/people/1/',
    imageMedium: 'http://lorempixel.com/400/200/people/1/',
    lat: '59.912869271389894',
    lng: '10.715103149414062'
  });
  Market.create({
    name: 'Dælenenga idrettskrets loppebonanza',
    description: 'Lorem ipsum Aute Excepteur eiusmod culpa voluptate ut adipisicing voluptate sit occaecat dolor nisi et ea eu qui incididunt mollit anim proident dolor.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-03-15T18:23:33.000Z',
    imageSmall: 'http://lorempixel.com/175/145/people/2/',
    imageMedium: 'http://lorempixel.com/400/200/people/2/',
    lat: '59.9054675732672',
    lng: '10.777931213378904'
  });
  Market.create({
    name: 'Gryners Gate velforenings kvartale gatesalg',
    description: 'Lorem ipsum Et exercitation reprehenderit ut in ut proident enim eu sint occaecat consectetur in sit cupidatat commodo commodo sunt.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-01-16T18:23:33.000Z',
    imageSmall: 'http://lorempixel.com/175/145/people/3/',
    imageMedium: 'http://lorempixel.com/400/200/people/3/',
    lat: '59.91975309063614',
    lng: '10.752525329589844'
  });
  Market.create({
    name: 'Gryners Gate gatesalg',
    description: 'Lorem ipsum In ut qui aute minim cillum aute irure id laborum aliquip aliqua ad laborum laborum do Duis nulla adipisicing ut pariatur ex nostrud aliquip reprehenderit laboris.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-07-15T18:23:33.000Z',
    imageSmall: 'http://lorempixel.com/175/145/people/4/',
    imageMedium: 'http://lorempixel.com/400/200/people/4/',
    lat: '59.89875297810411',
    lng: '10.682487487792969'
  });
  Market.create({
    name: 'Gryners velforenings gatesalg',
    description: 'Lorem ipsum Culpa sunt dolore nulla tempor anim.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2017-02-10T18:23:33.000Z',
    imageSmall: 'http://lorempixel.com/175/145/people/5/',
    imageMedium: 'http://lorempixel.com/400/200/people/5/',
    lat: '59.929904118284846',
    lng: '10.811576843261719'
  });
  Market.create({
    name: 'Gryners velforenings gatesalg',
    description: 'Noe',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-02-15T18:23:33.000Z',
    imageSmall: 'http://lorempixel.com/175/145/people/6/',
    imageMedium: 'http://lorempixel.com/400/200/people/6/',
    lat: '59.93833227235004',
    lng: '10.708236694335938'
  });
});
