import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import DeFiPic from './DeFi.jpg'
import ICOpic from './ICO2.jpeg'
import ETHpic from './ETH2.jpeg'

import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'


const mainPost = {
    title: "DeFi and It's Current State",
    date: "09/6/2020",
    image: DeFiPic
}

const secondPost = [ 
    {
        title: "The ICO Craze Of 2017", 
        date: "08/10/2020",
        image: ICOpic
    },
    {
        title: "Another Title",
        date: "07/12/2020",
        image: null
    }
]

const thridPost = [
    {
        title: "Ethereum Current State", 
        date: "08/10/2020",
        image: ETHpic
    },
    {
        title: "Another Title",
        date: "07/12/2020",
        image: null
    },
    {
        title: "Another Title",
        date: "05/23/2020",
        image: null
    },
    {
        title: "Another Title",
        date: "05/23/2020",
        image: null
    }
]

export const Container = styled.div`

    background-color: blue;
    border: 1px black solid;
    height: 610px;

`

export const Header = styled.div`

    background-color: black;
    color: white;

    height: 50px;
    border: 1px black solid;

    margin-top: -10px;

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

export default function Crypto () {

    const [veiwingPage, setVeiwingPage] = useState(true);

    function updatePage() {

        if (veiwingPage) {
            setVeiwingPage(false);
        } else {
            setVeiwingPage(true);
        }
    
    }

    if (veiwingPage == false) {
        return (
            <>
            <Header>
                <h2> Crypto Blog </h2>
            </Header>
            <button onClick={() => updatePage()}>
                Go back
            </button>
            <PageContent />

            <Footer />
            </>
        );
    } else {
        return (
            <>
            <Header>
                <h2> Crypto Blog </h2>
            </Header>

            <Container>
            <BlogPost Image={DeFiPic}
                      width="40%"
                      height="340px"
                      marginLeft="8%"
                      onClick={() => updatePage()} 
                      >
                <BlogPostTitles> 
                    <h2>DeFi and It's Current State</h2>
                    <p>09/24/2020</p>
                </BlogPostTitles>
            </BlogPost>
    
            {secondPost.map( data => (
                <BlogPost Image={ICOpic} 
                          width="35%"
                          height="150px"
                          marginLeft="8%">
    
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
                          marginLeft="8%">
    
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