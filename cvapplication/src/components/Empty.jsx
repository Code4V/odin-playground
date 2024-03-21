import React from "react";
import styled from "styled-components";

const EmptyWrapper = styled.div``;

export class Empty extends React.Component {
  render() {
    return (
      <EmptyWrapper>
        {this.props.placeHolder ?? "No items to display!"}
      </EmptyWrapper>
    );
  }
}
