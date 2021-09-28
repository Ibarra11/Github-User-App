import React from 'react';

import { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon } from './styles';
import { NavbarProps } from '../../shared/types';

const NavBar = ({ theme, toggleTheme }: NavbarProps) => {
  return (
    <Nav>
      <NavText>devfinder</NavText>
      <NavSwitchMode onClick={() => toggleTheme()}>
        <NavSwitchModeText>Dark</NavSwitchModeText>
        <NavSwitchModeIcon />
      </NavSwitchMode>
    </Nav>
  );
};

export default NavBar;
