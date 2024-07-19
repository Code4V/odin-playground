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
  grid-column-end: 5;
`;

const ProjectLink = styled.a`
  display: inline-block;
  padding: 1rem .75rem;
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
            <>
              <Info
                $colspanstart={1}
                $colspanend={5}
                $isFlex={true}
                $gapSize={"1rem"}
                header={proj.header}
                body={proj.body}
                list={proj.list}
                img={proj.img}
                key={key}
                alt={proj.alt}
                />
              <ProjectLink href={proj.link}> Go to Project Link </ProjectLink>
            </>
          );
        })}
      </ProjectContainer>
    );
  }
}

export {ProjectLink};