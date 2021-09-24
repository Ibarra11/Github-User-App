import styled from 'styled-components';
import sun from '../../assets/icon-moon.svg';
import { LightMode } from '../../shared/styles/colors';

const Nav = styled.nav<{ bg: string }>`
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

const NavSwitchMode = styled.div`
  color: ${LightMode.secondary_grey};
  align-self: center;

  &:hover {
    cursor: pointer;
    color: ${LightMode.black};
  }
`;

const NavSwitchModeText = styled.span`
  text-transform: uppercase;
  margin-right: 1rem;
  letter-spacing: 0.2rem;
`;

const NavSwitchModeIcon = styled.img.attrs((props) => ({
  src: sun,
}))`
  &:hover {
    fill: orange !important;
  }
`;

export { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon };
