//import cors from 'cors';
const express = require('express');
const axios = require('axios');
 
const app = express();
const port = 3001;

//app.use(cors());


app.get('/current', (req, res) => {

      axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
      .then( results => res.send(results.data))
      .catch( err => console.log(err))

});
 
app.listen(port, () =>
  console.log(`Listening 👂 on port ${port}!`),
);