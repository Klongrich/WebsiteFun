import React from 'react'

import {Header, Link} from './Styles/CryptoHomePage'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'

import "./Styles/cryptoHome.css"

import {Sort} from '@styled-icons/fa-solid/Sort'
import {Twitch} from "@styled-icons/boxicons-logos/Twitch";


export default function Crypto() {

    const EthData = [
        {
            id: 0,
            name: "Ethereum",
            ticker: "ETH",
            decentralization: 8.2,
            coummunity: 9.2,
            scalabitlity: 6.2,
            team: 9.4,
            overall: 8.25
        }
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
        <Tr>
        <Td>#1</Td>
          <Td>
            <Link href="Crypto/Etheruem"> Etheruem </Link>
          </Td>
          <Td>ETH</Td>
          <Td>8.2</Td>
          <Td>9.2</Td>
          <Td>6.2</Td>
          <Td>9.4</Td>
          <Td>8.25</Td>
          <Td><a Style="color:green">7.14%</a> </Td>
        </Tr>
        <Tr>
        <Td>#2</Td>
          <Td>
            <Link href="/Crypto/Bitcoin/"> Bitcoin </Link> 
          </Td>
          <Td>BTC</Td>
          <Td>6.2</Td>
          <Td>7.2</Td>
          <Td>4.2</Td>
          <Td>8.1</Td>
          <Td>6.425</Td>
          <Td><a Style="color:red">0.65%</a> </Td>
        </Tr>
        <Tr>
        <Td>#3</Td>
          <Td>
              <Link href="/Crypto/Ripple"> Ripple </Link>
          </Td>
          <Td>XRP</Td>
          <Td>2.1</Td>
          <Td>3.2</Td>
          <Td>9.2</Td>
          <Td>7.4</Td>
          <Td>5.475</Td>
          <Td><a Style="color:red">1.42%</a> </Td>
        </Tr>
        <Tr>
        <Td>#4</Td>
          <Td>
              <Link href="/Crypto/BitcoinCash"> Bitcoin Cash </Link>
          </Td>
          <Td>BCH</Td>
          <Td>7.2</Td>
          <Td>9.2</Td>
          <Td>7.2</Td>
          <Td>7.4</Td>
          <Td>7.75</Td>
          <Td><a Style="color:green">1.47%</a> </Td>
        </Tr>
      </Tbody>
    </Table>

        </>
    )

}


