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
  font-weight: 700;
  line-height: 38px;
  margin: 0;
  align-self: center;
  font-size: 0.9rem;
  @media (min-width: 1200px) {
    font-size: 2.25rem;
  }
  @media (min-width: 992px) AND (max-width: 1199px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) AND (max-width: 991px) {
    font-size: 1.75rem;
  }
  @media (min-width: 576px) AND (max-width: 767px) {
    font-size: 1.25rem;
  }
`;

const NavSwitchMode = styled.div<{ toggleColor: string; toggleHoverColor: string }>`
  align-self: center;
  display: flex;
  color: ${(props) => props.toggleColor};

  align-items: center;
  justify-content: flex-end;
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

  letter-spacing: 0.1rem;
  font-size: 0.5rem;
  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
  @media (min-width: 992px) AND (max-width: 1199px) {
    font-size: 1.25rem;
  }
  @media (min-width: 768px) AND (max-width: 991px) {
    font-size: 1rem;
  }
  @media (min-width: 576px) AND (max-width: 767px) {
    font-size: 0.75rem;
  }
`;

const NavSwitchModeIcon = styled.span<{ themeMode: Mode }>`
  display: inline-block;
  background-image: url(${(props) => (props.themeMode === 'light' ? moon_icon : sun_icon)});
  background-size: contain;
  background-repeat: no-repeat;
  width: 12px;
  height: 12px;
  position: relative;
  bottom: 2px;
  margin-left: 8px;
  @media (min-width: 1200px) {
    width: 32px;
    height: 32px;
    margin-left: 16px;
  }

  @media (min-width: 992px) AND (max-width: 1199px) {
    width: 28px;
    height: 28px;
    margin-left: 0.75rem;
  }

  @media (min-width: 768px) AND (max-width: 991px) {
    width: 20px;
    height: 20px;
  }

  @media (min-width: 576px) AND (max-width: 767px) {
    width: 12px;
    height: 12px;
    margin-left: 0.5rem;
  }
`;

export { Nav, NavText, NavSwitchMode, NavSwitchModeText, NavSwitchModeIcon };
