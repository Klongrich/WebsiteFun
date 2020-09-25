import React from 'react'
import Web3 from 'web3'


export default get_token_balance = async (publicKey, tokenAddy) => {
    const web3 = window.web3
    var balance;
    
    // Get ERC20 Token contract instance
    const contract = await new web3.eth.Contract(ERC_20_ABI, tokenAddy);
    
    // Call balanceOf function
    await contract.methods.balanceOf(publicKey).call(function(error, result){
        balance = web3.utils.fromWei(result, 'ether');
    });       
    return (balance);
}
