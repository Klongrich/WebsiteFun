import React, {useState} from 'react';
import styled from "styled-components";

import 'animate.css'

import mapPic from './pics/worldmap.png'


export const TravelContainer = styled.div`

    background-image: url(${mapPic});
    
    height: 100%;

    background-size: cover;
    text-align: center;

    padding-top: 80px;

    h2 {
      margin-top: 0px;
      font-size: 50px;
    }

    ul {
      list-style-type: none;
      float: left;
      margin-left: 15px;
      margin-top: 0px;

      font-size:50px;

    }

    li {
      padding-top: 42px;
    }

    a {
      text-decoration: none;
      color:black;
    }

    a:hover {
      color: blue;
    }
`


export const Header = styled.div`

h2 {
  font-size: 100px;
}
`

export const ListOfCountries = styled.div`
    
    margin-bottom: 150px;

    padding-top: 20px;
    padding-bottom: 20px;

    display: inline-block;

    border: 1px black solid;
    background-color: rgb(255, 255, 255, 0.4);

    h2 {
        margin-top: -130px;
    }

`

export default function MoblieTravel (){
   
      return (
          <>
            <TravelContainer>

                <Header>
                    <h2 Styles="margin-bottom:-20px"> Traveling </h2>
                    <h2 id="number" class="animated bounce" Style="margin-top:-40px; padding-bottom:20px;"> 22 / 195 Countries </h2>
                </Header>

                
                <ListOfCountries>
                    <h2> Visted Countries (Click For Story)</h2>
                        <ul id="firstrow">
                            <li><a href=""> United States</a></li>
                            <li><a href="/travel/iceland"> Iceland</a></li>
                            <li><a href="/travel/netherlands"> Netherlands</a></li>
                            <li><a href=""> Belguim</a></li>
                            <li><a href=""> France</a></li>
                            <li><a href=""> Switzerland</a></li>
                            <li><a href=""> Italy</a></li>
                            <li><a href=""> Germany</a></li>
                            <li><a href=""> Denmark</a></li>
                            <li><a href=""> Sweden</a></li>
                            <li><a href=""> Norway</a></li> 
                        </ul>

                        <ul id="secondrow">
                            <li><a href=""> Poland</a></li>
                            <li><a href=""> Austria</a></li>
                            <li><a href=""> Slovikia</a></li>
                            <li><a href=""> Chezc Rebuplic</a></li>
                            <li><a href=""> Hungray</a></li>
                            <li><a href=""> Sloviena</a></li>
                            <li><a href=""> Croatia</a></li>
                            <li><a href=""> Lienchenstien</a></li>
                            <li><a href=""> Uinted Kingdom</a></li>
                            <li><a href=""> Ireland</a></li>
                            <li><a href=""> Bahamas</a></li>
                        </ul>
                    </ListOfCountries>

                
                <ListOfCountries>
                    <h2 Style="width: 800px; font-size: 60px">Want To Visit</h2>
                    <ul id="nfirstrow">
                        <li><a href=""> Brazil</a></li>
                        <li><a href=""> Argentina</a></li>
                        <li><a href=""> Uruguay</a></li>
                        <li><a href=""> Paraguay</a></li>
                        <li><a href=""> Bolivia</a></li>
                        <li><a href=""> Chile</a></li>
                        <li><a href=""> Peru</a></li>
                        <li><a href=""> Ecuador</a></li>
                        <li><a href=""> Colombia</a></li>
                        <li><a href=""> French Guiana</a></li>
                        <li><a href=""> Venezuela</a></li> 
                        <li><a href=""> Canada</a></li>
                        <li><a href=""> Mexico</a></li>
                        <li><a href=""> Belize</a></li>
                        <li><a href=""> Costa Rica</a></li>
                        <li><a href=""> Nicaragua</a></li>
                        <li><a href=""> Costa Rica</a></li>
                        <li><a href=""> Panama</a></li>
                        <li><a href=""> El Salvador</a></li>
                        <li><a href=""> Thailand</a></li>
                        <li><a href=""> Jamaica</a></li>
                        <li><a href=""> Cayman Islands</a></li> 
                    </ul>
             
                    <ul id="thridrow">
                        <li><a href=""> Philippines</a></li>
                        <li><a href=""> Indonesia </a></li>
                        <li><a href=""> Australia</a></li>
                        <li><a href=""> New Zeland </a></li>
                        <li><a href=""> Portugal </a></li>
                        <li><a href=""> Andorra </a></li>
                        <li><a href=""> Monaco </a></li>
                        <li><a href=""> Greece </a></li>
                        <li><a href=""> Kyrgzstan</a></li>
                        <li><a href=""> South Africa </a></li>
                        <li><a href=""> Montenegro</a></li> 
                        <li><a href=""> Vietnam</a></li>
                        <li><a href=""> China </a></li>
                        <li><a href=""> Romania </a></li>
                        <li><a href=""> Japan </a></li>
                        <li><a href=""> Ukraine </a></li>
                        <li><a href=""> South Korea </a></li>
                        <li><a href=""> Algeria </a></li>
                        <li><a href=""> Kenya </a></li>
                        <li><a href=""> Estonia </a></li>
                        <li><a href=""> Finland </a></li>
                        <li><a href=""> Russia </a></li> 
                    </ul>
                </ListOfCountries>
                </TravelContainer>                          
        </>
      );
}