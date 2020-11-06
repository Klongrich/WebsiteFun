import React, { useEffect, useState } from "react";

import Global from "../../styles/global";
import styled from "styled-components";
import * as Scroll from "react-scroll";

import { ChevronDownCircle } from "@styled-icons/boxicons-regular/ChevronDownCircle";

import FadeIn from "react-fade-in";

import { BackgroundImage } from "./stylesV2/HomeStyles";

import Footer from "../footerComponets/Footer";

import { GlobeAmericas } from "@styled-icons/fa-solid/GlobeAmericas";

import { GetAreasOfIntrest } from "./AreasOfInteresLinks";
import { TestHeader } from "./Header";
import { ClientInfo } from "./clientInfo";

import { useCookies } from "react-cookie";
import Cookies from "js-cookie";
import Cache from "./cache";

const MoblieHomePageButton = styled.button`
  text-algin: center;

  background-color: black;
  color: white;
  font-size: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  padding-right: 80px;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 60px;

  margin-left: ${(props) => props.left};

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

  float: left;
`;

const HomePageButton = styled.button`
  text-algin: center;

  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  cursor: pointer;

  margin-top: 60px;

  margin-left: ${(props) => props.left};

  &:disabled {
    color: grey;
    opacity: 0.7;
    cursor: default;
  }

  float: left;
`;

export default function HomePage() {
  const [browserInfo, setclientInfo] = useState([]);
  const [ipInfo, setipInfo] = useState([]);
  const [ipAdress, setipAdress] = useState(0);
  const [contentVersion, setContentVersion] = useState(true);
  const [buttonText, setButtonText] = useState("Version 2.1");

  const [new_cookie, setCookie] = useCookies(["name"]);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  const scrollTop = () => {
    window.scrollTo({ top: 665, behavior: "smooth" });
  };

  const scrollMoblie = () => {
    window.scrollTo({ top: 1747, behavior: "smooth" });
  };

  function switchContentVersion() {
    if (contentVersion == true) {
      setContentVersion(false);
      setButtonText("Version2.2");
    } else {
      setContentVersion(true);
      setButtonText("Version2.1");
    }
  }

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    fetch(process.env.REACT_APP_API_BROSWERINFO, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setclientInfo(json);
          });
        }
      })
      .catch((error) => alert("Hmm Thats Weird"));

    fetch(process.env.REACT_APP_API_IPINFO, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setipInfo(json);
            setipAdress(json.ip.substring(7));
          });
        }
      })
      .catch((error) => alert("Hmm Thats Weird"));

    if (Cookies.get("user_id")) {
      console.log(Cookies.get("user_id"));
    } else {
      setCookie("user_id", "Xf86T957", { path: "/" });
    }
    Cache("714");
    // fetch('https://longrichk.com:3013/LogVisit')
    // .then(res => res.json())
  }, []);

  const MiddleInfo = () => {
    if (windowSize.width > 999) {
      return (
        <>
          <div Style="height: 330px; text-align:center;">
            <FadeIn transitionDuration="1600" delay="600">
              <p
                Style="color:white;
                    font-size: 50px;
                    margin-top: 30px;"
              >
                Welcome To My Site
              </p>

              <ChevronDownCircle
                size="65px"
                color="white"
                onClick={scrollTop}
              />

              {/* <a href="/login">
          <HomePageButton left="392px;">
            Log In
          </HomePageButton>
        </a>

        <a href="/signup">
          <HomePageButton left="140px;"> 
            Sign Up
          </HomePageButton>
        </a> */}
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="600"></FadeIn>
          </div>

          <ClientInfo
            width={windowSize.width}
            browserInfo={browserInfo}
            ipAdress={ipAdress}
            ipInfo={ipInfo}
          />
        </>
      );
    } else {
      return (
        <>
          <div
            Style="height: 1371.2px; 
                    text-align:center; 
                    margin-top: 100.8px; 
                    padding-top:40px"
          >
            <FadeIn transitionDuration="1600" delay="600">
              <p Style="color:#e0e0e0; font-size: 90.2px;">
                Welcome To My Site
              </p>
              <div Style="margin-top: 0px;">
                <ChevronDownCircle
                  size="158.5px"
                  color="#e0e0e0"
                  onClick={scrollMoblie}
                />

                {/* <div Style="margin-top: 100px">
            <a href="/login">
              <MoblieHomePageButton left="105px;">
                Log In
              </MoblieHomePageButton>
            </a>

            <a href="/signup">
              <MoblieHomePageButton left="160px;"> 
                Sign Up
              </MoblieHomePageButton>
            </a>
          </div> */}
              </div>
            </FadeIn>
          </div>
        </>
      );
    }
  };

  return (
    <>
      <div class="background">
        <BackgroundImage>
          <FadeIn transitionDuration="1600" delay="0">
            <TestHeader width={windowSize.width} height={windowSize.height} />
          </FadeIn>

          <MiddleInfo />
        </BackgroundImage>

        {/*
    <div Style="margin-bottom:-32px; margin-left:91%">
      <a Style="color: blue; text-decoration:underline; margin-top:2px;" onClick={() => switchContentVersion()}>
        {buttonText}
      </a>
    </div>
*/}

        <GetAreasOfIntrest
          width={windowSize.width}
          contentVersion={contentVersion}
          ipInfo={ipInfo}
          ipAdress={ipAdress}
          browserInfo={browserInfo}
        />

        <Footer />
      </div>
    </>
  );
}
