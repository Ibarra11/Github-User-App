import styled from 'styled-components';
import moon_icon from '../../assets/icon-moon.svg';
import sun_icon from '../../assets/icon-sun.svg';
import { LightMode } from '../../shared/styles/colors';
import { Mode } from '../../shared/types';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 10%;
  border: 1px solid blue;
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
  border: 1px solid blue;
  width: 100px;
  height: 100%;
  align-items: center;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.toggleHoverColor};
  }
`;

const NavSwitchModeText = styled.span`
  display: inline-block;
  text-transform: uppercase;
  margin-right: 1rem;
  letter-spacing: 0.2rem;
`;

// const NavSwitchModeIcon = styled.img.attrs((props) => ({
//   src: sun,
// }))`
//   &:hover {
//     fill: orange !important;
//   }
// `;

const NavSwitchModeIcon = styled.span<{ themeMode: Mode }>`
  display: inline-block;
  background-image: url(${(props) => (props.themeMode === 'light' ? moon_icon : sun_icon)});
  background-size: cover;
  width: 18px;
  height: 18px;
`;

export { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon };
