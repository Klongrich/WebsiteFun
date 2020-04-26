import React, {useState, useEffect} from 'react'

import {Header, Link, HeaderLink} from './Styles/CryptoHomePage'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

import "./Styles/cryptoHome.css"

import {Sort} from '@styled-icons/fa-solid/Sort'
import {Upvote} from '@styled-icons/boxicons-solid/Upvote'
import {Downvote} from '@styled-icons/boxicons-solid/Downvote'

const cryptoData = [
  {
    id: 1,
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
    id: 2,
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
    linke: "/Crypto"
  }
];

export default function Crypto() {

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
    </>
    )
}


