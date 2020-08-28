import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import MoblieTravel from './moblieTravel'

import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'

import IcelandFlag from './pics/Iceland.png'
import NetherelandsFlag from './pics/netherland.png'
import BelguimFlag from './pics/belguim.png'
import FranceFlag from './pics/france.png'
import SwitzerlandFlag from './pics/switzerland.png'
import ItalyFlag from './pics/italy.png'

import DenmarkFlag from './pics/denmark.png'

import IcelandBackground from './iceland/icelandbackground.jpg'
import NetherlandBackground from './netherlands/netherlands-background.jpg'


import GernmanyFlag from './pics/germany.jpeg'
import SwedenFlag from './pics/sweden.png'
import NorwayFlag from './pics/norway.png'

import PolandFlag from './pics/poland.png'
import AustraiFlag from './pics/austria.jpeg'
import SlovkiaFlag from './pics/slovakia.png'
import CzehcFlag from './pics/czechrepublic.jpg'
import HungaryFlag from './pics/hungary.jpeg'
import CortiaFlag from './pics/cortia.png'
import SloveniaFlag from './pics/slovenia.png'
import LiechenstineFlag from './pics/liechenstine.png'
import UkFlag from './pics/uk.png'
import IrelandFlag from './pics/ireland.jpg'

const All = [
    {
        title: "Iceland",
        blogBackground: IcelandBackground,
        image: IcelandFlag
    },
    {
        title: "Belguim", 
        image: BelguimFlag
    },
    {
        title: "Netherlands",
        blogBackground: NetherlandBackground,
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
    },
    {
        title: "Germany",
        image: GernmanyFlag
    },
    {
        title: "Denmark",
        image: DenmarkFlag
    },
    {
        title: "Sweden",
        image: SwedenFlag
    },
    {
        title: "Norway",
        image: NorwayFlag
    },
    {
        title: "Poland",
        image: PolandFlag
    },
    {
        title: "Austria",
        image: AustraiFlag
    },
    {
        title: "Slovkia",
        image: SlovkiaFlag
    },
    {
        title: "Czech Republic",
        image: CzehcFlag
    },
    {
        title: "Hungary",
        image: HungaryFlag
    },
    {
        title: "Cortia",
        image: CortiaFlag
    },
    {
        title: "Slovenia",
        image: SloveniaFlag
    },
    {
        title: "Liechnstine",
        image: LiechenstineFlag
    },
    {
        title: "United Kingdom",
        image: UkFlag
    },
    {
        title: "Ireland",
        image: IrelandFlag
    }
    
]

const Scandinavia = [
    {
        title: "Iceland",
        blogBackground: IcelandBackground,
        image: IcelandFlag
    },
    {
        title: "Denmark",
        image: DenmarkFlag
    },
    {
        title: "Sweden",
        image: SwedenFlag
    },
    {
        title: "Norway",
        image: NorwayFlag
    }
]

const WesternEurope = [
    {
        title: "Belguim", 
        image: BelguimFlag
    },
    {
        title: "Netherlands",
        blogBackground: NetherlandBackground,
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
    },
    {
        title: "Germany",
        image: GernmanyFlag
    },
    {
        title: "United Kingdom",
        image: UkFlag
    },
    {
        title: "Ireland",
        image: IrelandFlag
    }
]

const EasternEurop = [
    {
        title: "Slovkia",
        image: SlovkiaFlag
    },
    {
        title: "Czech Republic",
        image: CzehcFlag
    },
    {
        title: "Poland",
        image: PolandFlag
    },
    {
        title: "Austria",
        image: AustraiFlag
    },
    {
        title: "Hungary",
        image: HungaryFlag
    },
    {
        title: "Cortia",
        image: CortiaFlag
    },
    {
        title: "Slovenia",
        image: SloveniaFlag
    }
]

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
    font-size: 48px;
    
    margin-bottom: 45px;
    margin-left: 60px;

    height: 90px;

    p {
        margin-top: 15px;
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


    function updatePage(title, date, content, Image) {

        if (veiwingPage) {
            setVeiwingPage(false);
        } else {
            setPageTitle(title);
            setPageDate(date);
            setPageContent(content);
            setImage(Image);
            
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

            
            <RegionChoice>
          
                <RegionButton>
                    <p onClick={() => setRegion(All)} > All </p>
                </RegionButton>

                <RegionButton>
                    <p onClick={() => setRegion(Scandinavia)} > Scandinavia </p>
                </RegionButton>

                <RegionButton>
                    <p onClick={() => setRegion(WesternEurope)} > Western Europe </p>
                </RegionButton>

                <RegionButton>
                    <p onClick={() => setRegion(EasternEurop)} > Eastern Europe</p>
                </RegionButton>
           
            </RegionChoice>
            

            {region.map( data => (
                <BlogPost Image={data.image} 
                          onClick={() => updatePage(
                            data.title,
                            data.date,
                            "Content coming soon ........",
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