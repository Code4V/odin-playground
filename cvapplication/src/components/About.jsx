import React, { Suspense } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import { about } from "../data/data";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiPhp, SiJavascript } from "react-icons/si";
import { SkillList } from "./SkillList";

export const MainWrapper = styled.section`
  padding-inline: 16px;
  display: grid;

  grid-template-columns: subgrid;
  grid-column: 2 / 6;
  grid-template-rows: repeat(6, auto)
`

const ImagePreloader = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`

const skillList = [
  {
    "icon": FaGithub(),
    "skillName": 'Github'
  },
  {
    "icon": SiPhp(),
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
  render() {
    return (
      <MainWrapper>
        <Suspense fallback={ImagePreloader}>
          <Header />
        </Suspense>
        {about.info.map((info, key) => {
          const { $colspanstart, $hasPaddingInlineEnd, $colspanend, $rowspanend, $rowspanstart, $isFlex } = info.styles ?? '';
          return (
            <Info
              key={key}
              header={info.header}
              subheader={info.subheader}
              body={info.body}
              list={info.list}
              $colspanstart={$colspanstart}
              $colspanend={$colspanend}
              $rowspanstart={$rowspanstart}
              $rowspanend={$rowspanend}
              $hasPaddingInlineEnd={$hasPaddingInlineEnd}
              $isFlex={$isFlex}
            />
          )
        })}
        <SkillList $colspanstart={1} $colspanend={4} $hasSubheading={'Proficient in '} skills={skillList} />
      </MainWrapper>
    )
  }
}