import React, {useState} from 'react';
import styled from "styled-components";

import './map.css'


import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'
import OldDesktopTravel from './desktopTravel'


import IcelandBackground from './iceland/icelandbackground.jpg'

import {All, Scandinavia, WesternEurope, EasternEurope} from './EuropeCountries'

import {AllStates} from './UnitedStates'

import USAMap from "react-usa-map";

//height: 2450px for all states, about 1150px for all european countries


export const Container = styled.div`

    background-color: #5ca848;
    border: 1px black #309152;
    height: 2450px;

    padding-top: 15px;
    padding-bottom: 80px;

`

export const Header = styled.div`

    background-color: #287543;
    color: white;

    height: 80px;
    border: 1px #525252 solid;

    margin-top: -10px;

    ul {
        list-style-type: none;
        padding-left: 900px;
        margin-top: -45px;
        font-size: 20px;
    }

    li {
        float: left;
        margin-left: 50px;
    }

    li:hover {
        cursor: pointer;
    }

    h2 { 
        margin-left: 15px;
        font-size: 30px;
    }

    p {
        font-size: 25px;
        text-align: right;
        margin-top: -50px;
        margin-right: 30px;
    }

`

export const BlogPostTitles = styled.div`

    color: white; 
    width: 100%;

    font-size: 12px;
    margin-top: -70px;


`

export const BlogPost = styled.div`

    posistion: realtive; 

    text-align: center;
    width: 12%;

    height: 80px;
    border: 3px black solid;
    border-radius: 5px;

    margin-left: 10%;
    margin-top: 8%;

    float: left;

    background-image: url(${props => props.Image});
    background-size: 100% 100%;   
    
    :hover {
        cursor: pointer;
    }
`

export const RegionChoice = styled.div`

    height: 0px;
    width: 100%;

    text-align: center;

    font-family: Helvetica;

    margin-top: 30px;


`

export const RegionButton = styled.div`

    border: 3px #1d4d1b solid;

    border-bottom: 8px #1d4d1b solid; 

    border-radius: 10px;

    background-color: #2d8029;
    color: white;
    font-size: 18px;
    
    margin-bottom: 15px;
    margin-left: 100px;

    height: 45px;

    p {
        margin-top: 15px;
    }

    &:hover {
        background-color: #42bf3d;
        cursor: pointer;
    }

    width: 15%;

    float: left;

`

export default function DesktopTravel () {

    const [pageHeader, setPageHeader] = useState("Visited Countries");

    const [veiwingPage, setVeiwingPage] = useState(false);
    const [oldTravelPage, setOldTravelPage] = useState(false);

    const [region, setRegion] = useState(All);

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState("Put Content Here");

    const [blogImage, setImage] = useState(IcelandBackground);

    function updatePage(title, date, content, Image) {

        if (veiwingPage) {
            setVeiwingPage(false);
        } else {

            setPageTitle(title);
            setPageDate(date);
            setPageContent(content);
            setImage(Image);
            
            setVeiwingPage(true);

            window.scrollTo(0, 0)
            
        }
    }
    
    function switchToStates() {
        setRegion(AllStates)
        setPageHeader("Visited States (47 / 50)")

    }

    function switchToEurope () {
        setRegion(All);
        setPageHeader("Visited Countries");

    }

    function switchVersion () {
        if (oldTravelPage) {
            setOldTravelPage(false);
        } else {
            setOldTravelPage(true);
        }
    }

    function mapHandler (event) {
        alert(event.target.dataset.name);
      };

    function statesCustomConfig () {
        return {
          "NJ": {
            fill: "navy",
            title: "NJ",
            clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
          },
          "NY": {
            fill: "#CC0000",
            title: "New York"
          }
        };
    }


    function GetRegionButtons () {

        if (pageHeader == "Visited Countries") {
            return (
                <>
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
                </>
            )
        } else {
            return (
                <>
                   {/* <USAMap customize={statesCustomConfig()}
                           onClick={ e => mapHandler(e) } /> */}

                    <RegionButton onClick={() => setRegion(All)} >
                        <p> Midwest </p>
                    </RegionButton>

                    <RegionButton onClick={() => setRegion(Scandinavia)}>
                        <p> North East </p>
                    </RegionButton>

                    <RegionButton onClick={() => setRegion(WesternEurope)} >
                        <p> The South </p>
                    </RegionButton>

                    <RegionButton onClick={() => setRegion(EasternEurope)}>
                        <p> West </p>
                    </RegionButton>

                </>
            )
        }

    }

    if (veiwingPage) {
        return (
            <>
         
            <PageContent image={blogImage} title={pageTitle} date={pageDate} content={pageContent}/>

            <Footer />
            </>
        )
    } else if (oldTravelPage) {       
        return (
            <>
            <Header>
                <h2> Travel Blog </h2>
                <p onClick={() => switchVersion()}> V1</p>
            </Header>
            <OldDesktopTravel />
        </>
        )
    }  else {
   
      return (
          <>

            <Header>
                <h2> Travel Blog </h2>
                {/* <p onClick={() => switchVersion()}> V1</p> */}

                
                <ul>
                    <li onClick={ () => switchToStates()}>Untied States</li>
                    <li onClick={ () => switchToEurope()} > Europe </li>
                    <li onClick={() => switchVersion()}> V2</li>
                </ul>
               

            </Header>

<Container>
    
    <h2 Style="font-size: 30px;
                margin-top: 0px; 
               text-align: center;
               color: #163320;"
               > 
               {pageHeader} </h2>

    <h2 Style="font-size: 20px; 
               text-align: center;
               color: #163320;
               margin-top: -10px"
               > 
               (Regions) </h2>

    
    <RegionChoice>
  
        <GetRegionButtons />
   
    </RegionChoice>
    

    {region.map( data => (
        <BlogPost Image={data.image} 
                  onClick={() => updatePage(
                    data.title,
                    data.date,
                    data.content,
                    data.blogBackground
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
