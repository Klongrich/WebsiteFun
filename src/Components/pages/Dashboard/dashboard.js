import React , {useEffect, useState} from 'react'
import styled from "styled-components";

import {User} from '@styled-icons/boxicons-solid/User'

import {Home} from '@styled-icons/entypo/Home'

import DeFiPic from '../Crypto/DeFi.jpg'


export const Background = styled.div`


`

export const Header = styled.div`


    ul{
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
    }

    background-color:#d9e0ff;
    border-bottom: 3px #6380ff solid;


`

export const SideNavBar = styled.div`


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

    li{
        padding-top: 30px;
    }

    li:hover{
        color: red;
    }

    float: left;


`

export const MiddleContent = styled.div`

    text-align: center;
    background-color: #a1afff;

    padding-top: 20px;
    padding-bottom: 40px;


    h2{
        border-bottom: 2px solid black;
        padding-bottom: 10px;
    }


    

`

export const BlogPostTitles = styled.div`

    background-color: black;
    color: white;

    opacity: 0.7;

    padding-top: 1px;
    
    width: 100%;

    font-size: ${props => props.fontSize};

    position: absolute; 
    bottom: 0;

`

export const BlogPost = styled.div`

    posistion: realtive; 

    text-align: center;
    width: ${props => props.width};

    height: ${props => props.height};
    border: 1px black solid;
    border-radius: 5px;

    margin-left: ${props => props.marginLeft};
    margin-top: 10px;

    background-image: url(${props => props.Image});
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

`

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

      li{
          padding-bottom: 20px;
      }

`

export default function DashBoard () {

    const [pageState, setPageState] = useState("Home");
    const [articleTitle, setArticleTitle] = useState("");


    function updatePage(title){
        setPageState("Article");
        setArticleTitle(title);
    }

    if (pageState == "Article") {
        
        return (
            <>
            <Header>
                <ul>
                    <li Style="font-size: 30px; padding-left: 10px;">Dashboard</li>
                    <li Style="margin-left: 800px" onClick={() => setPageState("Home")}> <Home size="20px" /> Home</li>
                    <li> <User size="20px" /> Account</li>
                </ul>
            </Header>
            
                <SideNavBar>
                   <h2> Articles </h2>

                   <ul>
                       <li onClick={ () => updatePage("08/09/2020")}> 08/09/2020</li>

                       <li> 06/29/2020</li>

                       <li> 05/10/2020</li>

                       <li> 03/12/2020</li>

                       <li> 01/02/2020</li>
                   </ul>
                </SideNavBar>

                <MiddleContent>
                    <h2> {articleTitle} </h2>
                </MiddleContent>

            </>
            );
        }
    return (
        <>
            <Header>
                 <ul>
                    <li Style="font-size: 30px; padding-left: 10px;">Dashboard</li>
                    <li Style="margin-left: 800px" onClick={() => setPageState("Home")}> <Home size="20px" /> Home</li>
                    <li> <User size="20px" /> Account</li>
                </ul>
            </Header>
            
            <Background>
                <SideNavBar>
                   <h2> Articles </h2>

                   <ul>
                       <li onClick={ () => updatePage("08/09/2020")}> 08/09/2020</li>

                       <li> 06/29/2020</li>

                       <li> 05/10/2020</li>

                       <li> 03/12/2020</li>

                       <li> 01/02/2020</li>
                   </ul>
                </SideNavBar>

                <MiddleContent>
                   
                   <h1> Exclusive Content </h1>
                   <BlogPost Image={DeFiPic}
                      width="18%"
                      height="170px"
                      marginLeft="8%"
                      >
                        <BlogPostTitles> 
                            <h2>DeFi and It's Current State</h2>
                            <p>09/24/2020</p>
                        </BlogPostTitles>
                    </BlogPost>

                    <BlogPost Image={DeFiPic}
                      width="18%"
                      height="170px"
                      marginLeft="8%"
                      >
                        <BlogPostTitles> 
                            <h2>DeFi and It's Current State</h2>
                            <p>09/24/2020</p>
                        </BlogPostTitles>
                    </BlogPost>

                    <BlogPost Image={DeFiPic}
                      width="18%"
                      height="170px"
                      marginLeft="8%"
                      >
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

            </Background>
        </>
    )
}