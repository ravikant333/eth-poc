import Web3 from 'web3'
import { contract } from './contract';
export const loadBlockchain = async () => {
    if (typeof window.ethereum !== 'undefined') {
        const web3 = new Web3(window.ethereum)
        const accounts = await web3.eth.getAccounts()
        const address = '0x2457F72DD5Da0191660f05F7257986d12dC87dE9';
        const token = new web3.eth.Contract(contract, address);
        return { accounts, token }
    }
    else {
        alert('plz install metamask')
    }
};