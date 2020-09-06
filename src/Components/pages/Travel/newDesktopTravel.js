import React, {useState} from 'react';
import styled from "styled-components";


import Footer from '../../footerComponets/Footer'

import {PageContent} from './blogpage'
import OldDesktopTravel from './desktopTravel'

import IcelandFlag from './pics/Iceland.png'
import NetherelandsFlag from './pics/netherland.png'
import BelguimFlag from './pics/belguim.png'
import FranceFlag from './pics/france.png'
import SwitzerlandFlag from './pics/switzerland.png'
import ItalyFlag from './pics/italy.png'

import DenmarkFlag from './pics/denmark.png'

import IcelandBackground from './iceland/icelandbackground.jpg'
import NetherlandBackground from './netherlands/netherlands-background.jpg'
import SwitzerlandBackground from './pics/switzerlandBlog.jpg'


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
        title: "Switzerland",
        blogBackground: SwitzerlandBackground,
        image: SwitzerlandFlag
    },
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
    height: 1150px;

    padding-top: 15px;
    padding-bottom: 80px;

`

export const Header = styled.div`

    background-color: #287543;
    color: white;

    height: 80px;
    border: 1px #525252 solid;

    margin-top: -10px;

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
                <p onClick={() => switchVersion()}> V2</p>
            </Header>

<Container>
    
    <h2 Style="font-size: 30px;
                margin-top: 0px; 
               text-align: center;
               color: #163320;"
               > 
               Visited Countreis </h2>

    <h2 Style="font-size: 20px; 
               text-align: center;
               color: #163320;
               margin-top: -10px"
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

        <RegionButton onClick={() => setRegion(EasternEurop)}>
            <p> Eastern Europe</p>
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
