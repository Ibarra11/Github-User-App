import styled from 'styled-components';
import moon_icon from '../../assets/icon-moon.svg';
import sun_icon from '../../assets/icon-sun.svg';

import { Mode } from '../../shared/types';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 10%;
`;

const NavText = styled.h1`
  font-size: 26px;
  font-weight: 700;
  line-height: 38px;
  margin: 0;
  align-self: center;
`;

const NavSwitchMode = styled.div<{ toggleColor: string; toggleHoverColor: string }>`
  align-self: center;
  display: flex;
  color: ${(props) => props.toggleColor};
  width: 100px;
  height: 100%;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.toggleHoverColor};
  }
  &:nth-child(2):hover {
    filter: brightness(0) saturate(100%) invert(18%) sepia(14%) saturate(1048%) hue-rotate(177deg)
      brightness(91%) contrast(90%);
  }
`;

const NavSwitchModeText = styled.span`
  display: inline-block;
  text-transform: uppercase;
  margin-right: 0.5rem;
  letter-spacing: 0.1rem;
`;

const NavSwitchModeIcon = styled.span<{ themeMode: Mode }>`
  display: inline-block;
  background-image: url(${(props) => (props.themeMode === 'light' ? moon_icon : sun_icon)});
  background-size: cover;
  width: 24px;
  height: 24px;
`;

export { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon };
