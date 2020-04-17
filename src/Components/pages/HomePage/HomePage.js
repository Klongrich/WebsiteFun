import React from "react";
import Global from "../../../styles/global";
import styled from "styled-components";

import {Github} from "@styled-icons/boxicons-logos/Github";
import {Twitter} from "@styled-icons/boxicons-logos/Twitter";
import {Twitch} from "@styled-icons/boxicons-logos/Twitch";
import {Instagram} from "@styled-icons/boxicons-logos/Instagram";
import {Snapchat} from "@styled-icons/boxicons-logos/Snapchat";

import {Container, Box, BoxTitle, BoxText, Header, RedGit} from "./styles/HomeStyles"


const boxData = [
  {
    id: 0,
    title: "Travel",
    text: "check out some Travel Stories!",
    bgColor: "#D5CAFA"
  },
  {
    id: 1,
    title: "Crypto",
    text: "Thoughts and Information on Crypto",
    bgColor: "#EDA9A9"
  },
  {
    id: 2,
    title: "Stocks",
    text: "From penny stocks to Marco econmics",
    bgColor: "#F2EE8D"
  },
  {
    id: 3,
    title: "Software Development",
    text: "Projects that I have worked / working on",
    bgColor: "#9FEACD"
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
        <Box key={box.id} bgColor={box.bgColor}>
          <BoxTitle>{box.title}</BoxTitle>
          <BoxText>{box.text}</BoxText>
        </Box>
      ))}
    </Container>
    <Github size="35"/>
    <Twitter size="35" color="#00acee"/>
    <Twitch size="35" color="#6441A4 " />
    <Instagram size="35" />
    <Snapchat size="35" color="#fffc00" />

    <RedGit />
    </>
  );
}