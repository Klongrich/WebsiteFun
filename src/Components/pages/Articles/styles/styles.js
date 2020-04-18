import styled from "styled-components";
import px2vw from "../../../../utils/px2vw";

export const ArticleBox = styled.div`
    display: flex;
    margin: 60px;
    padding: 0px;
    margin-left: 0px;

    padding-left: 60px;
    padding-top: 40px;
    border-top-style: solid;
    border-width: 2px;
    border-color: black;
`;

export const Title = styled.h3`
    text-decoration: underline;
    font-size: 24px;
    maring-left: 50px;

    &:hover {
        color: blue;
    }
`;