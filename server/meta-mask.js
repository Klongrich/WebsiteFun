const Web3 = require('web3');
const MetaMaskConnector = require('node-metamask');
global.fetch = require('node-fetch')
const cryptoAPI = require('cryptocompare')

cryptoAPI.setApiKey('2151eaf639dd41afcd225bc478b08532a417d6b80854546415b90e38d2224aaf')
 
const connector = new MetaMaskConnector({
  port: 3333, // this is the default port
  onConnect() { console.log('MetaMask client connected') }, // Function to run when MetaMask is connected (optional)
});

connector.start().then(() => {
  // Now go to http://localhost:3333 in your MetaMask enabled web browser.
  const web3 = new Web3(connector.getProvider());
  // Use web3 as you would normally do. Sign transactions in the browser.
  var address = '0x06C04508075c125cD65dAf686177fee2A945e2d8';
  var balance;
  var eth_price;

  web3.eth.getBalance(address, function (error, wei) {
        if (!error) {
            balance = web3.utils.fromWei(wei, 'ether');
            console.log(balance + " ETH");
        }
    });
    
    cryptoAPI.price('ETH', 'USD')
    .then(prices => {
        eth_price = prices.USD;
        console.log(prices)
        console.log( "Total Balance:" + eth_price * balance + " USD");
    })
    .catch(console.error)
});


