import React from 'react'
import styled from "styled-components";


import {Header, BackgroundImage} from './styles/aboutStyles'

import TahoeBackground from './TahoeBackground.jpg'
import LakeTahoe from './LakeTahoe.jpg'



const Container = styled.div`

    

    background-image:url(${TahoeBackground});
    background-size: 100% 100%;
    height: 640px;

    Color: black;

    font-weight: bold;

    h2{

    }

    ul {
        list-style-type: none;
        margin-left: 10px;
        margin-top: -10px;
        padding-bottom: 30px;
    }

    li{
        padding-bottom: 10px;
    }

    padding-top: 35px;

`

const MoblieContainer = styled.div`


    background-image:url(${TahoeBackground});
    background-size: 100% 100%;
    height: 3870px;

    Color: black;

    font-weight: bold;

    p {
        font-size: 42px;
    }

    h2{
        font-size: 80px;
    }

    ul {
        list-style-type: none;
        padding-bottom: 40px;
    }

    li{
        padding-bottom: 30px;
        font-size: 42px;
    }

    padding-top: 35px;
`

export default function About () {


    if (window.innerWidth > 999) {
    
    return (
        <>  
        <Container> 

        <div Style="background-color: white; 
                    opacity: 0.8;
                    padding-left: 50px;
                    padding-right: 50px;
                    border: 1px solid black;
                    ">

            <Header>
                About
            </Header>

            <p Style="padding-left:50px; padding-right:50px; line-height:2;">

            Born and raised outside of Cleveland, Ohio. Found interest in the stock market and 
            coding at ages 16 - 17. After Highschool I decided to travel the US and visited 47 
            different states. Then decided to pursue education in the computer science field at 
            a school called “42”. Got accepted Fall of 2016 and spent the better 
            part of 2 years there. I learned low level C programming along with more aspects 
            about computer science. Later branched off into more Object Oriented programming with 
            Java and Python then eventually ventured into WebDev with ReactJS, Node, etc. While 
            studying computer science I gained an Interest in Bitcoin and other crypto-currencies. 
            Ended up pursuing the crypto field for well over 3 years. Moved back to Ohio then 
            decided to travel to Europe for 6 months. Ended up visiting 20 different countries 
            and meeting a lot of awesome people along the way. Currently living back in Ohio close 
            to friends and family. Excited for what the future holds! 

            </p>

        
            <ul Style="float: left">
            <h2> Interset </h2>
                <li> Gaming </li>
                <li> Hiking </li>
                <li> Snowboarding </li>
                <li> Programming </li>
                <li> Day Tradding </li>
            </ul>

            <ul Style="display: inline-block;
                        margin-left: 100px;">
            <h2> Fun Facts </h2>
                <li> Was a Polevaulter in Track and Feild </li>
                <li> Landed a backflip on a snowboard </li>
                <li> Backpacked Multiple National Parks </li>
                <li> I'm only 22 </li>
            </ul>
    </div>
       
      </Container>
        </>
    )
    } else {

        return (
            <>

                <MoblieContainer> 

                <div Style="background-color: white; 
                    opacity: 0.8;
                    padding-left: 50px;
                    padding-right: 50px;
                    border: 1px solid black;
                    ">
                
                <h2> About </h2>

                <p Style="padding-left:50px; padding-right:50px; line-height:2;">

                Born and raised outside of Cleveland, Ohio. Found interest in the stock market and 
                coding at ages 16 - 17. After Highschool I decided to travel the US and visited 47 
                different states. Then decided to pursue education in the computer science field at 
                a school called “42”. Got accepted Fall of 2016 and spent the better 
                part of 2 years there. I learned low level C programming along with more aspects 
                about computer science. Later branched off into more Object Oriented programming with 
                Java and Python then eventually ventured into WebDev with ReactJS, Node, etc. While 
                studying computer science I gained an Interest in Bitcoin and other crypto-currencies. 
                Ended up pursuing the crypto field for well over 3 years. Moved back to Ohio then 
                decided to travel to Europe for 6 months. Ended up visiting 20 different countries 
                and meeting a lot of awesome people along the way. Currently living back in Ohio close 
                to friends and family. Excited for what the future holds! 

                </p>


            <ul>
            <h2> Interset </h2>
                <li> Gaming </li>
                <li> Hiking </li>
                <li> Snowboarding </li>
                <li> Programming </li>
                <li> Day Tradding </li>
            </ul>

            <ul>
            <h2> Fun Facts </h2>
                <li> Was a Polevaulter in Track and Feild </li>
                <li> Landed a backflip on a snowboard </li>
                <li> Backpacked Multiple National Parks </li>
                <li> I'm only 22 </li>
            </ul>
            </div>

            </MoblieContainer>
        </>
        )
    }
}