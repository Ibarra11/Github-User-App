import React from 'react';

import { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon } from './styles';
type Props = {
  toggleTheme: () => void;
  bg: string;
};

const NavBar = (props: Props) => {
  return (
    <Nav bg={props.bg}>
      <NavText>devfinder</NavText>
      <NavSwitchMode onClick={() => props.toggleTheme()}>
        <NavSwitchModeText>Dark</NavSwitchModeText>
        <NavSwitchModeIcon />
      </NavSwitchMode>
    </Nav>
  );
};

export default NavBar;
