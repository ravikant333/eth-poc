import { useEffect, useState } from "react";
import "../App.css"
import { utils } from 'web3'
import Web3 from "web3";


export const detectCurrentProvider = () => {
  let provider;
  if (window.web3) {
    provider = window.web3.currentProvider;
  } else {
    window.location.href = 'https://metamask.io/'
    console.log("Non-ethereum browser detected. You should install Metamask");
  }
  return provider;
}

export const changeOrAddArbitrum = async () => {
  const chainId = 421613 //Arbritum testnet chain id
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: utils.toHex(chainId) }]
    });
  } catch (err) {
    if (err.code === 4902) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainName: 'Arbitrum Goerli Testnet',
            chainId: utils.toHex(chainId),
            nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
            rpcUrls: ['https://goerli-rollup.arbitrum.io/rpc']
          }
        ]
      });
    }
  }
}





function LoginMetamask() {

  const [account,setAccount]=useState('')

  const getAccount=async()=>{
    const web3=new Web3(window.ethereum)
 const account=await web3.eth.getAccounts();
 setAccount(account[0])
  }
  
useEffect(()=>{
  if(window?.ethereum)
  getAccount()
})

window.ethereum?.on('accountsChanged', function (accounts) {
  getAccount()
 })

  const onConnect = async () => {
    try {
      await changeOrAddArbitrum()
      const currentProvider = detectCurrentProvider();
      await currentProvider.request({ method: 'eth_requestAccounts' });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div >
      <button onClick={!account && onConnect}>{
        account?account:'Connect'
      }</button>
    </div>
  );

}

export default LoginMetamask;

