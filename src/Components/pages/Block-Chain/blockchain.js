import React from 'react'
import './blockchain.css'
import '../../../../node_modules/react-grid-layout/css/styles.css'
import '../../../../node_modules/react-resizable/css/styles.css'

import sample from './coolbackground.mp4';

import GridLayout from "react-grid-layout"

class blockchain extends React.Component{


    render () {

        var layout = [
            {i: 'a', x: 0, y: 0, w: 4, h: 7, static:true},
            {i: 'b', x: 4, y: 0, w: 4, h: 7, static:true},
            {i: 'c', x: 10, y: 0, w: 4, h: 7, static:true}
        ];
        
        return(
            <div class="bcontainer">

                    <video id='videoTag' autoPlay loop muted>
                            <source src={sample} type='video/mp4' resizeMode={"cover"} />
                    </video>

                    <div class="bheader">
                        <h2>Block-Chain</h2>
                    </div>

                    <div class="bbody">
                        <p>So it all started with bitcoin
                            this crazy idea of a decentalized currency
                            that was brought up in 2008 few weeks after
                            the crash on wall street.
                        </p>
                    </div>

                    <div class="layout">
                    <GridLayout class="clayout" layout={layout} cols={12} rowHeight={30} width={1000}>
                        
                        <div key="a">
                        <h2>Getting Started</h2>
                           <ul>
                                <li><a href="/block-chain/gettingstarted">What is Bitcoin?</a></li>
                                <li><a href="/block-chain/gettingstarted">How is it Useful?</a></li>
                                <li><a href="/block-chain/gettingstarted">Why Should I car?</a></li>
                            </ul>
                        </div>
                        
                        <div key="b">
                        <h2>Politics of Bitcoin</h2>
                           <ul>
                                <li><a href="block-chain/politics">Centraliztion</a></li>
                                <li><a href="block-chain/politics">Fedral Reserve</a></li>
                                <li><a href="block-chain/politics">Censorship</a></li>
                            </ul>
                        </div>
                        <div key="c">
                        <h2 id="techspec">Techinal Specs</h2>
                           <ul>
                                <li><a href="block-chain/techinalspecs">TPS (Consese Algorithm)</a></li>
                                <li><a href="block-chain/techinalspecs">Data Storage (Ledger) </a></li>
                                <li><a href="block-chain/techinalspecs">Cryptography (Hashing Algorthims)</a></li>
                            </ul>
                        </div>
                    </GridLayout>
                </div>
            </div>
        )
    }

}

export default blockchain;