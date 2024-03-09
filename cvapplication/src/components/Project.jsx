import React from 'react';
import styled from 'styled-components';
import { MainWrapper } from './About';

const ProjectContainer = styled(MainWrapper)`
`

const ProjectHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;

  grid-column-start: 1;
  grid-column-end: 3;
`;

export class Project extends React.Component {
  render(){
    return(
      <ProjectContainer>
        <ProjectHeader> Projects Involved </ProjectHeader>
      </ProjectContainer>
    )
  }
}