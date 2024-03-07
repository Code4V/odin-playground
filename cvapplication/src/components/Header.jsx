import { ProfileInfoClass } from "./Profile"
import styled from "styled-components"
import React from "react"


const HeaderContainer = styled.header`
  grid-column: 1/4;
`

export class Header extends React.Component {
  render(){
    return (
      <HeaderContainer>
        <ProfileInfoClass name="Jeanne Francis Rivas" position="IT Programmer "/>
      </HeaderContainer>
    )
  }
}
