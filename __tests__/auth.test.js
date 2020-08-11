require('dotenv').config();
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');

const request = require('supertest');
const app = require('../lib/app');
const User = require('../lib/models/User');

describe('auth routes', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });
  
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  
  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });
  
  it('signs up a user with email, password, and avatar', () => {
    return request(app)
      .post('/api/v1/auth/signup')
      .send({
        email: 'marcel@shell.com',
        password: 'dorito123',
        avatar: 'https://i.pinimg.com/236x/8f/e4/4a/8fe44a894841cf7f563c67594d99f25e--marcel-the-shell-things-i-love.jpg'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          email: 'marcel@shell.com',
          avatar: 'https://i.pinimg.com/236x/8f/e4/4a/8fe44a894841cf7f563c67594d99f25e--marcel-the-shell-things-i-love.jpg'
        });
      });
  });

});
