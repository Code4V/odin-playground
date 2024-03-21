import React from "react";
import styled from "styled-components";

const ListContainer = styled.ul`
  ${(props) => props.$isFlex && `display: flex;`}
  ${(props) => props.$gapSize && `gap: ${props.$gapSize};`}
`;

const ListItem = styled.li`
  margin-block-start: 16px;
  font-weight: 300;
  line-height: 1.65rem;
`;

const NoList = styled.p`
  font-style: italic;
`;

export class List extends React.Component {
  render() {
    return (
      <ListContainer
        $isFlex={this.props.$isFlex}
        $gapSize={this.props.$gapSize}
      >
        {this.props.items ? (
          this.props.items.map((item, key) => {
            return <ListItem key={key}>{item}</ListItem>;
          })
        ) : (
          <NoList> No list to be found </NoList>
        )}
      </ListContainer>
    );
  }
}
