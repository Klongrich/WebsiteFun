import React, {useState, useEffect} from 'react'
import styled from "styled-components";


import {Header, Link, HeaderLink, CryptoNavBar} from './Styles/CryptoHomePage'
import {EmailBox, SubmitButton} from './description/styles/discStyle'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

import "./Styles/cryptoHome.css"

import {Sort} from '@styled-icons/fa-solid/Sort'
import {Upvote} from '@styled-icons/boxicons-solid/Upvote'
import {Downvote} from '@styled-icons/boxicons-solid/Downvote'

import {Ethereum} from '@styled-icons/fa-brands/Ethereum'
import {Bitcoin} from '@styled-icons/boxicons-logos/Bitcoin'

import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'

import Web3 from 'web3'

import CryptoImage from './Styles/pics/cryptoBackground2.png'

export const Background = styled.div`

  background-size: 100% 100%;

`

const cryptoData = [
  {
    id: <Ethereum size="18px" color="#3c3c3d"/>,
    name: "Ethereum",
    ticker: "ETH",
    decentralization: 8.2,
    coummunity: 9.2,
    scalabitlity: 6.2,
    team: 9.4,
    overall: 8.25,
    rankUp: 7,
    rankDown: 2,
    link: "/Crypto/Etheruem"
  },
  {
    id: <Bitcoin size="22px" color="#f2a900" />,
    name: "Bitcoin",
    ticker: "BTC",
    decentralization: 9.2,
    coummunity: 7.2,
    scalabitlity: 4.2,
    team: 8.1,
    overall: 6.425,
    rankUp: 8,
    rankDown: 4,
    link: "/Crypto/Bitcoin"
  },
  {
    id: 3,
    name: "Ripple",
    ticker: "XRP",
    decentralization: 2.1,
    coummunity: 3.2,
    scalabitlity: 9.2,
    team: 7.4,
    overall: 5.475,
    rankUp: 2,
    rankDown: 8,
    link: "/Crypto/Ripple"
  },
  {
    id: 4,
    name: "Bitcoin Cash",
    ticker: "BCH",
    decentralization: 7.2,
    coummunity: 9.2,
    scalabitlity: 7.2,
    team: 7.4,
    overall: 7.75,
    rankUp: 3,
    rankDown: 3,
    link: "/Crypto/BitcoinCash"
  },
  {
    id: 6,
    name: "Chain-Link",
    ticker: "Link",
    decentralization: 7.2,
    coummunity: 9.2,
    scalabitlity: 7.2,
    team: 7.4,
    overall: 7.75,
    rankUp: 3,
    rankDown: 3,
    link: "/Crypto/ChainLink"
  },
  {
    id: 5,
    name: "More To Come",
    ticker: "N/A",
    decentralization: 0.1,
    coummunity: 0.1,
    scalabitlity: 0.1,
    team: 0.1,
    overall: 0.1,
    rankUp: 9,
    rankDown: 9,
    link: "/Crypto"
  }
];



export default function Crypto() {

  const [ethAmount, setEthAmount] = useState(0);
  const [walletLink, setWalletLink] = useState("/Crypto");

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
        setEthAmount("What Is a Web3 Wallet?");
        setWalletLink("/Crypto/web3Info")
        return(false);
      }
    }

    async function getWalletData () {
      
      var wallet = await loadWeb3();
      
      if (wallet) {
        const web3 = window.web3

        const accounts = await web3.eth.getAccounts()
        const address = {account: accounts[0]}.account;

        if (address) {
          web3.eth.getBalance(address, function (error, wei) {
            if (!error) {
                var balance = web3.utils.fromWei(wei, 'ether');
                setEthAmount("ETH: " + balance);
                setWalletLink("/Crypto/User/EthAccount");
                console.log(balance + " ETH");
            }
          });
        }
      }
    }
    getWalletData();
  })
  

    const [CryptoInfo, setCryptoInfo] = useState(cryptoData);

    function AscendOverall() {
      setCryptoInfo([... CryptoInfo].sort((a, b) => b.overall - a.overall)) 
       console.log(CryptoInfo) 
    }

    function AscendDecentralization() {
      setCryptoInfo([... CryptoInfo].sort((a, b) => b.decentralization - a.decentralization)) 
       console.log(CryptoInfo) 
    }

    function AscendCommunity() {
      setCryptoInfo([... CryptoInfo].sort((a, b) => b.coummunity - a.coummunity)) 
       console.log(CryptoInfo) 
    }

    function AscendScalability() {
      setCryptoInfo([... CryptoInfo].sort((a, b) => b.scalabitlity - a.scalabitlity)) 
       console.log(CryptoInfo) 
    }

    function AscendTeam() {
      setCryptoInfo([... CryptoInfo].sort((a, b) => b.team - a.team)) 
       console.log(CryptoInfo) 
    }

    return (
      <>

        <CryptoNavBar>
        NavBar coming soon... Don't judge<br />
            <a href="/" >
              <ArrowBack size="28px" color="white" />
            </a>

            <a href={walletLink} Style="color:white; float:right; margin-right:25px">
              {ethAmount}
            </a>

            <a href="/LogIn" Style="color:white; float:right; margin-right:25px">
              Log In
            </a>

            <a href="/SignUp" Style="color:white; float:right; margin-right:25px">
              Sign Up
            </a>
        </CryptoNavBar>

        <Background>

      <Header>
          Crypto
          <HeaderLink href="/Crypto/Discription">Ranking Explanation</HeaderLink> 
      </Header>

      <Table>
      <Thead>
        <Tr>
          <Th> <Sort size="15px" /></Th>
          <Th>Name <Sort size="15px" /></Th>
          <Th>Ticker <Sort size="15px" /></Th>
          <Th>Decentralizaton <Sort size="15px" onClick={() => AscendDecentralization()} /></Th>
          <Th>Community <Sort size="15px" onClick={() => AscendCommunity() } /></Th>
          <Th>Scalabitliy <Sort size="15px" onClick={() => AscendScalability() } /></Th>
          <Th>Team <Sort size="15px" onClick={() => AscendTeam() } /></Th>
          <Th>Overall Rank <Sort size="15px" onClick={() => AscendOverall()} /></Th>
          <Th>-------Votes-------</Th>
        </Tr>
      </Thead>

      <Tbody>
      {CryptoInfo.map(data => (
        <Tr>
          <Td>{data.id}</Td>
          <Td>
              <Link href={data.link}>{data.name}</Link>
          </Td>
          <Td>{data.ticker}</Td>
          <Td>{data.decentralization}</Td>
          <Td>{data.coummunity}</Td>
          <Td>{data.scalabitlity}</Td>
          <Td>{data.team}</Td>
          <Td>{data.overall}</Td>
          <Td>
            <Upvote size="20px" color="green"/> {data.rankUp} 
            <Downvote size="20px" color="red"/> {data.rankDown} 
          </Td>
        </Tr>  
      ))}
      </Tbody>
    </Table>

    <div Style="margin-left: 30px; margin-top: 30px; line-height: 2; width:95.2%">
    <h2 Style="border-bottom: 1px black solid; padding-bottom:15px"> General Overveiw </h2>

    <p> 
        For more information on each coloumn (Decentralization, Coummunity, Scalabitlity, and Team) 
        please click the link in the top right conner labeled "Ranking Explained". If you would like
        more information about each crypto feel free to click on it in the "Name" columon to pull up
        some short articles I have written up about each one. These articles will provide a general
        Overview of what each crypto is or, you can visit <a Style="color:blue;" href="https://www.coinmarketcap.com"> Coinmarketcap.com </a> to get even more information
    </p>

    <p>
      Also you can enter your email below and be added to an email list for free if you'd like. Not sure
      How often I will send emails out. Would not be daily but depends on what the market is doing as
      well as the developement community. Also it would also kind of just be for fun.
    </p>
    </div>

    <div Style="margin-left: 30px; margin-top: 15px; line-height: 2; width:95.2%">
    <h2 Style="border-bottom: 1px black solid; padding-bottom:15px"> Sign Up </h2>



    </div>
    </Background>
    </>
    )
}


