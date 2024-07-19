import React from 'react';
import styled from 'styled-components'; 

const ImageWrapper = styled.div`
  max-height: 400px;
  overflow: hidden;
  margin-block-end: 16px;
`;

const ImageDisplay = styled.img`
  object-fit: cover;
  transition: 150ms ease-in-out filter;
  filter: grayscale(1);

  &:hover {
    filter: none;
  }
`;

export class Image extends React.Component {
  render(){
    return(
      <ImageWrapper>
        <ImageDisplay src={ this.props.src } alt={ this.props.alt }/>
      </ImageWrapper>
    )
  }
}