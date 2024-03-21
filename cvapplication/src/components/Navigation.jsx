import { styled } from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";
import { IoPersonCircle, IoBriefcase, IoCall } from "react-icons/io5";
import { IconContext } from "react-icons";

const NavigationContainer = styled.nav`
  position: sticky;
  top: 16px;
  max-width: inherit;
  word-wrap: break-word;
  display: flex;
  flex-flow: column wrap;
  align-content: center;
  height: fit-content;

  grid-row: 1/2;
`;

const ProfileWrapper = styled.div`
  width: 100px;
  transition: 500ms ease-in transform;

  &:hover {
    transform: rotate(-15deg);
  }
`;
const ProfilePicture = styled.span`
  display: inline-block;
  background-color: black;
  color: white;
  width: inherit;
  height: 100px;
  border-radius: 100svh;
  text-align: center;
  vertical-align: center;
  font-weight: 700;
  font-size: 2rem;
  line-height: 6rem;
  font-family: "DM Serif Display";
`;

const ProfileNav = styled.nav``;

const ProfileList = styled.ul`
  list-style: none;
`;

const ProfileListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  margin-block-start: 1.5rem;
  font-weight: 300;
  text-decoration: none;
  align-items: flex-start;
`;

export class Navigation extends React.Component {
  constructor() {
    super();
    this.links = [
      { linkTo: "/", linkName: "About" },
      { linkTo: "Projects", linkName: "Projects" },
      { linkTo: "Contact", linkName: "Contact" },
    ];
  }
  render() {
    return (
      <NavigationContainer>
        <ProfileWrapper>
          <ProfilePicture>JFR.</ProfilePicture>
        </ProfileWrapper>
        <ProfileNav>
          <ProfileList>
            {this.links.map((linkItem, index) => {
              return (
                <ProfileListItem key={index}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                    to={linkItem.linkTo}
                  >
                    {" "}
                    {linkItem.linkName}{" "}
                  </NavLink>
                </ProfileListItem>
              );
            })}
          </ProfileList>
        </ProfileNav>
      </NavigationContainer>
    );
  }
}
