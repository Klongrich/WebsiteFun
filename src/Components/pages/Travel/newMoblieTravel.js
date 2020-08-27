import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import MoblieTravel from './moblieTravel'

import Footer from '../../footerComponets/Footer'

import {PageContent} from '../Crypto/blogpage'

import IcelandFlag from './pics/Iceland.png'
import NetherelandsFlag from './pics/netherland.png'
import BelguimFlag from './pics/belguim.png'
import FranceFlag from './pics/france.png'
import SwitzerlandFlag from './pics/switzerland.png'
import ItalyFlag from './pics/italy.png'


const postData = [
    {
        title: "Iceland",
        image: IcelandFlag
    },
    {
        title: "Belguim", 
        image: BelguimFlag
    },
    {
        title: "Netherlands",
        image: NetherelandsFlag
    },
    {
        title: "France", 
        image: FranceFlag
    },
    {
        title: "Switzerland",
        image: SwitzerlandFlag
    },
    {
        title: "Italy",
        image: ItalyFlag
    }

]

export const Container = styled.div`

    background-color: #3ebd6b;
    border: 1px black #309152;
    height: 3270px;

    padding-top: 15px;

`

export const Header = styled.div`

    background-color: #287543;
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

    color: white; 
    width: 100%;

    font-size: 40px;
    margin-top: -140px;


`

export const BlogPost = styled.div`

    posistion: realtive; 

    text-align: center;
    width: 75%;

    height: 350px;
    border: 3px black solid;
    border-radius: 5px;

    margin-left: 12%;
    margin-top: 15%;

    background-image: url(${props => props.Image});
    background-size: 100% 100%;
   
`

export default function MoblieCrypto () {

    const [veiwingPage, setVeiwingPage] = useState(false);
    const [oldTravelPage, setOldTravelPage] = useState(false);

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState("Put Content Here");


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

    function switchVersion () {
        if (oldTravelPage) {
            setOldTravelPage(false);
        } else {
            setOldTravelPage(true);
        }
    }

    if (veiwingPage) {
        return (
            <>
            <Header>
                <h2> Travel Blog </h2>
                <p onClick={() => switchVersion()}> V2 </p>
            </Header>

            <button Style="margin-left: 10px; margin-top: 10px;" onClick={() => updatePage()}>
                Go back
            </button>

            <PageContent title={pageTitle} date={pageDate} content={pageContent}/>

            <Footer />
            </>
        );
    } else if (oldTravelPage) {

        return (
            <>
                <Header>
                    <h2> Travel Blog </h2>
                    <p onClick={() => switchVersion()}> Flags </p>
                </Header>
                <MoblieTravel />
            </>
        );

    } else {
        return (
            <>
            <Header>
                <h2> Travel Blog </h2>
                <p onClick={() => switchVersion()}> List</p>
            </Header>

            <Container>
    
            <h2 Style="font-size: 80px; text-align: center; color: #163320;"> Visited Countreis </h2>
            {postData.map( data => (
                <BlogPost Image={data.image} 
                          onClick={() => updatePage(
                            data.title,
                            data.date,
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