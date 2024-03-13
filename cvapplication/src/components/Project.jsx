import React from 'react';
import styled from 'styled-components';
import { MainWrapper } from './About';
import Info from './Info';

const ProjectContainer = styled(MainWrapper)`
`

const ProjectHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;

  grid-column-start: 1;
  grid-column-end: 4;
`;

export class Project extends React.Component {
  render(){
    return(
      <ProjectContainer>
        <ProjectHeader> Projects Involved </ProjectHeader>
        <Info header="Lakbay Sa Bayan: Travel Agency Booking System" 
              body="These are the projects I've done during my academic career. Additional projects will be added as my professional career continues"
              $colspanstart={1}
              $colspanend={4}/>
        <Info header="Completed Projects" 
              body="These are the projects I've done during my academic career. Additional projects will be added as my professional career continues"
              $colspanstart={1}
              $colspanend={4}/>
        <Info header="Completed Projects" 
              body="These are the projects I've done during my academic career. Additional projects will be added as my professional career continues"
              $colspanstart={1}
              $colspanend={4}/>
      </ProjectContainer>
    )
  }
}