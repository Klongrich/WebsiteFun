import React from 'react'

import {TopInfo, Web3WalletsBox, LayoutLinks} from './Styles/web3Styles'

import meta_mask from './Styles/pics/meta-mask.png'
import my_ether_wallet from './Styles/pics/myEtherWalletLogo.png'
import my_crypto from './Styles/pics/myCrypto.png'

import meta_mask_add from './Styles/pics/meta-mask-add.png'
import meta_mask_seed from './Styles/pics/meta-mask-seed.png'
import meta_mask_new_wallet from './Styles/pics/meta-mask-new-wallet.png'

import {ArrowGoBack} from '@styled-icons/remix-line/ArrowGoBack'

export default function web3Info () {

    return (
        <>

        <Web3WalletsBox>
                <h2 Style="border-bottom: 2px solid black; padding-bottom: 15px;"> Web3 Wallets </h2>

                <img src={meta_mask} Style="height: 100px; width:250px"/>
                <img src={my_ether_wallet} Style="height: 150px; width:250px"/>
                <img src={my_crypto} Style="height: 120px; width:250px"/>       
        </Web3WalletsBox>

            <TopInfo>
                <h2 Style="border-bottom: 1px solid black; padding-bottom: 15px"> What Is Web3? </h2>

                <p> Web3 referes to information that is stored in a decentralized nature. 
                    This meaning information that is stored on chain or in a distrubuted system. 
                    Most of web3 is stored in code refered to as "Smart Contracts"   </p>          
            </TopInfo>

            <TopInfo>
                <h2 Style="border-bottom: 1px solid black; padding-bottom: 15px"> Why Is It Cool? </h2>

                <p> Web3 allows you to own your information instead of companies like
                    Google, Facebook, Snapchat, etc.  It also allows for a censorship resistance
                    Internet meaning no more demonetization polices on sites like YouTube. This
                    enabling free speach.   </p>          
            </TopInfo>


            <TopInfo Style="float:right;">
                <h2 Style="border-bottom: 1px solid black; padding-bottom: 15px"> How To Get Invovled? </h2>

                <p> You can get involved by first downloading a web3 wallet as an extension
                    for your current web-broswer. I reccomend wallets like
                    meta-mask as it is supported on most broswers  </p>    

                <p> You can also learn about smart contract development or you can promote 
                    the use of it through your current work or bussines.   </p>       
            </TopInfo>

            
            <h2  Style="text-align:center; font-size:35px; padding-bottom:10px"> How to Download </h2>

            <div Style="margin-left: 50px; font-weight: bold; font-size: 18px">
                <p Style="padding-bottom:10px;"> 1.) First you have to add on the extension to your current web-broswer </p>

                <img src={meta_mask_add} />

                <p Style="padding-bottom:10px"> 2.) Now you must set up your wallet, This involes you writing down
                    your paraphase in case you lose your wallet or it becomes corrupted. </p>

                <img src={meta_mask_seed} />

                <p Style="padding-bottom:35px"> 3.) Create a password to log into your wallet and bam. You should 
                    good to go and ready to use your new wallet on the decentralized web! </p>

                <img src={meta_mask_new_wallet} />
            </div>

            <div Style="padding-bottom: 100px;">
                <h2 Style="text-align:center; padding-bottom:50px; color:blue"> Wallet Layout Explained </h2>
            
                <LayoutLinks href="/">
                    Meta-Mask
                </LayoutLinks>

                <LayoutLinks href="/">
                    MyEtherWallet
                </LayoutLinks>

                <LayoutLinks href="/">
                    MyCrypto
                </LayoutLinks>
              
            </div>

        </>
    )
}