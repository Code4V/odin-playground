import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import InfoData from "./../data/cvdata.json";



const MainWrapper = styled.section`
  padding-inline: 16px;
  display: grid;

  grid-template-columns: subgrid;
  grid-column: 2/5;
`

export default class Main extends React.Component {
  render(){
    return(
      <MainWrapper>
        <Header></Header>
        <Info $colspan="1 / 3"
          $hasPaddingInlineEnd 
          header={InfoData.about.personal.header} 
          subheader={InfoData.about.personal.subheader} 
          body={InfoData.about.personal.body} />
        <Info
          header={InfoData.about.personal.header} 
          subheader={InfoData.about.personal.subheader} 
          body={InfoData.about.personal.body} />
      </MainWrapper>
    )
  }
}