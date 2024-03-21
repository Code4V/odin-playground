import React from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";

const SkillContainer = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  ${(props) =>
    props.$learning &&
    `&::after { position: absolute; content: 'Learning'; top: 0; right: 0; }`}
`;

const SkillIconContainer = styled.div`
  max-width: 16px;
`;

const SkillName = styled.span`
  display: inline-block;
  font-weight: 700;
`;

export class Skill extends React.Component {
  render() {
    return (
      <SkillContainer $learning={this.props.$learning}>
        <SkillIconContainer>
          <IconContext.Provider value={{ size: "100%" }}>
            {this.props.icon}
          </IconContext.Provider>
        </SkillIconContainer>
        <SkillName> {this.props.skillName} </SkillName>
      </SkillContainer>
    );
  }
}
