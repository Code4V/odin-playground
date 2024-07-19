import React, { Suspense } from "react";
import styled from "styled-components";
import { Header } from "./Header";
import Info from "./Info";
import { about } from "../data/data";
import { FaGithub, FaHtml5, FaCss3Alt, FaReact, FaJava, FaC, FaPython, FaFileExcel, FaFileWord, FaFilePowerpoint, FaFigma, FaWordpress, FaGit } from "react-icons/fa6";
import { SiPhp, SiJavascript, SiCplusplus, SiCsharp, SiAdobephotoshop, SiAdobepremierepro, SiVega } from "react-icons/si";
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
  {
    icon: FaGit(),
    skillName: "Git"
  },
];

const basicList = [
  {
    icon: FaJava(),
    skillName: "Java"

  },
  {
    icon: FaPython(),
    skillName: "Python"
  },
  {
    icon: FaC(),
    skillName: "C"
  },
  {
    icon: SiCplusplus(),
    skillName: "C++"
  },
  {
    icon: SiCsharp(),
    skillName: "C#"
  },
  {
    icon: FaWordpress(),
    skillName: "WordPress"
  },
]

const othersList = [
  {
    icon: FaFileExcel(),
    skillName: "MS Excel"
  },
  {
    icon: FaFileWord(),
    skillName: "MS Word"
  },
  {
    icon: FaFilePowerpoint(),
    skillName: "MS Powerpoint"
  },
  {
    icon: SiAdobephotoshop(),
    skillName: "Photoshop"
  },
  {
    icon: SiAdobepremierepro(),
    skillName: "Premiere Pro"
  },
  {
    icon: SiVega(),
    skillName: "Sony Vega"
  },
  {
    icon: FaFigma(),
    skillName: "Figma"
  },
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
        {[proficientList, basicList, othersList].map((list, key) => {
          let subHeading;
          switch(key){
            case 0: 
              subHeading = "Proficient in"
              break;
            case 1: 
              subHeading = "Knows the basics of"
              break;
            case 2: 
              subHeading = "Other Skills"
              break;
            default:
              subHeading = "";
          }
          return (
            <SkillList
              $colspanstart={1}
              $colspanend={5}
              $hasSubheading={subHeading}
              skills={list}
            />
          )
        })}
      </MainWrapper>
    );
  }
}
