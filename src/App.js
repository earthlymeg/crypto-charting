import './App.css';
import btc from './imgs/btc.svg';
import Charting from './Charting.js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


function App() {

  const [dates, setDates] = useState([]);
  const [prices, setPrices] = useState([]);

  useEffect(() => {

  axios.get('http://localhost:3001/current')
  .then((res) => {
    console.log(res.data.bpi)
    setDates(Object.keys(res.data.bpi));
    setPrices(Object.values(res.data.bpi));
  })
  .catch(err => console.log(err))

}, [])




return (
  <div className="App">
    <div className="btc-logo">
      <img src={btc} alt="BTC" />
      <br></br>
        prices for last 31 days
      </div>
    <Charting dates={dates}
      prices={prices}
    />
    <div className="creds">
      Powered by CoinDesk
      </div>
  </div>
);
}

export default App;
