const express = require('express');

const app = express();

// Listen on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

// Route for GET /
app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

module.exports = app;
