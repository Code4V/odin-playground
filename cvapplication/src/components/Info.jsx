import React from "react";
import styled, { css } from "styled-components";
import { List } from "./List";


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
font-weight: 500;
`

export default class Info extends React.Component{
  render(){
    return (
      <InfoContainer  
      $colspanstart={ this.props.$colspanstart } 
        $colspanend={ this.props.$colspanend } 
        $hasPaddingInlineEnd={ this.props.$hasPaddingInlineEnd }
      >
        <InfoHeader> { this.props.header }</InfoHeader>
        { 
          this.props.subheader 
          ? <InfoSubHeader> { this.props.subheader }</InfoSubHeader>
          : ""
        }
        <InfoBody> { this.props.body } </InfoBody>

        {
          this.props.list 
          ? <List items={this.props.list}/>
          : ""
        }

      </InfoContainer>
    )
  }
}
const InfoContainer =  styled.div`
  margin-block-start: 2rem;
  ${props => props.$colspanstart && `grid-column-start: ${props.$colspanstart};`}
  ${props => props.$colspanend && `grid-column-end: ${props.$colspanend};`}
  ${props => props.$hasPaddingInlineEnd && `padding-inline-end: 16px;`}
`;
