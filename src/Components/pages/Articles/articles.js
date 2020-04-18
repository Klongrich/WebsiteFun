import React from "react";

import {ArticleBox, Title} from "./styles/styles"


export default function articles () {

{/* Going to be pulled from a server I can just send my stuff to */}

    const blogData = [
        {
            id: 0,
            title: "Future of Education and the Economy",
            link: "null",
            date: "04/20/202"
        } ,
        {
            id: 1,
            title: "Look at employment in the US",
            link: "null",
            date: "04/19/202"
        },
        {
            id: 2,
            title: "Why The Market Is In A Complete Bubble",
            link: "null",
            date: "04/17/202"
        }

    ]

    return (
        <>
        <h2> Articles </h2>
            {blogData.map(data => (
                <ArticleBox> 
                   <Title key={data.id} as="a" href="/blah">
                        {data.title} --- {data.date}
                   </Title>
                </ArticleBox>
            ))}
        </>
    );
}