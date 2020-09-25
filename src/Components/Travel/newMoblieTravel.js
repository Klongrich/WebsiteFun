import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import MoblieTravel from './moblieTravel'

import Footer from '../footerComponets/Footer'

import {PageContent} from './blogpage'

import IcelandBackground from './pics/BlogBackgrounds/icelandbackground.jpg'

import {All, Scandinavia, WesternEurope, EasternEurope} from './data/EuropeCountries'


var URLlink = "https://www.longrichk.com/travel?page="; 


export const Container = styled.div`

    background-color: #5ca848;
    border: 1px black #309152;
    height: 110%;

    padding-top: 15px;
    padding-bottom: 80px;

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

export const RegionChoice = styled.div`

    height: 270px;
    width: 100%;

    text-align: center;

    font-family: Helvetica;

    margin-top: 70px;


`

export const RegionButton = styled.div`

    border: 3px #1d4d1b solid;

    border-bottom: 8px #1d4d1b solid; 

    border-radius: 10px;

    background-color: #2d8029;
    color: white;
    font-size: 38px;
    
    margin-bottom: 45px;
    margin-left: 60px;

    height: 90px;

    p {
        margin-top: 25px;
    }

    &:hover {
        background-color: #42bf3d;
    }

    width: 40%;

    float: left;

`

export default function MoblieCrypto () {

    const [veiwingPage, setVeiwingPage] = useState(false);
    const [oldTravelPage, setOldTravelPage] = useState(false);

    const [region, setRegion] = useState(All);

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState("Put Content Here");

    const [blogImage, setImage] = useState(IcelandBackground);

    useEffect(() => {

        var temp = window.location.href.split("=");

        console.log(temp[1]);

        if (temp[1]){
            updatePageById(temp[1]);
        }

    }, [])

    function updatePageById(title){
       
        var update = All.map(function (data) {
            if (data.title == title) {

                setPageTitle(data.title);
                setPageDate(data.date);
                setPageContent(data.content);
                setImage(data.blogBackground);
                
                setVeiwingPage(true);
    
                window.scrollTo(0, 0)
     
              }    
            });

        return (update);
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
         
            <PageContent image={blogImage} title={pageTitle} date={pageDate} content={pageContent}/>

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
    
            <h2 Style="font-size: 80px; 
                       text-align: center;
                       color: #163320;"
                       > 
                       Visited Countreis </h2>

            <h2 Style="font-size: 50px; 
                       text-align: center;
                       color: #163320;
                       margin-top: -30px"
                       > 
                       (Regions) </h2>

            
            <RegionChoice>
          
                <RegionButton onClick={() => setRegion(All)} >
                    <p> All </p>
                </RegionButton>

                <RegionButton onClick={() => setRegion(Scandinavia)}>
                    <p> Scandinavia </p>
                </RegionButton>

                <RegionButton onClick={() => setRegion(WesternEurope)} >
                    <p> Western Europe </p>
                </RegionButton>

                <RegionButton onClick={() => setRegion(EasternEurope)}>
                    <p> Eastern Europe</p>
                </RegionButton>
           
            </RegionChoice>
            

            {region.map( data => (
                <BlogPost Image={data.image} 
                          onClick={() => 
                            window.location = URLlink + data.title
                            } >
    
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