import React from "react";
import styled from "styled-components";
import Info from "./Info";

const ContactWrapper = styled.div``;

export class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <Info header="Email" body="rivasjeannefrancis@gmail.com" />
        <Info header="Contact Number" list={["0995-200-1867 ( GLOBE )", "0967-004-3898 ( GOMO )"]} />
      </ContactWrapper>
    );
  }
}
