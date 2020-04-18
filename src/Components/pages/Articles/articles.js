import React from "react";

import {ArticleBox, Title, Date} from "./styles/styles"


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
            id: 2,
            title: "Why The Market Is In A Complete Bubble",
            link: "null",
            date: "04/17/2020"
        }

    ]

    return (
        <>
        <h2> Articles </h2>
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