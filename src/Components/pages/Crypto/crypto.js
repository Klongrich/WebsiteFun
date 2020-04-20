import React from 'react'

import {Header} from './Styles/CryptoHomePage'

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import "./Styles/testing.css"

export default function Crypto() {

    return (
        <>
        <Header>
            Crypto
        </Header> 

      <Table>
      <Thead>
        <Tr>
          <Th>Rank</Th>
          <Th>Name</Th>
          <Th>Ticker</Th>
          <Th>Decentralizaton</Th>
          <Th>Community</Th>
          <Th>Scalabitliy</Th>
          <Th>Team</Th>
          <Th>Overall Rank</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>#1</Td>
          <Td>Bitcoin</Td>
          <Td>BTC</Td>
          <Td>6.2</Td>
          <Td>7.2</Td>
          <Td>4.2</Td>
          <Td>8.1</Td>
          <Td>6.425</Td>
        </Tr>
        <Tr>
          <Td>#2</Td>
          <Td>Etheruem</Td>
          <Td>ETH</Td>
          <Td>8.2</Td>
          <Td>9.2</Td>
          <Td>6.2</Td>
          <Td>9.4</Td>
          <Td>8.25</Td>
        </Tr>
        <Tr>
          <Td>Tuscaloosa D3</Td>
          <Td>29 June 2019</Td>
          <Td>Github</Td>
        </Tr>
      </Tbody>
    </Table>

        </>
    )

}


