import React from 'react'

import {FullWrapper} from './styles/discStyle'
import {Paragraph, TopText} from '../Styles/bitcoinSytles'

import {ArrowBack} from '@styled-icons/boxicons-regular/ArrowBack'

import {ArrowGoBack} from '@styled-icons/remix-line/ArrowGoBack'

export default function description () {

    return(
        <>
        <ArrowGoBack size="30px" />
        <FullWrapper>
            <Paragraph> <h2> Decentarlization </h2> <br /> To measure decentralization I first take into account how many nodes and / or miners are live on the network. I also look at electricity prices and locations of nodes or mining. Another thing is the amount and accessibility to Asic’s as they only allow people with that hardware to mine at a profitable rate. Then I try to look at the developer side of things. How open-source and “decentralized” are the teams working on the code base? How do they handle governance? In terms of measuring that numerical it is rather hard. </Paragraph>
            <Paragraph><h2> Community </h2> <br /> TPS (Transactions Per Second), Transaction fees, and data storage fee’s are the main three points I look at when considering scalability. TPS is straightforward that you need the ability to handle large volumes of transactions. Fee’s also have to be reasonable if we plan on purchasing goods every day. I also do think that stability is another important factor if we are talking about a currency rather than a platform to run code on. Storage fees are how much per GB it costs to store on a smart contract. This measurement is mainly meant for Dapp platforms. </Paragraph>
            <Paragraph><h2> Scaliability </h2> <br /> For this I look at the general population that is behind each currency. This one would be awesome to have help on as I am just one person and could have a bias when coming up with a score. I tend to judge ”community” by the people promoting the coin or idea. This tends to be more so marketers. For example the person who supports Ethereum over Bitcoin tends to have different views on the crypto space than someone who is only a Bitcoin supporter. How to judge which is better though may become a bias. So you could say the scores reflect my bias for now. </Paragraph>
            <Paragraph><h2> Team </h2> <br /> This is also subjective to bias but for now I look at the core devs. I think reading what articles they have posted. I do like to look at open source code as well as the group they work in. How often do they commit or post? What work have they done in the past? How likely is this team to be able to hold up to their promises? This has to be taken into very large consideration when investing in very early stage cryptos or ICOs if you chose to do so. Even if you plan to launch your own product or service in the crypto space this is something important to look at imo. </Paragraph>
        </FullWrapper> 

        </>
    )
}


