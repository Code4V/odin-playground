import { ProfileInfoClass } from "./Profile";
import styled from "styled-components";
import React from "react";

const HeaderContainer = styled.header`
  grid-column: 1/5;
  grid-row: 1/3;
`;

export class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <ProfileInfoClass
          name="Jeanne Francis Rivas"
          position="IT Programmer "
        />
      </HeaderContainer>
    );
  }
}
