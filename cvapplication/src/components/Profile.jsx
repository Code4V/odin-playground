import Rivas from "./../assets/HeadMe.webp";
import React from "react";
import { styled } from "styled-components";

const Profile = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 32px;
  min-height: 250px;
  max-width: @min-height * 2;
  color: darkColor;
`;

const ProfileInfo = styled.div``;

const ProfileInfoName = styled.p`
  font-size: 2.5rem;
  font-weight: 700;
`;

const ProfileInfoPosition = styled.p`
  margin-block-start: 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ProfilePicContainer = styled.div`
  // max-width: inherit;
  max-height: 400px;
  overflow: hidden;
`;

const ProfilePic = styled.img`
  object-fit: cover;
  object-position: 0 -300px;
  padding-block-end: 100px;
  filter: grayscale(1);
  transition: 150ms ease-in-out filter;

  &:hover {
    filter: none;
  }
`;

export class ProfileInfoClass extends React.Component {
  render() {
    return (
      <Profile>
        <ProfileInfo>
          <ProfileInfoName> {this.props.name} </ProfileInfoName>
          <ProfileInfoPosition> {this.props.position}</ProfileInfoPosition>
        </ProfileInfo>

        <ProfilePicContainer>
          <ProfilePic src={Rivas} alt="Prfile Picture of Rivas" />
        </ProfilePicContainer>
      </Profile>
    );
  }
}
