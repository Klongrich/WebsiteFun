import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

export const ArticleBox = styled.div`
    display: flex;
    margin: 60px;
    padding-top: 38px;

    border-top-style: solid;
    border-width: 2px;
    border-color: black;
`;

export const Title = styled.h3`
    text-decoration: underline;
    font-size: 24px;
    margin-top: 12px;

    color: blue;
    &:hover {
        color: red;
    }
`;

export const Date = styled.h3`
    position: absolute;
    left: 85%;
    font-size: 24px
    background-color: red;
`;