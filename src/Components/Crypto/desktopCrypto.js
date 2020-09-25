import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import copy from "copy-to-clipboard";
import { useHistory } from "react-router-dom";


import Footer from '../footerComponets/Footer'

import {PageContent} from './blogpage'

import {Share} from '@styled-icons/boxicons-regular/Share'

import {mainPost, secondPost, thridPost, AllPost} from './data/cryptoBlogData'

var URLlink = "https://www.longrichk.com/Crypto?articleID="; 

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

    const [showLinkCopied, setShowLinkCopied] = useState("hidden");


    useEffect(() => {

        var Temp = window.location.href.split("=");
        var id = Temp[1];

        if (id) {
            updatePageById(parseInt(id, 10))
        }
    }, [])

    function updatePageById(id){
       
        var update = AllPost.map(function (data) {
            if (data.id == id) {

                setPageTitle(data.title);
                setPageDate(data.date);
                setPageContent(data.content);
                
                setVeiwingPage(true);
                window.scrollTo(0, 0)
     
              }    
            });

        return (update);
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
            <BlogPost Image={mainPost.image}
                      width="40%"
                      height="340px"
                      marginLeft="8%"
                      onClick={() => 
                        window.location = URLlink + mainPost.id
                      } 
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
                          onClick={() =>
                            window.location = URLlink + data.id
                        } >
    
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
                          onClick={() =>                           
                              window.location = URLlink + data.id
                            }>
    
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