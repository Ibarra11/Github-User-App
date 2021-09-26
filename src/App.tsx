import React, { useState } from 'react';
import styled from 'styled-components';
import NavBar from './components/navbar';
import SearchBar from './components/searchbar';
import Profile from './components/profile';
import { LightMode } from './shared/styles/colors';
import { GithubApiResponse } from './shared/types';
import font from './shared/styles/fonts';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.theme === 'light' ? LightMode.primary_grey : '#000')};
`;

const Content = styled.div`
  width: 50%;
  height: 50%;
  color: ${LightMode.black};
  font-family: ${`${font.mono} ${font.base}`};
`;

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [userInfo, setUserInfo] = useState<GithubApiResponse | null>(null);

  function handleThemeChange() {
    setMode((currTheme) => (currTheme === 'light' ? 'dark' : 'light'));
  }

  console.log(userInfo);

  return (
    <Container theme={mode}>
      <Content>
        <NavBar bg={LightMode.white} toggleTheme={handleThemeChange} />
        <SearchBar bg={LightMode.white} handleUserRequest={setUserInfo} />
        {userInfo && <Profile {...userInfo} />}
      </Content>
    </Container>
  );
}

export default App;
