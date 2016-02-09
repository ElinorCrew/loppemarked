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
    lat: '59.916741595387904',
    lng: '10.728836059570312'
  });
  Market.create({
    name: 'Dælenenga idrettskrets loppebonanza',
    description: 'Lorem ipsum Aute Excepteur eiusmod culpa voluptate ut adipisicing voluptate sit occaecat dolor nisi et ea eu qui incididunt mollit anim proident dolor.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-03-15T18:23:33.000Z',
    lat: '59.916741595387904',
    lng: '10.628836059570312'
  });
  Market.create({
    name: 'Gryners Gate velforenings kvartale gatesalg',
    description: 'Lorem ipsum Et exercitation reprehenderit ut in ut proident enim eu sint occaecat consectetur in sit cupidatat commodo commodo sunt.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-05-15T18:23:33.000Z',
    lat: '59.916741595387904',
    lng: '10.228836059570312'
  });
  Market.create({
    name: 'Gryners Gate gatesalg',
    description: 'Lorem ipsum In ut qui aute minim cillum aute irure id laborum aliquip aliqua ad laborum laborum do Duis nulla adipisicing ut pariatur ex nostrud aliquip reprehenderit laboris.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-07-15T18:23:33.000Z',
    lat: '59.916741595387904',
    lng: '10.528836059570312'
  });
  Market.create({
    name: 'Gryners velforenings gatesalg',
    description: 'Lorem ipsum Culpa sunt dolore nulla tempor anim.',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-02-10T18:23:33.000Z',
    lat: '59.916741595387904',
    lng: '10.428836059570312'
  });
  Market.create({
    name: 'Gryners velforenings gatesalg',
    description: 'Noe',
    address: 'Schweigaardsgate 41, 0366 OSLO',
    eventDate: '2016-02-15T18:23:33.000Z',
    lat: '59.916741595387904',
    lng: '10.328836059570312'
  });
});
