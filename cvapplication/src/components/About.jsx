import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import InfoData from "../data/cvdata.json";
import { Skill } from "./Skill";
import { FaGithub } from "react-icons/fa6";

const { about } = InfoData;

const MainWrapper = styled.section`
  padding-inline: 16px;
  display: grid;

  grid-template-columns: subgrid;
  grid-column: 2/5;
  grid-template-rows: repeat(6, auto)
`

export default class About extends React.Component {
  render(){
    return(
      <MainWrapper>
        <Header />
        { about.info.map((info, key) => {
          const { $colspanstart, $hasPaddingInlineEnd, $colspanend, $rowspanend, $rowspanstart }  = info.styles ?? '';
          return (
            <Info 
              key={key} 
              header={info.header} 
              subheader={info.subheader} 
              body={info.body} 
              list={info.list}
              $colspanstart={ $colspanstart } 
              $colspanend={ $colspanend } 
              $rowspanstart= { $rowspanstart }
              $rowspanend={ $rowspanend }
              $hasPaddingInlineEnd={ $hasPaddingInlineEnd }
              
              />
              )
            })}
      </MainWrapper>
    )
  }
}