const { Router } = require('express');
const Movie = require('../models/Movie');

module.exports = Router()
  .get('/', (req, res, next) => {
    Movie
      .find()
      .then(movies => res.send(movies))
      .catch(next);
  });
