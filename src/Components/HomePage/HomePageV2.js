import React, { useEffect, useState } from "react";

import { ChevronDownCircle } from "@styled-icons/boxicons-regular/ChevronDownCircle";
import FadeIn from "react-fade-in";

import { BackgroundImage } from "./stylesV2/HomeStyles";
import Footer from "../footerComponets/Footer";

import { GetAreasOfIntrest } from "./AreasOfInteresLinks";
import { ClientInfo } from "./clientInfo";

import Header from "./Header";
import IndexCache from "./cache";

// import { useCookies } from "react-cookie";
// import Cookies from "js-cookie";
// import styled from "styled-components";
// import { GlobeAmericas } from "@styled-icons/fa-solid/GlobeAmericas";
// import { MessageAltDetail } from "@styled-icons/boxicons-regular/MessageAltDetail";
// import * as Scroll from "react-scroll";
// import Global from "../../styles/global";

// const MoblieHomePageButton = styled.button`
//   text-algin: center;

//   background-color: black;
//   color: white;
//   font-size: 50px;
//   padding-top: 20px;
//   padding-bottom: 20px;
//   padding-left: 80px;
//   padding-right: 80px;
//   border-radius: 5px;
//   cursor: pointer;

//   margin-top: 60px;

//   margin-left: ${(props) => props.left};

//   &:disabled {
//     color: grey;
//     opacity: 0.7;
//     cursor: default;
//   }

//   float: left;
// `;

// const HomePageButton = styled.button`
//   text-algin: center;

//   background-color: black;
//   color: white;
//   font-size: 20px;
//   padding: 10px 60px;
//   border-radius: 5px;
//   cursor: pointer;

//   margin-top: 60px;

//   margin-left: ${(props) => props.left};

//   &:disabled {
//     color: grey;
//     opacity: 0.7;
//     cursor: default;
//   }

//   float: left;
// `;

// const ChatBox = styled.div`
//   padding-left: 90%;
//   margin-top: -12%;
//   padding-bottom: 8%;

//   &:hover {
//   }
// `;

const contentVersion = true;

export default function HomePage() {
  const [browserInfo, setclientInfo] = useState([]);
  const [ipInfo, setipInfo] = useState([]);
  const [ipAdress, setipAdress] = useState(0);
  const [isMoblie, setIsMoblie] = useState(false);

  // const [contentVersion, setContentVersion] = useState(true);
  // const [new_cookie, setCookie] = useCookies(["name"]);

  const scrollDesktop = () => {
    window.scrollTo({ top: 665, behavior: "smooth" });
  };

  const scrollMoblie = () => {
    window.scrollTo({ top: 1747, behavior: "smooth" });
  };

  function get_broswer_info() {
    fetch(process.env.REACT_APP_API_BROSWERINFO)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setclientInfo(json);
          });
        }
      })
      .catch((error) => console.log("Hmm Thats Weird"));
  }

  function get_ip_info() {
    fetch(process.env.REACT_APP_API_IPINFO)
      .then((response) => {
        if (response.ok) {
          response.json().then((json) => {
            setipInfo(json);
            setipAdress(json.ip.substring(7));
          });
        }
      })
      .catch((error) => console.log("Hmm Thats Weird"));
  }

  // function get_cookies() {
  //   if (Cookies.get("user_id")) {
  //     console.log(Cookies.get("user_id"));
  //   } else {
  //     var date = new Date();
  //     date.setTime(date.getTime() + 10 * 24 * 60 * 60 * 1000); // 10 days

  //     setCookie("user_id", "Xf86T957", { expires: date }, { path: "/" });
  //   }
  // }

  useEffect(() => {
    if (window.innerWidth > 999) {
      setIsMoblie(false);
    } else {
      setIsMoblie(true);
    }
    get_broswer_info();
    get_ip_info();
    // get_cookies();

    IndexCache("714");

    // fetch('https://longrichk.com:3013/LogVisit')
    // .then(res => res.json())
  }, []);

  const MiddleInfo = () => {
    if (!isMoblie) {
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
                onClick={scrollDesktop}
              />
            </FadeIn>

            <FadeIn transitionDuration="1600" delay="600"></FadeIn>
          </div>

          <ClientInfo
            width={window.innerWidth}
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
            <Header width={window.innerWidth} />
          </FadeIn>
          <MiddleInfo />
          {/* <ChatBox>
            <MessageAltDetail color="white" size="45px" />
          </ChatBox> */}
        </BackgroundImage>
        <GetAreasOfIntrest
          width={window.innerWidth}
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
