import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import copy from "copy-to-clipboard";
import { useHistory } from "react-router-dom";




import DeFiPic from './DeFi.jpg'
import ICOpic from './ICO2.jpeg'
import ETHpic from './ETH2.jpeg'
import yamETH from './yamETH3.jpeg'
import miningPic from './mining.jpeg'
import chainlinkPic from './chainlink4.jpg'
import btcPic from './btc.jpeg'

import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'

import {Share} from '@styled-icons/boxicons-regular/Share'

import DeFiCurrentState from './articles/DeFiCurrentState'
import MiningExplained from './articles/MiningExplained'


const mainPost = {
    title: "DeFi and It's Current State",
    date: "09/6/2020",
    content: DeFiCurrentState,
    link: "http:localhost:3000/Crypto?Article=DeFiCurrentState",
    image: DeFiPic
}

const secondPost = [ 
    {
        title: "Mining Explained",
        date: "08/23/2020",
        content: MiningExplained,
        image: miningPic
    },
    {
        title: "What is $LINK?",
        date: "Coming Soon",
        image: chainlinkPic
    }
]

const thridPost = [
    {
        title: "Ethereum", 
        date: "Coming Soon",
        image: ETHpic
    },
    {
        title: "What is $YAM?",
        date: "Coming Soon",
        image: yamETH
    },
    {
        title: "The ICO Craze Of 2017", 
        date: "Coming soon",
        image: ICOpic
    },
    {
        title: "Bitcoin",
        date: "Coming Soon",
        image: btcPic
    }
]

export const Container = styled.div`

    background-color: #759ce6;
    border: 1px black #525252;
    height: 610px;

`

export const Header = styled.div`

    background-color: #20448a;
    color: white;

    height: 60px;
    border: 1px #525252 solid;

    margin-top: -10px;

    h2 { 
        margin-left: 15px;
    }

    p {
        text-align: right;
        margin-top: -45px;
        margin-right: 30px;
    }

`

export const BlogPostTitles = styled.div`

    background-color: black;
    color: white;

    opacity: 0.7;

    padding-top: 1px;
    
    width: 100%;

    font-size: ${props => props.fontSize};

    position: absolute; 
    bottom: 0;

`

export const BlogPost = styled.div`

    posistion: realtive; 

    text-align: center;
    width: ${props => props.width};

    height: ${props => props.height};
    border: 1px black solid;
    border-radius: 5px;

    margin-left: ${props => props.marginLeft};
    margin-top: 3%;

    background-image: url(${props => props.Image});
    background-size: 100% 100%;

    float: left;

    &:hover {
        transition-timing-function: ease-in;
        transition: 0.2s;
        transform: scale(1.05);
      }
    
      transition-timing-function: ease-out;
      transition: 0.25s;
      transform: scale(1);
`

export const ConfrimCopyText = styled.div`

    visibility: ${props => props.show};
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;

    background-color: grey;

    margin-bottom: 20px;


`

export default function DesktopCrypto () {

    const [veiwingPage, setVeiwingPage] = useState(false);

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState(mainPost.content);
    const [pageLink, setPageLink] = useState("Link");

    const [showLinkCopied, setShowLinkCopied] = useState("hidden");

    const [usedLink, setUsedLink] = useState(false);

    useEffect(() => {
        var Temp = window.location.href.split("=");
        var token = Temp[1];

        if (token) {
            setPageContent(mainPost.content);
            setVeiwingPage(true);
            setUsedLink(true);
        }


    })

    function updatePage(title, date, content, link) {


        if (veiwingPage) {
            setVeiwingPage(false);

            if (usedLink) {
                window.location = '/Crypto';
                setUsedLink(false);    
            }

        } else {
            setPageTitle(title);
            setPageDate(date);
            setPageLink(link);
            setPageContent(content);
            
            setVeiwingPage(true);
        }
    
    }

    function CopyText (text) {
        copy(text);
        setShowLinkCopied("visible");
    }

    if (veiwingPage) {
        return (
            <>
            <Header>
                <h2> Crypto Blog </h2>
                <p> V1 </p>
            </Header>

            <button Style="margin-top: -40px;" onClick={() => updatePage()}>
                Go back
            </button>

            <PageContent title={pageTitle} date={pageDate} content={pageContent}/>


            {/*
            <div Style="margin-top: 50px;
                        border: 1px solid black;
                        color: white;
                        background-color: black;
                        font-size: 30px" >

            <p Style="margin-left: 15%;" 
                onClick={() => CopyText(pageLink)}
                >
                 Share This Article 
                 <Share size="35px" color="green" />  
                
            </p>

        
            <ConfrimCopyText show={showLinkCopied}>
                Copied!
            </ConfrimCopyText>

            <button Style="margin-left: 72%; 
                           margin-top: -150px;
                           width: 250px;
                           font-size: 25px;" onClick={() => updatePage()}>
                Go back
            </button>

            </div>
            */}


            </>
        );
    } else {
        return (
            <>
            <Header>
                <h2> Crypto Blog </h2>
                <p> V1 </p>
            </Header>

            <Container>
            <BlogPost Image={DeFiPic}
                      width="40%"
                      height="340px"
                      marginLeft="8%"
                      onClick={() => updatePage(
                        mainPost.title,
                        mainPost.date,
                        mainPost.content,
                        mainPost.link
                      )} 
                      >
                <BlogPostTitles> 
                    <h2>DeFi and It's Current State</h2>
                    <p> {mainPost.date} </p>
                </BlogPostTitles>
            </BlogPost>
    
            {secondPost.map( data => (
                
                <BlogPost Image={data.image} 
                          width="35%"
                          height="150px"
                          marginLeft="8%"
                          onClick={() => updatePage(
                            data.title,
                            data.date,
                            data.content,
                            data.Link
                          )} >
    
                    <BlogPostTitles fontSize="14px"
                                    >
                        <h2>{data.title}</h2>
                        <p>{data.date}</p>
                    </BlogPostTitles>
    
                </BlogPost>
            ))}
    
            {thridPost.map( data => (
                <BlogPost Image={data.image} 
                          width="15%"
                          height="150px"
                          marginLeft="8%"
                          onClick={() => updatePage(
                            data.title,
                            data.date,
                            data.content
                          )}>
    
                    <BlogPostTitles fontSize="12px"
                                    >
                        <h2>{data.title}</h2>
                        <p>{data.date}</p>
                    </BlogPostTitles>
    
                </BlogPost>
            ))}
    
            </Container>
        <Footer />
                </>
        );
    }
}