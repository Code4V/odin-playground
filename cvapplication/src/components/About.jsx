import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import InfoData from "../data/cvdata.json";

const { about } = InfoData;

const MainWrapper = styled.section`
  padding-inline: 16px;
  display: grid;

  grid-template-columns: subgrid;
  grid-column: 2/5;
`

export default class About extends React.Component {
  render(){
    return(
      <MainWrapper>
        <Header></Header>
        { about.info.map((info, key) => {
          const { $colspanstart, $hasPaddingInlineEnd, $colspanend }  = info.styles ?? '';
          return (
            <Info 
              key={key} 
              header={info.header} 
              subheader={info.subheader} 
              body={info.body} 
              list={info.list}
              $colspanstart={ $colspanstart } 
              $colspanend={ $colspanend } 
              $hasPaddingInlineEnd={ $hasPaddingInlineEnd }
              
            />
          )
        })}

        {/* <Info $colspan="1 / 3"
          $hasPaddingInlineEnd 
          header={InfoData.about.personal.header} 
          subheader={InfoData.about.personal.subheader} 
          body={InfoData.about.personal.body} />
        <Info
          header={InfoData.about.personal.header} 
          subheader={InfoData.about.personal.subheader} 
          body={InfoData.about.personal.body} /> */}
      </MainWrapper>
    )
  }
}