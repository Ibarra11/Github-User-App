import React from 'react';

import { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon } from './styles';
import { NavbarProps } from '../../shared/types';

const NavBar = ({ theme, toggleTheme }: NavbarProps) => {
  if (theme.mode === 'light') {
    var { lm_secondary_grey, lm_primary_black } = theme;
  } else {
    var { dm_primary_white, dm_secondary_blue } = theme;
  }
  return (
    <Nav>
      <NavText>devfinder</NavText>
      <NavSwitchMode
        toggleColor={lm_secondary_grey || dm_primary_white}
        toggleHoverColor={lm_primary_black || dm_secondary_blue}
        onClick={() => toggleTheme()}
      >
        <NavSwitchModeText>Dark</NavSwitchModeText>
        <NavSwitchModeIcon themeMode={theme.mode} />
      </NavSwitchMode>
    </Nav>
  );
};

export default NavBar;
