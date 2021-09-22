
import React from 'react';

import { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon } from './styles';
type Props = {
    toggleTheme: () => void
}
const NavBar = (props:Props) => {
    return(
        <Nav>
            <NavText>devfinder</NavText>
            <NavSwitchMode onClick={() => props.toggleTheme()}>
                <NavSwitchModeText>Dark</NavSwitchModeText>
                <NavSwitchModeIcon />
            </NavSwitchMode>
        </Nav>
    )
}

export default NavBar;