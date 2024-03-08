import React from "react";
import styled from "styled-components";
import { Skill } from "./Skill";

const SkillListContainer = styled.ul`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  ${props => props.$colspanstart && `grid-column-start: ${props.$colspanstart};`}
  ${props => props.$colspanend && `grid-column-end: ${props.$colspanend};`}
  ${props => props.$rowspanstart && `grid-row-start: ${props.$rowspanstart};`}
  ${props => props.$rowspanend && `grid-row-end: ${props.$rowspanend};`}
`;

const SkillListItem = styled.li`
`;



export class SkillList extends React.Component {
  render() {
    return (
      <SkillListContainer 
        $colspanstart={ this.props.$colspanstart } 
        $colspanend={ this.props.$colspanend } 
        $rowspanstart={ this.props.$rowspanstart } 
        $rowspanend={ this.props.$rowspanend } >
        { this.props.skills 
          ? this.props.skills.map((skill) => <SkillListItem><Skill icon={skill.icon} skillName={skill.skillName}/></SkillListItem>)
          : "No List Provided"}
      </SkillListContainer>
    )
  }
}