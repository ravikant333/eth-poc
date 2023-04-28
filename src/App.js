import logo from './logo.svg';
import './App.css';
import LoginMetamask from './Components/LoginMetamask';
import { useEffect,useState } from 'react';
import Web3 from 'web3';
import ContractCall from './Components/ContractCall';

function App() {
 
  const [isConnected, setIsConnected] = useState(false);
  

  return (
    <div className="App">
     <LoginMetamask />
     <ContractCall/>
    </div>
  );
}

export default App;
