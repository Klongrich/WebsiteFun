import React, {useState, useEffect} from 'react'
import styled from "styled-components";


import DeFiPic from './DeFi.jpg'
import ICOpic from './ICO2.jpeg'
import ETHpic from './ETH2.jpeg'
import yamETH from './yamETH3.jpeg'
import miningPic from './mining.jpeg'
import chainlinkPic from './chainlink4.jpg'
import btcPic from './btc.jpeg'

import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'

import DeFiCurrentState from './articles/DeFiCurrentState'
import MiningExplained from './articles/MiningExplained'


const mainPost = {
    title: "DeFi and It's Current State",
    date: "09/6/2020",
    content: DeFiCurrentState,
    image: DeFiPic
}

const secondPost = [ 
    {
        title: "The ICO Craze Of 2017", 
        date: "08/10/2020",
        image: ICOpic
    },
    {
        title: "What is $LINK?",
        date: "07/12/2020",
        image: chainlinkPic
    }
]

const thridPost = [
    {
        title: "Ethereum", 
        date: "08/10/2020",
        image: ETHpic
    },
    {
        title: "What is $YAM?",
        date: "07/12/2020",
        image: yamETH
    },
    {
        title: "Mining Explained",
        date: "05/23/2020",
        content: MiningExplained,
        image: miningPic
    },
    {
        title: "Bitcoin",
        date: "05/23/2020",
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

export default function DesktopCrypto () {

    const [veiwingPage, setVeiwingPage] = useState(false);

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState(DeFiCurrentState);


    function updatePage(title, date, content) {

        if (veiwingPage) {
            setVeiwingPage(false);
        } else {
            setPageTitle(title);
            setPageDate(date);
            setPageContent(content);
            
            setVeiwingPage(true);
        }
    
    }

    if (veiwingPage) {
        return (
            <>
            <Header>
                <h2> Crypto Blog </h2>
                <p> V1 </p>
            </Header>

            <button Style="margin-left: 10px; margin-top: 10px;" onClick={() => updatePage()}>
                Go back
            </button>

            <PageContent title={pageTitle} date={pageDate} content={pageContent}/>


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
                      )} 
                      >
                <BlogPostTitles> 
                    <h2>DeFi and It's Current State</h2>
                    <p>09/24/2020</p>
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
                            data.content
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