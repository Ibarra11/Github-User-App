import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import Profile from './components/profile';
import { DarkMode, LightMode } from './shared/styles/themes';
import { ThemeContext } from './context';
import { GithubApiResponse, ThemeMode, Mode } from './shared/types';
import font from './shared/styles/fonts';

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
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const Content = styled.div`
  width: 50%;
  height: 50%;
  color: ${({ theme: { black } }) => black};
  font-family: ${`${font.mono} ${font.base}`};
`;
