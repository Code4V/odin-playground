import React from "react";
import styled from "styled-components";
import Info from "./Info";
import { ProjectLink } from "./Project";

const ContactWrapper = styled.div`
  height: min-content;
`;

const ContactLink = styled(ProjectLink)`
`;

export class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <Info header="Email" body="rivasjeannefrancis@gmail.com" />
        <Info header="My Socials" list={["Github: Code4V"]}/>
        <Info header="Contact Number" list={["0995-200-1867 ( GLOBE )", "0967-004-3898 ( GOMO )"]} />
      </ContactWrapper>
    );
  }
}
