import React from 'react';
import styled from "styled-components";

import 'animate.css'

import mapPic from './pics/EuroFlags/worldmap.png'

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

export default function MoblieTravel() {

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
            <li> United States</li>
            <li><a href="/travel/iceland"> Iceland </a> </li>
            <li><a href="/travel/netherlands"> Netherlands </a> </li>
            <li> Belguim</li>
            <li> France</li>
            <li> Switzerland</li>
            <li> Italy</li>
            <li> Germany</li>
            <li> Denmark</li>
            <li> Sweden</li>
            <li> Norway</li>
          </ul>

          <ul id="secondrow">
            <li> Poland</li>
            <li> Austria</li>
            <li> Slovikia</li>
            <li> Chezc Rebuplic</li>
            <li> Hungray</li>
            <li> Sloviena</li>
            <li> Croatia</li>
            <li> Lienchenstien</li>
            <li> Uinted Kingdom</li>
            <li> Ireland</li>
            <li> Bahamas</li>
          </ul>
        </ListOfCountries>


        <ListOfCountries>
          <h2 Style="width: 800px; font-size: 60px">Want To Visit</h2>
          <ul id="nfirstrow">
            <li> Brazil</li>
            <li> Argentina</li>
            <li> Uruguay</li>
            <li> Paraguay</li>
            <li> Bolivia</li>
            <li> Chile</li>
            <li> Peru</li>
            <li> Ecuador</li>
            <li> Colombia</li>
            <li> French Guiana</li>
            <li> Venezuela</li>
            <li> Canada</li>
            <li> Mexico</li>
            <li> Belize</li>
            <li> Costa Rica</li>
            <li> Nicaragua</li>
            <li> Costa Rica</li>
            <li> Panama</li>
            <li> El Salvador</li>
            <li> Thailand</li>
            <li> Jamaica</li>
            <li> Cayman Islands</li>
          </ul>

          <ul id="thridrow">
            <li> Philippines</li>
            <li> Indonesia </li>
            <li> Australia</li>
            <li> New Zeland </li>
            <li> Portugal </li>
            <li> Andorra </li>
            <li> Monaco </li>
            <li> Greece </li>
            <li> Kyrgzstan</li>
            <li> South Africa </li>
            <li> Montenegro</li>
            <li> Vietnam</li>
            <li> China </li>
            <li> Romania </li>
            <li> Japan </li>
            <li> Ukraine </li>
            <li> South Korea </li>
            <li> Algeria </li>
            <li> Kenya </li>
            <li> Estonia </li>
            <li> Finland </li>
            <li> Russia </li>
          </ul>
        </ListOfCountries>
      </TravelContainer>
    </>
  );
}