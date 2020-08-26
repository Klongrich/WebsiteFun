import React , {useEffect, useState} from "react";

import HomePageV2 from "./HomePageV2"
import HomePageV1 from "./old/HomePageV1"

import {ToggleLeft} from '@styled-icons/boxicons-solid/ToggleLeft'
import {ToggleRight} from '@styled-icons/boxicons-solid/ToggleRight'

import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

export const ImageSlider = styled.div`

    padding-left: 95%;
    margin-bottom: -45px;
    visibility: ${props => props.show};
` 

export const Version = styled.p`

    margin-bottom: -24px;
    text-align: right;
    padding-right: 6%;
    color: ${props => props.color}
`

export default function MainPage () {

    const [version, setVersion] = useState(true);
    const [color, setColor] = useState("white");
    const [leftSlider, setLeftSlider] = useState ("hidden");
    const [rightSlider, setRightSlider] = useState ("visible")
    const [vText, setVText] = useState("V2");    

    const SampleComponent = () => {
        return <> {version ? <HomePageV2 /> : <HomePageV1 />} </>;
    };
    
    function switchHomePage() {
        if (version == true) {
          setVersion(false);
          setColor("black");
          setVText("V1")
          setRightSlider("hidden");
          setLeftSlider("visible");
        } else {
          setVersion(true);
          setColor("white");
          setVText("V2");
          setLeftSlider("hidden");
          setRightSlider("visible");
        }
    }
    
    return (
        <>


            <Version color={color}>{vText}</Version>
            <ImageSlider show={leftSlider}>
                <ToggleLeft size="40px" color={color} onClick={() => switchHomePage()}/>
            </ImageSlider>

            <ImageSlider show={rightSlider}>
                <ToggleRight size="40px" color={color} onClick={() => switchHomePage()}/>
            </ImageSlider>

            <SampleComponent />
        </>
    )
}