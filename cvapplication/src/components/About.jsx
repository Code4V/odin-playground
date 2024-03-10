import React from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import InfoData from "../data/cvdata.json";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiPhp, SiJavascript } from "react-icons/si";
import { SkillList } from "./SkillList";

const { about } = InfoData;

export const MainWrapper = styled.section`
  padding-inline: 16px;
  display: grid;

  grid-template-columns: subgrid;
  grid-column: 2/5;
  grid-template-rows: repeat(6, auto)
`

const skillList = [
  {
    "icon": FaGithub(),
    "skillName": 'Github'
  },
  {
    "icon":  SiPhp(),
    "skillName": 'PHP'
  },
  {
    "icon": SiJavascript(),
    "skillName": 'Javascript'
  },
  {
    "icon": FaHtml5(),
    "skillName": 'HTML'
  },
  {
    "icon": FaCss3Alt(),
    "skillName": 'CSS'
  },
  {
    "icon": FaReact(),
    "skillName": 'React'
  }
]

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
        <SkillList $colspanstart={1} $colspanend={3} $hasSubheading={'Proficient in '} skills={skillList}/>
      </MainWrapper>
    )
  }
}