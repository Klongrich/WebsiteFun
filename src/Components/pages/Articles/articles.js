import React , {useState} from "react";
import styled from "styled-components";

import DeFi from "./Content/DeFi"

const blogData = [
    {
        id: 0,
        title: "Future of Education and the Economy",
        link: "null",
        date: "04/20/2020"
    } ,
    {
        id: 1,
        title: "Look at employment in the US",
        link: "null",
        date: "04/19/2020"
    },
    {
        id: 3,
        title: "Future of the Crypto Economy",
        link: "null",
        date: "04/12/2020"
    },
    {
        id: 4,
        title: "Inflation Rates and Average Job Salaries",
        link: "null",
        date: "04/08/2020"
    },
    {
        id: 5,
        title: "More To Come",
        link: "null",
        date: "07/14/2020"
    }
]

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

    function update_page(article) {

    }

    if (window.innerWidth > 999) {

        if (pageState == "Viewing") {
            
            return (
                <>
                    <DeFi />
                </>
            )

        } else {

        return (
            <>
            <Container> 
            <h2> Articles </h2>

                {blogData.map(data => (
                    <ArticleBox> 
                    
                    <p Style="color: #9fa8a3;"> {data.date}</p>

                    <h3 onClick={() => setPageState("Viewing")}> {data.title} </h3>
                    
                    </ArticleBox>
                ))}
            </Container>
            </>
        );
                }
    } else {

        return (
            <>
            <Container> 
            <h2 Style="font-size: 90px;"> Articles </h2>

                {blogData.map(data => (
                    <ArticleBox> 
                    
                    <p Style="color: #9fa8a3;
                              font-size: 40px"> {data.date}</p>

                    <h3 Style="font-size: 50px;"> {data.title} </h3>
                    
                    </ArticleBox>
                ))}
            </Container>

            </>
        );
    }
}