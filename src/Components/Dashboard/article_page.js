import React from "react";
import styled from "styled-components";

export const Content = styled.div`
  text-align: center;
  background-color: #a1afff;

  padding-top: 20px;
  padding-bottom: 40px;

  h2 {
    border-bottom: 2px solid black;
    padding-bottom: 10px;
  }
`;

export default function Article_Page(title) {
  return (
    <>
      <Content>
        <h1> {title} </h1>
        <div>Stuffs....</div>
      </Content>
    </>
  );
}
