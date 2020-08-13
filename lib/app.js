const express = require('express');
const app = express();

app.use(require('cors') ({
  origin: true, 
  credentials: true
}));
//origin and credentials for cookies later, will also need cookie parser eventually

app.use(express.json());


app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/movies', require('./routes/movies'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
