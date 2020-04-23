import React from 'react'

import {Header, Link} from './Styles/CryptoHomePage'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

import "./Styles/cryptoHome.css"

import {Sort} from '@styled-icons/fa-solid/Sort'
import {Twitch} from "@styled-icons/boxicons-logos/Twitch";


export default function Crypto() {

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
          decentralization: 6.2,
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
        

    return (
        <>
        <Header>
            Crypto
        </Header> 

      <Table>
      <Thead>
        <Tr>
          <Th><Sort size="15px" /></Th>
          <Th>Name <Sort size="15px" /></Th>
          <Th>Ticker <Sort size="15px" /></Th>
          <Th>Decentralizaton <Sort size="15px" /></Th>
          <Th>Community <Sort size="15px" /></Th>
          <Th>Scalabitliy <Sort size="15px" /></Th>
          <Th>Team <Sort size="15px" /></Th>
          <Th>Overall Rank <Sort size="15px" /></Th>
          <Th>24hr Change <Sort size="15px" /></Th>
        </Tr>
      </Thead>
      <Tbody>
      {cryptoData.map(data => (
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
      ))};
      </Tbody>  
    </Table>

        </>
    )
}


