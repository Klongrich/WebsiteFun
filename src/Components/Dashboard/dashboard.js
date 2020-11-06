import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { User } from "@styled-icons/boxicons-solid/User";
import { Home } from "@styled-icons/entypo/Home";

import { LogOutCircle } from "@styled-icons/boxicons-regular/LogOutCircle";
import { LogoutBox } from "@styled-icons/remix-line/LogoutBox";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { Payments } from "@styled-icons/material-outlined/Payments";

import DeFiPic from "../Crypto/pics/DeFi.jpg";

import { AccountInfo } from "./account_info";
import ArticlePage from "./article_page";

export const Header = styled.div`
  ul {
    list-style-type: none;
    display: inline-block;
  }

  li {
    float: left;
    padding-left: 35px;
    padding-top: 10px;
    font-size: 22px;
    font-weight: bold;
  }

  li:hover {
    color: red;
    cursor: pointer;
  }

  background-color: #a1afff;

  border-bottom: 3px #6380ff solid;
`;

export const SideNavBarContainer = styled.div`
  background-color: #ebeeff;
  height: 600px;
  width: 200px;
  border-right: 3px #6380ff solid;
  text-align: center;

  ul {
    list-style-type: none;
    margin-left: -35px;
    margin-top: -30px;
  }

  li {
    padding-top: 30px;
  }

  li:hover {
    color: red;
    cursor: pointer;
  }

  float: left;
`;

export const MiddleContent = styled.div`
  text-align: center;
  background-color: #bbc5fc;

  padding-top: 20px;
  padding-bottom: 40px;

  height: 550px;

  h2 {
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }

  background-color: #d9e0ff;
`;

export const BlogPostTitles = styled.div`
  background-color: black;
  color: white;

  opacity: 0.7;

  padding-top: 1px;

  width: 100%;

  font-size: ${(props) => props.fontSize};

  position: absolute;
  bottom: 0;
`;

export const BlogPost = styled.div`
  posistion: realtive;

  text-align: center;
  width: ${(props) => props.width};

  height: ${(props) => props.height};
  border: 1px black solid;
  border-radius: 5px;

  margin-left: ${(props) => props.marginLeft};
  margin-top: 10px;

  background-image: url(${(props) => props.Image});
  background-size: 100% 100%;

  float: left;

  &:hover {
    transition-timing-function: ease-in;
    transition: 0.2s;
    transform: scale(1.05);
  }

  transition-timing-function: ease-out;
  transition: 0.25s;
  transform: scale(1);
`;

export const StockPicks = styled.div`
  display: inline-block;

  width: 80%;

  margin-top: 50px;

  ul {
    text-align: left;
    list-style-type: none;
    float: left;
    padding-left: 150px;
    margin-top: -10px;
  }

  li {
    padding-bottom: 20px;
  }
`;
const articles_data = [
  {
    title: "09/06/2020",
    content: "Content Comming Soon......",
  },
  {
    title: "08/15/2020",
    content: "Content Comming Soon......",
  },
  {
    title: "05/12/2020",
    content: "Content Comming Soon......",
  },
  {
    title: "12/36/2020",
    content: "Content Comming Soon......",
  },
];

export default function DashBoard(accountInfo) {
  const [pageState, setPageState] = useState("Home");
  const [articleTitle, setArticleTitle] = useState("");

  const TopOfPage = () => {
    return (
      <Header>
        <ul>
          <li Style="font-size: 30px; padding-left: 10px; :hover{color:black};">
            Dashboard
          </li>
          <li Style="margin-left: 620px" onClick={() => setPageState("Home")}>
            {" "}
            <Home size="20px" /> Home
          </li>
          <li onClick={() => setPageState("Account Info")}>
            {" "}
            <User size="20px" /> Account
          </li>
        </ul>
      </Header>
    );
  };

  const SideNavBar = () => {
    return (
      <SideNavBarContainer>
        <h2> Articles </h2>
        <ul>
          {articles_data.map((data) => (
            <li onClick={() => updatePage(data.title)}> {data.title}</li>
          ))}
        </ul>
      </SideNavBarContainer>
    );
  };

  function updatePage(title) {
    setPageState("Article");
    setArticleTitle(title);
  }

  if (pageState == "Account Info") {
    return (
      <>
        <TopOfPage />
        <AccountInfo />
      </>
    );
  }

  if (pageState == "Article") {
    return (
      <>
        <TopOfPage />
        <SideNavBar />

        <MiddleContent>
          <h2> {articleTitle} </h2>
          <p> Content coming soon .....</p>
        </MiddleContent>
      </>
    );
  }
  return (
    <>
      <TopOfPage />

      <div>
        <SideNavBar />

        <MiddleContent>
          <h1> Market Overview </h1>
          <BlogPost Image={DeFiPic} width="18%" height="170px" marginLeft="8%">
            <BlogPostTitles>
              <h2>DeFi and It's Current State</h2>
              <p>09/24/2020</p>
            </BlogPostTitles>
          </BlogPost>

          <BlogPost Image={DeFiPic} width="18%" height="170px" marginLeft="8%">
            <BlogPostTitles>
              <h2>DeFi and It's Current State</h2>
              <p>09/24/2020</p>
            </BlogPostTitles>
          </BlogPost>

          <BlogPost Image={DeFiPic} width="18%" height="170px" marginLeft="8%">
            <BlogPostTitles>
              <h2>DeFi and It's Current State</h2>
              <p>09/24/2020</p>
            </BlogPostTitles>
          </BlogPost>

          <StockPicks>
            <h2> Stocks / Cryptos To Watch (09/02/2020)</h2>

            <ul>
              <h2>Stocks</h2>
              <li>$TSLA</li>
              <li>$TWTR</li>
            </ul>

            <ul>
              <h2>Crypto</h2>
              <li>ETH </li>
              <li>DODGE</li>
            </ul>

            <ul>
              <h2>DeFi</h2>
              <li>$SUSHI</li>
              <li>$YFI</li>
            </ul>

            <ul>
              <h2>Options</h2>
              <li>$SNAP</li>
              <li>$UVXY</li>
            </ul>
          </StockPicks>
        </MiddleContent>
      </div>
    </>
  );
}
