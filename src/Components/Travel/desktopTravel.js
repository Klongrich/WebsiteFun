import React from 'react';
import 'animate.css'

import { Header, NotVisited, Visited, TravelContainer } from './styles/travelStyles'

export default function DesktopTravel() {

    return (
        <>
            <TravelContainer>

                <Header>
                    <h2 Styles="margin-bottom: 0px"> Traveling </h2>
                    <h2 id="number" class="animated bounce "> 22 / 195 Countries </h2>
                </Header>


                <Visited>
                    <h2 id="vsc"> Visted Countries (Click For Story)</h2>
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
                </Visited>


                <NotVisited>
                    <h2>Want To Visit</h2>
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
                    </ul>

                    <ul id="nsecondrow">
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
                    </ul>


                    <ul id="fourthrow">

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

                    <ul id="fithrow">
                        <li> Turkey</li>
                        <li> Georgia</li>
                        <li> Azerbaijan </li>
                        <li> Jordan</li>
                        <li> Israel </li>
                        <li> Lebanon </li>
                        <li> Oman </li>
                        <li> United Arab Emirates </li>
                        <li> pakistan </li>
                        <li> India </li>
                        <li> And Many More...... </li>
                    </ul>
                </NotVisited>
            </TravelContainer>
        </>
    );
}