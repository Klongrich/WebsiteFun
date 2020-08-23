import React from 'react'

import {Header, BackgroundImage} from './styles/aboutStyles'

import myPhoto from './styles/myPhoto.JPG'
import grandTeton from './grandTeton.JPG'
import laJolla from './laJolla.JPG'
import wallStreet from './wallStree.JPG'


import SimpleImageSlider from "react-simple-image-slider"


export default function about () {
    
    const images = [
        { url: myPhoto },
        { url: laJolla},
        { url: grandTeton},
        { url: wallStreet}
    ];
    
    return (
        <>  

            <Header>
                About
            </Header>

            <p Style="padding-left:50px; padding-right:50px; line-height:2;">
            Born and raised outside of Cleveland, Ohio. Found interest in the stock market and coding at ages 16 - 17. After Highschool I decided to travel the US and visited 47 different states. Then decided to pursue education in the computer science field at a school called “42 Silicon Valley”. Got accepted Fall of 2016 and spent the better part of 2 years there. I learned low level C programming along with more aspects about computer science. Later branched off into more Object Oriented programming with Java and Python then eventually ventured into WebDev with ReactJS, Node, etc. While studying computer science I gained an Interest in Bitcoin and other crypto-currencies. Ended up pursuing the crypto field for well over 3 years. Moved back to Ohio then decided to travel to Europe for 6 months. Ended up visiting 20 different countries and meeting a lot of awesome people along the way. Currently living back in Ohio close to friends and family. Excited for what the future holds! 
            </p>

        <div Style="float:left; margin-left: 50px; margin-right: 10%; margin-top: -15px; margin-bottom: -20px">
        <h2> Interset </h2>
        <ul>
            <li> Gaming </li>
            <li> Hiking </li>
            <li> Snowboarding </li>
            <li> Golfing </li>
            <li> Programming </li>
            <li> Day Tradding </li>
        </ul>
        </div>

        <h2> Fun Facts </h2>
        <ul Style="float: left;">
            <li> Placed 9th In Ohio State for polevalut </li>
            <li> Landed a backflip on a snowboard </li>
            <li> Back Packed Multiplue National Parks </li>
            <li> I'm only 22 </li>
        </ul>

        <SimpleImageSlider
            width={450}
            height={280}
            images={images}
        />
      
        </>
    )
}