import { Component } from 'react';
import styled from 'styled-components';

export class ListElement extends Component {
  render() {
    const { name, number } = this.props.contact;
    return (
      <StyledLi>
        <p>
          {name} : {number}
        </p>
        <button onClick={() => this.props.delete(name)}>delete</button>
      </StyledLi>
    );
  }
}

const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-bottom: 10px;
  }
  button {
    margin-left: 15px;
  }
`;
