const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

require('es6-promise').polyfill();
require('isomorphic-fetch');


app.get('/', async (req, res) => {
  let resource = [];
  try {
    resource = await fetch(`https://data.cityofchicago.org/resource/5tiy-yfrg.json`)
      .then((res) => {
        return res.json();
      });
  } catch (e) {
    return e;
  }
  res.send(resource)
});


app.listen(port, () => {
  console.log(`Listening to ${port}`)
});
