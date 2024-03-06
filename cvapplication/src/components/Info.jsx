import React from "react";
import styled, { css } from "styled-components";


const InfoHeader = styled.h2`
font-weight: 700;
`

const InfoBody = styled.p`
margin-block-start: 1rem;
line-height: 1.65rem;
font-weight: 300;
`

const InfoSubHeader = styled.span`
display: inline-block;
margin-block-start: .5rem;
`

export default class Info extends React.Component{
  render(){
    return (
      <InfoContainer 
        $colspan={ this.props.$colspan } 
        $hasPaddingInlineEnd={ this.props.$hasPaddingInlineEnd }
      >
        <InfoHeader> { this.props.header }</InfoHeader>
        { 
        this.props.subheader 
        ? <InfoSubHeader> { this.props.subheader }</InfoSubHeader>
        : ""
      }
        <InfoBody> { this.props.body } </InfoBody>
      </InfoContainer>
    )
  }

}
const InfoContainer =  styled.div`
  margin-block-start: 2rem;
  ${props => props.$colspan && `grid-column: ${props.$colspan};`}
  ${props => props.$hasPaddingInlineEnd && `padding-inline-end: 16px;`}
`;
