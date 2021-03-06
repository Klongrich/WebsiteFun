import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 36px;
  padding-left: 32px;

  display: flex;
  flex-wrap: wrap;

  color: white;
  font-size: 42px;
`;

const HeaderLinks = styled.div`
  margin-left: 48%;
  margin-bottom: 42px;
  margin-top: -3px;

  a {
    padding-left: 38px;
    font-size: 14px;
    color: #bf4343;
    text-decoration: underline;
  }
`;

const MoblieHeader = styled.div`
  padding-top: 59.5px;
  padding-left: 35.7px;

  color: white;
  font-size: 100px;

  font-weigth: 900;
`;

const MoblieLinks = styled.div`
  float: left;
  padding-top: 71.4px;
  padding-bottom: 71.4px;

  font-family: sans-serif;

  a {
    padding-left: 35.7px;
    font-size: 42px;
    color: #bf4343;
    text-decoration: none;
  }
`;

const Links = () => {
  return (
    <>
      <a href="/articles"> Articles </a>
      <a href="/about"> About </a>
      <a href="https://github.com/Klongrich/WebsiteFun">
        {" "}
        Website Source Code{" "}
      </a>
    </>
  );
};

export default function Header({ width }) {
  if (width > 999) {
    return (
      <>
        <Container>
          Kyle Longrich
          <HeaderLinks>
            <Links />
          </HeaderLinks>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <MoblieHeader>Kyle Longrich</MoblieHeader>

        <MoblieLinks>
          <Links />
        </MoblieLinks>
      </>
    );
  }
}
