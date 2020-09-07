import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'

import {AllPost} from './data/cryptoBlogData'

export const Container = styled.div`

    background-color: #759ce6;
    border: 1px black #525252;
    height: 3270px;

    padding-top: 15px;

`

export const Header = styled.div`

    background-color: #20448a;
    color: white;

    height: 140px;
    border: 1px #525252 solid;

    margin-top: -10px;

    h2 { 
        margin-left: 15px;
        font-size: 50px;
    }

    p {
        font-size: 40px;
        text-align: right;
        margin-top: -92px;
        margin-right: 30px;
    }

`

export const BlogPostTitles = styled.div`

    background-color: black;
    color: white;

    opacity: 0.7;

    padding-top: 1px;
    padding-bottom: 1px;
    
    width: 100%;

    font-size: 25px;
    margin-top: 190px;


`

export const BlogPost = styled.div`

    posistion: realtive; 

    text-align: center;
    width: 75%;

    height: 350px;
    border: 1px black solid;
    border-radius: 5px;

    margin-left: 12%;
    margin-top: 10%;

    background-image: url(${props => props.Image});
    background-size: 100% 100%;
    
`

export default function MoblieCrypto () {

    const [veiwingPage, setVeiwingPage] = useState(false);

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState(AllPost.DeFiCurrentState);


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

            <PageContent title={pageTitle} date={pageDate} content={pageContent} fontSize="30px" headerSize="50px" />

            <Footer />
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
    
            {AllPost.map( data => (
                <BlogPost Image={data.image} 
                          onClick={() => updatePage(
                            data.title,
                            data.date,
                            data.content,
                            "Content coming soon ........"
                          )} >
    
                    <BlogPostTitles fontSize="14px"
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