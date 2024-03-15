import React from 'react';
import styled from 'styled-components';
import { MainWrapper } from './About';
import Info from './Info';
import { project } from '../data/data';


const { projects } = project;

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
        {
          projects.map((proj, key) => {
            const { $colspanstart, $hasPaddingInlineEnd, $colspanend, $rowspanend, $rowspanstart }  = proj.styles ?? '';
            return (
              <Info 
                $colspanstart={ $colspanstart }
                $colspanend={ $colspanend }
                header={ proj.header }
                body={ proj.body }
                list={ proj.list } 
              />
            )
          })
        }
        
      </ProjectContainer>
    )
  }
}