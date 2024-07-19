import React from "react";
import styled from "styled-components";
import Info from "./Info";
import { render } from "@react-email/render";
import Email from "./../emails";
import { ProjectLink } from "./Project";
import { ProfileInfoClass } from "./Profile";

const ContactWrapper = styled.div`
  height: min-content;
  width: 718px;
  display: grid;
  grid-template-columns: subgrid;
  grid-column: 2/6;
  padding-inline: 16px;
`;

const ContactLink = styled(ProjectLink)`
`;

const ContactHeader = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;

  grid-column-start: 1;
  grid-column-end: 5;
`;

export class Contact extends React.Component {
  render() {
    return (
      <ContactWrapper>
        <ContactHeader> Contact Me </ContactHeader>
        <Info header="Email" body="rivasjeannefrancis@gmail.com" $colspanstart={1}/>
        <Info header="My Socials" list={["Github: Code4V"]} $colspanstart={1}/>
        <Info header="Contact Number" list={["0995-200-1867 ( GLOBE )", "0967-004-3898 ( GOMO )"]} $colspanstart={1}/>
      </ContactWrapper>
    );
  }
}
