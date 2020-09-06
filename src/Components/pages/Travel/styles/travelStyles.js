import styled from "styled-components";
import mapPic from "../pics/worldmap.jpg"

export const TravelContainer = styled.div`

    background-image: url(${mapPic});
    height: 670px;

    margin-top: 0px;
    padding-top: 2%;
    background-size: cover;
    text-align: center;

    h2 {
      margin-top: 0px;
    }

    ul {
      list-style-type: none;
      float: left;
      margin-left: 15px;
      margin-top: 0px;
    }

    li {
      padding-top: 15px
    }

    a {
      text-decoration: none;
      color:black;
    }

    a:hover {
      color: blue;
    }
`


export const Header = styled.div`

  font-size: 30px;

`

export const Visited = styled.div`

  margin-left: 10px;
  padding-top: 20px;
  padding-bottom: 20px;

  display: inline-block;
  
  border: 1px black solid;
  background-color: rgb(255, 255, 255, 0.4);

  h2 {
    margin-top: -50px;
  }

`

export const NotVisited = styled.div`
    
  margin-left: 5%;
  padding-top: 20px;
  padding-bottom: 20px;

  display: inline-block;

  border: 1px black solid;
  background-color: rgb(255, 255, 255, 0.4);

  h2 {
    margin-top: -50px;
  }


`