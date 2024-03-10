import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";

const SkillListContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  margin-block-start: 1.5rem;
  border: 1px solid;
  position: relative;
  padding: .5rem .5rem;
  ${props => props.$colspanstart && `grid-column-start: ${props.$colspanstart};`}
  ${props => props.$colspanend && `grid-column-end: ${props.$colspanend};`}
  ${props => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
  ${props => props.$rowspanend && `grid-row-end: ${props.$rowspanend};`}
  ${props => props.$hasSubheading && `&::after { content: "${props.$hasSubheading}"; position: absolute; top: -12px; left: 0; background-color: white; padding-inline: .5rem; font-weight: 600}`}
`;

const SkillListItem = styled.li`
`;

const SkillListSubHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
`;



export class SkillList extends React.Component {
  render() {
    return (
      <SkillListContainer 
        $colspanstart={ this.props.$colspanstart } 
        $colspanend={ this.props.$colspanend } 
        $rowspanstart={ this.props.$rowspanstart } 
        $rowspanend={ this.props.$rowspanend } 
        $hasSubheading={ this.props.$hasSubheading } >
        
        {/* <SkillListSubHeader> { this.props.subHeader } </SkillListSubHeader> */}
        { this.props.skills 
          ? this.props.skills.map((skill) => <SkillListItem><Skill icon={skill.icon} skillName={skill.skillName}/></SkillListItem>)
          : "No List Provided"}
      </SkillListContainer>
    )
  }
}