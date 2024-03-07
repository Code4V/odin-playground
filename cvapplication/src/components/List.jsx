import React from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
`;

const ListItem = styled.li`
  margin-block-start: 16px;
  font-weight: 300;
  line-height: 1.65rem;
`;

const NoList = styled.p`
  font-style: italic
`

export class List extends React.Component{
  render() {
    return (
      <ListContainer>
        {  
          this.props.items 
          ? this.props.items.map((item, key) => {
            return <ListItem key={key}>{ item }</ListItem>;
          })
          : <NoList> No list to be found </NoList>
        }
      </ListContainer>
    )
  }
}