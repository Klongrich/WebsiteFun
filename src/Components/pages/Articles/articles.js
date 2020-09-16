import React , {useState, useEffect} from "react";
import styled from "styled-components";

import DeFi from "./Content/DeFi"

import {AllPost} from '../Crypto/data/cryptoBlogData.js'
import {PageContent} from './Content/blogPage'

var URLlink = "http://localhost:3000/articles?articleID="; 

const Container = styled.div`

    border: 1px solid white;
    font-family: Roboto;

    text-align: center;

    h2 {
        padding-top: 20px;
    }

    h3{
        text-decoration: none;

        font-size: 24px;
        margin-top: 12px;
    
        color: blue;
    }

    h3:hover{
        color: black;
        text-decoration: underline;
        cursor: pointer;
    }
`

export const ArticleBox = styled.div`

    margin-left: 140px;
    margin-right: 140px;

    margin-top: 60px;
    margin-bottom: 50px;

    padding-top: 20px;

    border-top: 2px solid #b1a6a4;

    text-align: center;
`;



export default function Articles () {

    const [pageState, setPageState] = useState("Home");

    const [pageTitle, setPageTitle] = useState("Title");
    const [pageDate, setPageDate] = useState("Date");
    const [pageContent, setPageContent] = useState("");


    useEffect(() => {

        var Temp = window.location.href.split("=");
        var id = Temp[1];

        if (id) {
            updatePageById(parseInt(id, 10))
        }
    }, [])

    function updatePageById(id){
       
        var update = AllPost.map(function (data) {
            if (data.id == id) {

                setPageTitle(data.title);
                setPageDate(data.date);
                setPageContent(data.content);
                
                window.scrollTo(0, 0)
                setPageState("Viewing");
     
              }    
            });

        return (update);
    }
    if (window.innerWidth > 999) {

        if (pageState == "Viewing") {
            
            return (
                <>
                    <PageContent title={pageTitle} date={pageDate} content={pageContent}/>
                </>
            )

        } else {

        return (
            <>
            <Container> 
            <h2> Articles </h2>

                {AllPost.map(data => (
                    <ArticleBox> 
                    
                    <p Style="color: #9fa8a3;"> {data.date}</p>

                    <h3 onClick={() =>  window.location = URLlink + data.id}> {data.title} </h3>
                    
                    </ArticleBox>
                ))}
            </Container>
            </>
        );
                }
    } else {

        if (pageState == "Viewing") {
            
            return (
                <>
                    <PageContent title={pageTitle} date={pageDate} content={pageContent} fontSize="30px" headerSize="50px" />
                </>
            )

        } else {

            return (
                <>
                <Container> 
                <h2 Style="font-size: 90px;"> Articles </h2>

                    {AllPost.map(data => (
                        <ArticleBox> 
                        
                        <p Style="color: #9fa8a3;
                                font-size: 40px"> {data.date}</p>

                        <h3 Style="font-size: 50px;"
                            onClick={() =>  window.location = URLlink + data.id}
                            > {data.title} </h3>
                        
                        </ArticleBox>
                    ))}
                </Container>

                </>
            );
        }
    }
}