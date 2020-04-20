import React from 'react'

import {Header} from '../Styles/CryptoHomePage'
import {TopText, Paragraph} from '../Styles/bitcoinSytles'

export default function BitcoinCash ()
{
    return (
        <>
        <Header>
            Bitcoin Cash
        </Header> 

        <TopText> 
        Date: 04/20/2020 <br/> 
        Current Price: $235.00 <br/> 
        </TopText>

        <Paragraph>
        Bitcoin Cash was created on August 1st 2017 after a concern from miners and developers in regards to scaling. Many felt with the amount of people coming into the space that bitcoin would not be able to scale well as a global currency. Some people felt the BIP 91 was in favor of people who only wanted to use Bitcoin as an investment / store of value rather than actual currency. In their defense transactions fee’s on the BTC network were north of about $15 - $20 at one point. Making it not a good currency to buy things like a toothbrush or basic goods. However the conservy comes in changing from what the original BTC white paper set out to do.
        </Paragraph>

        <Paragraph>
        Transaction fees depend on the amount of activity in the network or volume. On December 22, 2017 the average transaction fee on the bitcoin network was whopping $53.39. Today the average transaction fee is $0.48. Bitcoin Cash’s average transaction fee on December 22, 2017 was only $0.91. Today the average transaction fee on the Bitcoin Cash net work is $0.0024 which is substantially lower than Bitcoin Core. 
        </Paragraph>

        <Paragraph>
        Bitcoin Cash kept the original Bitcoin ledger but upgraded it’s block-size to 8 megabytes rather than 1 megabyte. This allowed for a major increase in transaction speed and reducing fees. Bitcoin can handle roughly 7 TPS while Bitcoin cash can manage around 56 TPS. The reason for the large increase is due to the network on average taking 10 mins to mine a block. Each transaction is around 0.5 Kilobytes of data. A block that can hold maximum 1 megabyte of data is then restricted to 1,804 transactions every 10 minutes or about 3.2 TPS. With 8 megabyte blocks the potential increases to about 56 TPS or 8x
        </Paragraph>

        <Paragraph>
        However the maximum TPS is more than likely not to be used as transaction fee’s rise as there are more and more transactions in-line. This is caused by people setting higher transaction fees to incentive miners to mine (or verify) their transaction first. Causing almost a bidding war among people so their transaction doesn’t take hours or maybe even days to go through and be confirmed multiple times.  
        </Paragraph>

        <Paragraph>
        Another thing to note is that Bitcoin’s core devs on Github did actually switch over to Bitcoin cash or Bitcoin-ABC as the repo is called. Which I do find interesting. The Bitcoin cash event was big news for about a month or 2 before it was finally decided and announced. It was quick to be listed on almost every exchange as well. Coinbase, Poloniex, Bitmex, Kraken, and many other exchanges instantly had it listed. 
        </Paragraph>

        </>
    )
}
