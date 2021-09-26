import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import Profile from './components/profile';
// import { LightMode } from './shared/styles/colors';
import { DarkMode, LightMode } from './shared/styles/themes';
import { ThemeContext } from './context';
import { GithubApiResponse, ThemeMode } from './shared/types';
import font from './shared/styles/fonts';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
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
    <ThemeContext.Provider value={theme}>
      <Container bg={theme.main_bg}>
        <Content>
          <NavBar bg={theme.secondary_bg} toggleTheme={handleThemeChange} />
          <SearchBar bg={theme.secondary_bg} handleUserRequest={setUserData} />
          {userData && <Profile userData={userData} theme={theme} />}
        </Content>
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;

const Container = styled.div.attrs((props) => {
  console.log(props);
})`
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
  color: ${LightMode.black};
  font-family: ${`${font.mono} ${font.base}`};
`;
