import './App.css';
import btc from './imgs/btc.svg';
import Charting from './Charting.js';


function App() {
  return (
    <div className="App">
      <div className="btc-logo">
        <img src={btc} alt="BTC"/>
        <br></br>
        prices for last 31 days
      </div>
      <Charting/>
      <div className="creds">
      Powered by CoinDesk
      </div>
    </div>
  );
}

export default App;
