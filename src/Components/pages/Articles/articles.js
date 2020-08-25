import React from "react";

import {ArticleBox, Title, Date, Header} from "./styles/styles"


export default function articles () {

{/* Going to be pulled from a server I can just send my stuff to */}

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

    return (
        <>
        <Header>Articles</Header>
            {blogData.map(data => (
                <ArticleBox> 
                   <Title key={data.id} as="a" href="/blah">
                        {data.title}
                   </Title>
                   <Date key={data.id}>
                        {data.date}
                   </Date>
                </ArticleBox>
            ))}
        </>
    );
}