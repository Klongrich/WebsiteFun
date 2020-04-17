import React from "react";
import Global from "../../../styles/global";
import styled from "styled-components";

import {Container, Box, BoxTitle, BoxText, Header} from "./styles/HomeStyles"

const boxData = [
  {
    id: 0,
    title: "Travel",
    text: "check out some Travel Stories!",
    bgColor: "#D5CAFA",
    link: "travel"
  },
  {
    id: 1,
    title: "Crypto",
    text: "Thoughts and Information on Crypto",
    bgColor: "#EDA9A9",
    link: "block-chain"
  },
  {
    id: 2,
    title: "Stocks",
    text: "From penny stocks to Marco econmics",
    bgColor: "#F2EE8D",
    link: "stocks"
  },
  {
    id: 3,
    title: "Software",
    text: "Projects that I have worked / working on",
    bgColor: "#9FEACD",
    link: "software"
  }
];

export default function HomePage() {
  return (
    <>
    <Header>
      Kyle Longrich
    </Header>

    <Container>
      {boxData.map(box => (
        <Box key={box.id} bgColor={box.bgColor} as="a" href={box.link}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>   
    </>
  );
}