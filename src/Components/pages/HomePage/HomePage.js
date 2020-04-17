import React from "react";
import Global from "../../../styles/global";
import styled from "styled-components";

import {Container, Box, BoxTitle, BoxText, Header, HeaderLinks, HeaderText,HeaderOffSet, BackgroudnImage} from "./styles/HomeStyles"

const boxData = [
  {
    id: 0,
    title: "Travel",
    text: "check out some Travel Stories!",
    bgColor: "#D5CAFA",
    hoverColor: "#e3dcfa",
    image: "null",
    link: "travel"
  },
  {
    id: 1,
    title: "Crypto",
    text: "Thoughts and Information on Crypto",
    bgColor: "#EDA9A9",
    hoverColor: "#ebbebe",
    image: "null",
    link: "block-chain"
  },
  {
    id: 2,
    title: "Stocks",
    text: "From penny stocks to Marco econmics",
    bgColor: "#F2EE8D",
    hoverColor: "#ebe8a4",
    image: "null",
    link: "stocks"
  },
  {
    id: 3,
    title: "Software",
    text: "Projects that I have worked / working on",
    bgColor: "#9FEACD",
    hoverColor: "#bce8d7",
    image: "null",
    link: "software"
  }
];

const headerData = [
  {
    id: 0,
    text: "Articles",
    link: "/articles"
  } ,
  {
    id: 1,
    text: "About",
    link: "/about"
  },
  {
    id: 2,
    text: "Website Source Code",
    link: "https://github.com/Klongrich/WebsiteFun"
  }
]

export default function HomePage() {
  return (
    <div class="background">

    <Header>
      <HeaderOffSet>
      Kyle Longrich
      </HeaderOffSet>
      {headerData.map(data => (
        <HeaderLinks>
          <HeaderText key={data.id} as="a" href={data.link}> {data.text} </HeaderText>
        </HeaderLinks>

      ))}
    </Header>
    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor} BackgroundImage={box.image} as="a" href={box.link}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>  
    </div>
  );
}