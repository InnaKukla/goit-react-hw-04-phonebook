import styled from 'styled-components';

export const FilterInput = styled.label`
  display: inline-grid;

  input {
    padding-top: 10px;
    margin-top: 10px;
    margin-right: 20px;
    width: 300px;
    font-size: 20px;
    border: 0px solid lightgray;
    border-radius: 2px;
    box-shadow: 0px 0px 1px 2px #cecdcd75;

    :active,
    :hover,
    :focus {
      border: 0.5px solid #1f75fe;
      box-shadow: 0px 0px 5px 0px #1f75fe;
      outline: none;
    }
  }
`;
