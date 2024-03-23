import React, { Suspense } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import { about } from "../data/data";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaJava } from "react-icons/fa6";
import { SiPhp, SiJavascript } from "react-icons/si";
import { SkillList } from "./SkillList";

export const MainWrapper = styled.section`
  padding-inline: 16px;
  display: grid;

  grid-template-columns: subgrid;
  grid-column: 2 / 6;
  grid-template-rows: repeat(6, auto);
`;

const ImagePreloader = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;

const proficientList = [
  {
    icon: FaGithub(),
    skillName: "Github",
  },
  {
    icon: SiPhp(),
    skillName: "PHP",
  },
  {
    icon: SiJavascript(),
    skillName: "Javascript",
  },
  {
    icon: FaHtml5(),
    skillName: "HTML",
  },
  {
    icon: FaCss3Alt(),
    skillName: "CSS",
  },
  {
    icon: FaReact(),
    skillName: "React",
  },
];

const basicList = [
  {
    icon: FaJava(),
    skillName: "Java"

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
          const {
            $colspanstart,
            $hasPaddingInlineEnd,
            $colspanend,
            $rowspanend,
            $rowspanstart,
            $isFlex,
          } = info.styles ?? "";
          return (
            <Info
              $colspanstart={$colspanstart}
              $colspanend={$colspanend}
              $rowspanstart={$rowspanstart}
              $rowspanend={$rowspanend}
              $hasPaddingInlineEnd={$hasPaddingInlineEnd}
              $isFlex={$isFlex}
              key={key}
              header={info.header}
              subheader={info.subheader}
              body={info.body}
              list={info.list}
            />
          );
        })}
        <SkillList
          $colspanstart={1}
          $colspanend={4}
          $hasSubheading={"Proficient in "}
          skills={proficientList}
        />
        <SkillList
          $colspanstart={1}
          $colspanend={4}
          $hasSubheading={"Knows the basics of "}
          skills={basicList}
        />
      </MainWrapper>
    );
  }
}
