import React , {useEffect, useState} from 'react'

import Web3 from 'web3'

var api = require('etherscan-api').init('SGJRWYUZK9QJH2UUQ96JKTZAY4RAPIB5PK');

const API_KEY = 'SGJRWYUZK9QJH2UUQ96JKTZAY4RAPIB5PK';
const PUBlIC_KEY = '0x06C04508075c125cD65dAf686177fee2A945e2d8';
const ACTION = 'txlist'

let tokenAddress = "0x6b175474e89094c44da98b954eedeac495271d0f"; //DAI
let walletAddress = "0x06C04508075c125cD65dAf686177fee2A945e2d8";

const URL = '';

// The minimum ABI to get ERC20 Token balance
var ERC_20_ABI = [
  // balanceOf
  {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
  },
  // decimals
  {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
  }
];

export const get_token_balance = async (publicKey, tokenAddy) => {
    const web3 = window.web3
    var balance;
    
    // Get ERC20 Token contract instance
    const contract = await new web3.eth.Contract(ERC_20_ABI, tokenAddy);
    
    // Call balanceOf function
    await contract.methods.balanceOf(publicKey).call(function(error, result){
        balance = web3.utils.fromWei(result, 'ether');
    });     
    console.log(balance);  
    return (balance);
}

export const uniqueNames = (array) => {
    const uniqueNames = Array.from(new Set(array));
    return(uniqueNames);
}

export default function EthAccount() {

    const [ethAmount, setEthAmount] = useState(0);
    const [publicKey, setPublicKey] = useState("");
    const [txCount, setTxCount] = useState(0);
    const [ethPrice, setEthPrice] = useState(0);

    const [daiBalance, setDaiBalance] = useState(0);

    const [erc721, setErc721] = useState([]);   
    const [erc20, setErc20] = useState([]);

    const [contracts, setContracts] = useState([]);



    async function get_erc_20() {

        fetch('http://api.etherscan.io/api?module=account&action=tokentx&address=' + PUBlIC_KEY + '&startblock=0&endblock=999999999&sort=asc&apikey=' + API_KEY , {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                    "Content-Type": "application/json"
            },
        },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    //Do something with json
                    console.log(json.result);
                    json.result.map((data,index) => 
                        get_token_balance(PUBlIC_KEY, data.contractAddress).then( result => {
                            setErc20(erc20 => [...erc20, {
                                name: data.tokenName, 
                                contract: data.contractAddress,
                                amount: result
                            }])
                        })
                    )
                    json.result.map((data,index) => 
                       // setContracts(contracts => [...contracts, data.contractAddress])
                       get_token_balance(PUBlIC_KEY, data.contractAddress).then( result => {
                            setContracts(contracts => [...contracts, result])
                       })
                    )
                })
            }
        })

    }

    function get_erc_721() {
        fetch('http://api.etherscan.io/api?module=account&action=tokennfttx&address=' + PUBlIC_KEY + '&startblock=0&endblock=999999999&sort=asc&apikey=' + API_KEY , {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                    "Content-Type": "application/json"
            },
        },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    //Do something with json
                    
                    console.log(json.result);

                    {json.result.map(data => 
                        setErc721(erc721 => [...erc721, data.tokenName])
                       // console.log(data.tokenName) //Each Token name
                    )}
                })
            }
        })
    }

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
                return(true);
            }
            else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider)
                return(true);
            }
            else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
                return(false);
            }
        }

        async function getWalletData () {
      
            const web3 = window.web3

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

            await get_erc_20();
            await get_erc_721();
          }

          var wallet = loadWeb3();

          if (wallet) {
        
            getWalletData();
            get_txtCount();
            get_eth_price();
        
            get_token_balance(walletAddress, tokenAddress).then(result => {
                console.log( "DIA Balance " + result);
                setDaiBalance(result)
             })

            get_token_balance(walletAddress, "0xc12d1c73ee7dc3615ba4e37e4abfdbddfa38907e").then(result => {
                console.log( "Kick Balance " + result);
            })
          }


    }, [])
    
    return (
        <>
        <div Style="margin:50px; padding-bottom: 30px;">
            <h2> Stats: </h2> <br /> 
            PublicKey: {publicKey} <br /> <br />
            ETH: {ethAmount} <br /> <br />
            Price: ${ethPrice} USD <br /> <br />
            <br /> <br />
            <h2>ERC-20</h2> <br /> <br />
            # of Transactions: {txCount} <br /> <br />

            DAI: {daiBalance} <br /> <br />
            <h2>ERC-20: </h2> {uniqueNames(erc20).map(data =>
               <p> {data.name} , {data.contract}, {data.amount} </p>
            )}

            <h2> Adress: </h2> {uniqueNames(contracts).map( data => 
                <p> {data} </p>
            )}

            <h2>ERC-721</h2> {uniqueNames(erc721).map( data => 
                <p> {data} </p>
            )}
            
             <br /> <br />

        </div>
        </>
    );
}