import React from 'react'
import { loadBlockchain } from './loadBlockchain'
import {utils} from 'web3'

const ContractCall = () => {
    
    const transferToken=async()=>{
        const { accounts, token } = await loadBlockchain()
        var BN = utils.BN;
        const txn1=await token.methods.transfer('0x67115F1Bb37c33c7C3F761aA875b425990632B64',utils.toWei('155.7645', 'ether')).send({from:accounts[0]})
        console.log(txn1)
    }

    return(
        <>
      
      <button onClick={transferToken}>Transfer</button>
      </>
    )
}

export default ContractCall