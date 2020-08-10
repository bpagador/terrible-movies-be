const Movie = require('..lib/models/Movie');

module.exports = () => {
  Movie.create([
    {
      title: 'Trolls 2',
      poster: 'http://placekitten.com/200/300',
      year: 1990,
      review: 'never saw it, hear it was bad'
    },
    {
      title: 'Glitter',
      poster: 'http://placekitten.com/200/300',
      year: 2001,
      review: 'Mariah Carey singing during not Christmas'
    },
    {
      title: 'I know who killed me',
      poster: 'http://placekitten.com/200/300',
      year: 2007,
      review: 'twins and murder, not fun'
    }
  ]);
};
