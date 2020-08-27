import React, {useState, useEffect} from 'react';
import 'animate.css'

import {Header, NotVisited, Visited, TravelContainer} from './styles/travelStyles'

import MoblieTravel from './moblieTravel'
import DesktopTravel from './desktopTravel'

import NewMoblieTravel from './newMoblieTravel'



export const GetTravelPage = ({width}) => {
   
      if (width > 999) {
          return (
            <DesktopTravel />
          );
      } else {
        return (
        <>
            <NewMoblieTravel />
        </>
        );
    }
};

export default function Travel () {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
      });

    useEffect(() =>  {

        function handleResize() {
    
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
      }
    
        window.addEventListener("resize", handleResize);
    
        handleResize();
        
      }, []);

    return (
        <GetTravelPage width={windowSize.width} />
    );
}