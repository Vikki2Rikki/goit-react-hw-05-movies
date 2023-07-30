import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  padding-left: 70px;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  font-family: sans-serif;
  line-height: 1.5;
`;

export const ListLink = styled(Link)`
  color: #111;
  &:hover {
    color: #ff0000;
  }
`;

export const ListTitle = styled.h1`
  padding-left: 70px;
  font-style: 28px;
`;
