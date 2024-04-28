import React from "react";
import styled from "styled-components";
import { MainWrapper } from "./About";
import Info from "./Info";
import { project } from "../data/data";

const { projects } = project;

const ProjectContainer = styled(MainWrapper)`
  margin-block-end: 4rem;
  gap: 1.5rem
`;

const ProjectHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;

  grid-column-start: 1;
  grid-column-end: 4;
`;

const InfoWrapper = styled.div`
`;

export class Project extends React.Component {
  render() {
    return (
      <ProjectContainer>
        <ProjectHeader> Projects Involved </ProjectHeader>
        {projects.map((proj, key) => {
          const {
            $colspanstart,
            $hasPaddingInlineEnd,
            $colspanend,
            $rowspanend,
            $rowspanstart,
          } = proj.styles ?? "";
          return (
            <Info
              $colspanstart={1}
              $colspanend={4}
              $isFlex={true}
              $gapSize={"1rem"}
              header={proj.header}
              body={proj.body}
              list={proj.list}
              img={proj.img}
              key={key}
            />
          );
        })}
      </ProjectContainer>
    );
  }
}
