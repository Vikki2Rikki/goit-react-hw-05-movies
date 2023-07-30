import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavSection = styled.section`
  display: flex;
  gap: 50px;
  padding-left: 70px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 20px;
  background-color: #e1dbdb;
  border-bottom: 1px solid black;
`;

export const HeaderNavigate = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
`;
