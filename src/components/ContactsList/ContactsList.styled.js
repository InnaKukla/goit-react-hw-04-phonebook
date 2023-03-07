import styled from 'styled-components';

export const PhoneContacts = styled.ul`
  margin-left: 20px;
  font-size: 30px;

  li {
    margin-bottom: 5px;
  }
  button {
    margin-left: 20px;
    width: 80px;
    font-size: 20px;
    border-radius: 5px;
    border: 0px solid lightgray;
    box-shadow: 0px 0px 1px 2px #cecdcd75;
    cursor: pointer;
    padding: 2px 5px;

    :hover {
      background-color: #1f75fe;
      transform: scale(1.1);
    }
  }
`;
