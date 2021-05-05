const express = require('express');
const fibonacci = require("./fibonacci.js");

const app = express();
const port = process.env.PORT || 4000;
const fib = new fibonacci();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/fibonacci/:number', (req, res) => {

  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    res.status(404).send('error, a number must be given');
    return;
  }
  if (number < 0) {
    res.status(404).send('error, a positive number must be given');
    return;
  }
  try {
    const result = fib.fibonacciOf(number);
    res.status(200).send(result);
  } catch(error) {
    res.status(500).send("sorry, problem found");
  } 
});