import React from "react";
import { styled } from "styled-components";

const ErrorWrapper = styled.section`
  width: 1024px;
  height: 514px;
`;

export class ErrorPage extends React.Component {
  render() {
    return <ErrorWrapper>{
        this.props.errorMessage ?? "Page Not Found!"
      }</ErrorWrapper>;
  }
}
