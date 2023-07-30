import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 320px;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border: 1px solid #111;
  margin-bottom: 12px;
  margin-left: 25px;
`;

export const SearchInput = styled.input`
  /* width: 400px; */
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  line-height: normal;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 108px;
  height: 48px;
  font-size: 18px;
  color: black;
  border-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #ff0000;
    color: white;
  }
  /* width: 60px;
  height: 20px;
  color: white;
  border-color: transparent;
  background-color: grey;
  &:hover {
    background-color: #ff0000;
  } */
`;
