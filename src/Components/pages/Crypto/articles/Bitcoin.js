import React from 'react'
import styled from "styled-components";

export const Header = styled.a`
  display: flex;
  flex-wrap: wrap;
  
  width: 96%;
  height: 74px;
  margin-top: -20px;
  color: black;
  font-size: 42px;
`;


export const TopText = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  text-algin: left;

  color: black;
  font-size: 20px;

`;

export const Paragraph = styled.div`
  
   text-algin: center;
   line-height: 2;


  color: black;
  font-size: 18px;

`;

export default function Bitcoin ()
{
    return (
        <>

        <p>Current Price: $7,189.00 </p>
        <p>
        Bitcoin is the first successful block chain that was created and launched by an anonymous man named Satoshi nakamtoa. The white paper was released October 31st, 2008 which outlined this idea of mining (PoW) and nodes in a network to verify transactions. Prior to it’s release however the group referred to as “cypher punks” did have a good amount of work put into creating this idea. That being said. The bitcoin block-chain launched on January 3, 2009 with Satoshi Nakamoto mining the genesis block (or the first block) which had a reward of 50 bitcoins. 
        </p>

        <p>
        Bitcoin solved a very important computer science problem. This problem being labeled as the “double spending” problem in the CS world. This is essentially where 2 people from around the globe use to withdraw money from an ATM at the same time from the same account. Using a client and server model, this allowed people to withdraw more money than what was available in the account. This was caused by the account balance not updating fast enough to deem the transaction invaild. So for example. I have $200 in my bank account. Me and my friend Bob withdraw $200 at the same exact time from different locations in the world. The transaction is sent to the server. The server checks the account balance and sends back “valid” for me and at the same time before the system can update that the withdrawal has been successful  Bob’s request comes in and checks the balance. He is also given a “valid” response since my transaction hasn’t been completed yet. Now I got $200 and Bob get’s $200. We now just created $400 from $200 and since debit accounts can not be over drafted this means the account balance must always remain at $0. 
        </p>

        <p>
        The solution to this problem was to use a service such as a bank to look over transactions to make sure this doesn’t happen. The bank oversees all the transactions to ensure no one is double spending. Without them at the time you would be able to exploit a server with no oversight using this double spending method.  
        </p>

        <p>
        However, Bitcoin presented a solution to this problem without using banks. Instead it introduced an idea of mining, or proof of work (PoW), and consensus to verify each transaction. This essentially has computers around the world guess a random number. Whoever guesses the number gets to verify the transaction and is awarded with Bitcoin. The transaction is then put into what is called the ledger. The ledger is a record of all transactions in the Bitcoin network. Each node in the network must have an updated ledger in order to participate in the mining process and earn Bitcon. To update the ledger each node checks with other nodes in the network to see what transactions they have recorded. Then whichever ledger the majority of the network has is the one that is deemed valid and is copied on all other nodes before the next random number is sent out to the network to be guessed.  
        </p>

        <p>
        The first bitcoin transaction in the world was with programmer Hal Finney. He received 10 bitcoins from Nakamoto on January 12, 2009 and was one of the first people to download the bitcoin software. At this time Bitcoin had not been given a price at all. On March 17,  2010 BitcoinMarket.com started operating as the first bitcoin exchange. The price of one bitcoin was approximately $0.003. Since then Bitcoin has seen an increase in popularity and sparking interest worldwide about a peer-to-peer electronic cash system.
        </p>

        </>
    )
}
