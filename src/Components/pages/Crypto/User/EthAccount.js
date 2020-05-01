import React , {useEffect, useState} from 'react'

import Web3 from 'web3'

var api = require('etherscan-api').init('SGJRWYUZK9QJH2UUQ96JKTZAY4RAPIB5PK');

const API_KEY = 'SGJRWYUZK9QJH2UUQ96JKTZAY4RAPIB5PK';
const PUBlIC_KEY = '0x06C04508075c125cD65dAf686177fee2A945e2d8';
const ACTION = 'txlist'

const URL = 'https://api.etherscan.io/api?module=account&action=';

let tokenAddress = "0x6b175474e89094c44da98b954eedeac495271d0f"; //DAI
let walletAddress = "0x06C04508075c125cD65dAf686177fee2A945e2d8";

// The minimum ABI to get ERC20 Token balance
var minABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  }
];


export default function EthAccount() {

    const [ethAmount, setEthAmount] = useState(0);
    const [publicKey, setPublicKey] = useState("");
    const [txCount, setTxCount] = useState(0);
    const [ethPrice, setEthPrice] = useState(0);

    function get_eth_price() {

        fetch( 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=' + API_KEY ,{
            method: 'GET',
            headers: {
              Accept: 'application/json',
                "Content-Type": "application/json"
            },
            },
            ).then(response => {
                if (response.ok) {
                  response.json().then(json => { 
                  setEthPrice(json.result.ethusd);
                  });
                }
              }).catch(error => alert("Hmm Thats Weird"));

    }

    function get_txtCount(){

        fetch( 'https://api.etherscan.io/api?module=account&action=' + ACTION + '&address=' + PUBlIC_KEY +'&startblock=0&endblock=999999999&sort=asc&apikey=' + API_KEY ,{
            method: 'GET',
            headers: {
              Accept: 'application/json',
                "Content-Type": "application/json"
            },
            },
            ).then(response => {
                if (response.ok) {
                  response.json().then(json => { 
                  setTxCount(json.result.length);
                  });
                }
              }).catch(error => alert("Hmm Thats Weird"));
    }

    useEffect(() => {

        async function loadWeb3() {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum)
                await window.ethereum.enable()
            }
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
            }
            else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
            }
        }

        async function getWalletData () {
      
            await loadWeb3();
            
            const web3 = window.web3

            // Get ERC20 Token contract instance
            const DAI_Token = await new web3.eth.Contract(minABI, tokenAddress);

            // Call balanceOf function
            var balance = await DAI_Token.methods.balanceOf(walletAddress);

            console.log(balance);
      
            const accounts = await web3.eth.getAccounts()
            const address = {account: accounts[0]}.account;

            setPublicKey(address);

            if (address) {
              web3.eth.getBalance(address, function (error, wei) {
                if (!error) {
                    var balance = web3.utils.fromWei(wei, 'ether');
                    setEthAmount(balance);
                    console.log(balance + " ETH");
                }
              });
            }
          }

          getWalletData();
          get_txtCount();
          get_eth_price();
    })
    
    return (
        <>
        <div Style="margin:50px; padding-bottom: 30px;">
            <h2> Stats: </h2> <br /> 
            PublicKey: {publicKey} <br /> <br />
            ETH: {ethAmount} <br /> <br />
            Price: ${ethPrice} USD <br /> <br />
            <br /> <br />
            # of Transactions: {txCount} <br /> <br />
        </div>
        </>
    );
}