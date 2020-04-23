import React, {useState, useEffect} from 'react'

import {Header, Link} from './Styles/CryptoHomePage'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

import "./Styles/cryptoHome.css"

import {Sort} from '@styled-icons/fa-solid/Sort'
import {Twitch} from "@styled-icons/boxicons-logos/Twitch";

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
    linke: "/Crypto/BitcoinCash"
  },
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
          <Th>24hr Change <Sort size="15px" /></Th>
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
        </Tr>  
      ))}
      </Tbody>

    </Table>
    </>
    )
}


