import Rivas from './../assets/Rivas.jpg';
import React from 'react';
import { styled } from 'styled-components';

const Profile = styled.div`
  display: flex;
  flex-flow: column wrap;
  gap: 32px;
  min-height: 250px;
  max-width: @min-height * 2;
  padding: 16px;
  color: darkColor;
  border-radius: 24px;
  // align-items: center;
`;

const ProfilePicContainer = styled.div`
  max-width: 150px;
`

const ProfilePic = styled.img`
  // border-radius: 100svh;
`

const ProfileInfo = styled.div`
`;

const ProfileInfoName = styled.p`
  margin-block-end: 8px;
  font-size: 2.5rem;
  font-weight: 700
`;

const ProfileInfoPosition = styled.p`
  font-weight: 400;
`;


export class ProfileInfoClass extends React.Component {
  render() {
    return (
      <Profile>
        <ProfileInfo>
          <ProfileInfoName> { this.props.name } </ProfileInfoName>
          <ProfileInfoPosition> { this.props.position }</ProfileInfoPosition>
        </ProfileInfo>

        <ProfilePicContainer>
          <ProfilePic src={ Rivas } alt='Prfile Picture of Rivas'/>
        </ProfilePicContainer>

      </Profile>
    )
  }
}