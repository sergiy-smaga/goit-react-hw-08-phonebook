import { Component } from 'react';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

export class Filter extends Component {
  filterId = nanoid();

  render() {
    return (
      <StyledFilterDiv>
        <label htmlFor={this.filterId}>Find contacts by name</label>
        <input
          onChange={this.props.onChange}
          id={this.filterId}
          type="text"
          value={this.props.value}
          name="filter"
        />
      </StyledFilterDiv>
    );
  }
}

const StyledFilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 15px;
  }
`;
