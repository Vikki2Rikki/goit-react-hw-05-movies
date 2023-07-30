import React from 'react';

import { NavSection, HeaderNavigate } from './Header.styled';

const Header = () => {
  return (
    <NavSection>
      <HeaderNavigate to="/">Home</HeaderNavigate>
      <HeaderNavigate to="/movies">Movies</HeaderNavigate>
    </NavSection>
  );
};

export default Header;
