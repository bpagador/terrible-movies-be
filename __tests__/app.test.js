require('dotenv').config();
const request = require('supertest');
const app = require('../lib/app');
const { prepare } = require('../data-helpers/prepare');
const Movie = require('../lib/models/Movie');


describe('movies routes', () => {

  it('GETs all movies', async() => {
    const movies = prepare(await Movie.find());

    return request(app)
      .get('/api/v1/movies')
      .then(res => {
        expect(res.body).toEqual(movies);
      });
  });
  
});
