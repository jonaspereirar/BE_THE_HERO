const express = require('express');

const routes = express.Router();

routes.post('/ongs', (req, res) => {
  const { name, email, whatsapp, city, postal_cod} = req.body;

  console.log(data);

  return res.json();
});

module.exports = routes;