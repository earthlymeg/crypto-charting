import './App.css';
import btc from './imgs/btc.svg';

function App() {
  return (
    <div className="App">
      <div className="btc-logo">
        <img src={btc} alt="BTC"/>
      </div>
      <div className="creds">
      Powered by CoinDesk
      </div>
    </div>
  );
}

export default App;
