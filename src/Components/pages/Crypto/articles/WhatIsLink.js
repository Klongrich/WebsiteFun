import React from 'react'


export default function WhatIsLink ()
{
    return (
        <>

        <h2> What is $LINK (Chain-Link) </h2>

        <p> Chain Link is a crypto project aimed at allowing data from the outside world to be 
            used in a safe manner within smart contracts. It achieves this by using a system of 
            “Decentralized Orcales” in order to verify that data is valid before it is used / 
            placed into a smart contract that is live on the block-chain. 
        </p>


        <h2> Use Cases </h2>

        <p>
            One main use case that Chain-Link has found is in the world of DeFi. It enables 
            contracts to check prices of certain cryptos and tokens before giving the contract
            a price of the token or crypto. This is important because let’s say we have a 
            contract that sells ETH at the current market going rate. Let’s also say that this 
            contract holds about 1,000 ETH to provide liquidity. Now in order for the contract to know what 
            the price is we have to update  it when the price updates. Where it becomes 
            problematic is let’s say we are just using one API from “ethprice.com” to determine 
            the price of ETH. What would happen if someone was to hack into or alter the price 
            on “ethprice.com”? The contract would then have a faulty price and the hacker could 
            purchase the ETH for lower than market value. This would not be good as the contract 
            essentially just gave out free eth.
        </p>

        <h2> How Does LINK Prevent This? </h2> 

        <p>
            Decentralized oracles of course. What these “orcales” do is store the price from multiple 
            sites at a given time. So rather than the contract just checking ethprice.com it now 
            checks from 10 - 20 different websites at once using LINKs system. This enables the 
            contract to choose the most viable price across multiple platforms. This also makes 
            it so that incase 1 or 2 of the sites get hacked the contract will not give those 
            altered prices but rather what the more accurate price is. This would make it much 
            more difficult for a hacker to alter the data inputted into a live smart contract.
        </p>

        <h2> Other Use Cases </h2>

        <p>
            You can also go as far to do this for more than just prices on crypto. You could 
            potentially do this for anything that has multiple parties overlooking/ giving prices 
            on objects to make sure the smart contracts are always receiving valid input. Also with 
            smart contracts doing the deal execution, it makes the trades or transactions 
            “decentralized” so no third party can oversee or stop the transactions like they could 
            on a traditional server model. 
        </p>

        <h2> Conclusion </h2>

        <p>
            All in all I do think the idea of using multiple checkpoints before inputting data 
            into a live smart contract is a very good idea. This prevents manipulation of live 
            contracts and allows data from the real world to be used safely on chain. Chain link
            also makes it so you don't have to manage 20 - 30 different APIs or webscrappers in
            order to input data safely which is very nice. I am excited to see what else this 
            technology is used for in the future. 
        </p>

        </>
    )
}
