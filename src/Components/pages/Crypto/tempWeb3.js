import React from 'react'

import {TopInfo, Web3WalletsBox, LayoutLinks} from './Styles/web3Styles'

import meta_mask from './Styles/pics/meta-mask.png'
import my_ether_wallet from './Styles/pics/myEtherWalletLogo.png'
import my_crypto from './Styles/pics/myCrypto.png'

import {ArrowGoBack} from '@styled-icons/remix-line/ArrowGoBack'

export default function web3Info () {

    return (
        <>
        <a href="/Crypto" Style="marign-left: 50px;" > 
                <ArrowGoBack size="30px" />
        </a>
        <Web3WalletsBox>
                <h2 Style="border-bottom: 2px solid black; padding-bottom: 15px;"> Web3 Wallets </h2>

                <img src={meta_mask} Style="height: 100px; width:250px"/>
                <img src={my_ether_wallet} Style="height: 150px; width:250px"/>
                <img src={my_crypto} Style="height: 120px; width:250px"/>
                    
        </Web3WalletsBox>

            <TopInfo>
                <h2> What Is Web3? </h2>

                <p> Web3 referes to information that is stored in a decentralized nature. 
                    This meaning information stored on chain or in a distrubuted system. 
                    Most of web3 is stored in code refered to as "Smart Contracts"   </p>          
            </TopInfo>

            <TopInfo>
                <h2> Why Is It Cool? </h2>

                <p> Web3 this allows you to own your information instead of companies like
                    Google, Facebook, Snapchat, etc.  It also allows for a censorship resistance
                    Internet meaning no more demonetization polices on sites like YouTube and
                    allowing free speach.   </p>          
            </TopInfo>


            <TopInfo Style="float:right;">
                <h2> How To Get Invovled? </h2>

                <p> You can get involved by first downloading a web3 wallet as an extension
                    for your current broswer that you are in. I reccomend wallets like
                    meta-mask as it is supported on each broswer  </p>    

                <p> You can also learn about smart contract development or you can promote 
                    the use of it through your current work or bussines.   </p>       
            </TopInfo>

            
            <h2  Style="text-align:center; font-size:25px;"> How to Download </h2>

            <div Style="margin-left: 50px">
                <p> 1.) First you have to add on the extension depending on your broswer </p>

                <p> 2.) Now you must set up your wallet, This is invole you writing down
                    your paraphase in case you wallet is lost or corrupted. KEEP THIS SAFE! </p>

                <p> 3.) Create a password to log into your wallet and bam. You should 
                    good to go and ready to use your new wallet on the decentralized web! </p>
            </div>

            <div>
                <h2 Style="text-align:center; padding-bottom:30px"> Wallet Layout Explained </h2>
            
                <LayoutLinks href="/">
                    Meta-Mask
                </LayoutLinks>

                <LayoutLinks href="/">
                    MyEtherWallet
                </LayoutLinks>

                <LayoutLinks href="/">
                    MyCrypto
                </LayoutLinks>
            
            <a href="/"></a>

      
            </div>

        </>
    )
}