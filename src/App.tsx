import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import Profile from './components/profile';
import { DarkMode, LightMode } from './shared/styles/themes';
import { GithubApiResponse, ThemeMode, Mode } from './shared/types';
import font from './shared/styles/fonts';
import { device } from './shared/media_query_breakpoints';

function App() {
  const [mode, setMode] = useState<Mode>('light');
  const [theme, setTheme] = useState<ThemeMode>(LightMode);
  const [userData, setUserData] = useState<GithubApiResponse | null>(null);
  function handleThemeChange() {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }

  useEffect(() => {
    if (mode === 'light') {
      setTheme(LightMode);
    } else {
      setTheme(DarkMode);
    }
  }, [mode]);

  return (
    <Container theme={theme}>
      <Content theme={theme}>
        <NavBar theme={theme} toggleTheme={handleThemeChange} />
        <SearchBar theme={theme} handleUserRequest={setUserData} />
        {userData && <Profile userData={userData} theme={theme} />}
      </Content>
    </Container>
  );
}

export default App;

const Container = styled.div.attrs<ThemeMode, { bg: string }>((props) => ({
  bg: props.theme.mode === 'light' ? props.theme.lm_primary_grey : props.theme.dm_primary_dark_blue,
}))`
  display: flex;
  min-height: 100%;
  justify-content: center;
  background-color: ${(props) => props.bg};
  align-items: flex-start;
`;

const Content = styled.div.attrs<ThemeMode, { font_color: string }>((props) => ({
  font_color:
    props.theme.mode === 'light' ? props.theme.lm_primary_black : props.theme.dm_primary_white,
}))`
  width: 90%;
  padding: 5% 0;
  color: ${(props) => props.font_color};
  font-family: ${`${font.mono} ${font.base}`};
  border-radius: 12px;

  @media ${device.mobileL} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 70%;
  }
  @media ${device.laptop} {
    width: 60%;
  }
  @media ${device.laptopL} {
    width: 50%;
  }
`;
