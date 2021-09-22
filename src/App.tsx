import React, {useState} from 'react';
import styled from 'styled-components';
import NavBar from "./components/navbar";
import SearchBar from "./components/searchbar";
import { LightMode } from "./shared/styles/colors";
import font from "./shared/styles/fonts";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme === "light" ? LightMode.primary_grey : "#000"} ;
`;


const Content = styled.div`
  border: 1px solid orange;
  width: 50%;
  height: 50%;
  color: ${LightMode.black};
  font-family: ${`${font.mono} ${font.base}`};
`

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  function handleThemeChange() {
    setMode((currTheme) => currTheme === "light" ? "dark" : "light");
  }
  return (
    <Container theme={mode}>
      <Content>
        <NavBar toggleTheme={handleThemeChange} />
        <SearchBar />
      </Content>
    </Container>
  );
}

export default App;
