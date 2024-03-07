import React from "react";
import styled from "styled-components"; 
import { IconContext } from "react-icons";

const SkillContainer = styled.section`
  display: flex;
  align-items: center;
  gap: .5rem;
`;

const SkillIconContainer = styled.div`
  max-width: 32px;
`;

const SkillName = styled.span`
  display: inline-block;
  font-weight: 700;
`;

export class Skill extends React.Component{
  render(){
    return (
      <SkillContainer>
        <SkillIconContainer>
          <IconContext.Provider value={{ size: "100%"}}>
            { this.props.icon }
          </IconContext.Provider>
        </SkillIconContainer>
        <SkillName> { this.props.skillName} </SkillName>
      </SkillContainer>
    )
  }
}