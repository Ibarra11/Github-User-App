import styled from 'styled-components';
import SearchIcon from '../../assets/icon-search.svg';
import { LightMode } from '../../shared/styles/colors';
const SearchBarContainer = styled.div<{ bg: string }>`
  display: flex;
  height: 10%;
  margin-top: 2rem;
  align-items: center;
  padding: 0 0.5rem 0 1rem;
  background-color: ${(props) => props.bg};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`;
const SearchBarIcon = styled.img.attrs((props) => ({
  src: SearchIcon,
}))`
  height: 50%;
`;

const SearchBarInput = styled.input.attrs((props) => ({
  placeholder: 'Search GitHub username...',
}))`
  flex-grow: 4;
  border: none;
  background: transparent;
  margin-left: 1rem;
  height: 80%;
  &:focus {
    outline: none;
  }
`;

const SearchBarButton = styled.button`
  flex-grow: 1;
  font-family: inherit;
  border-radius: 0.5rem;
  height: 90%;
  font-size: 1.25rem;
  background-color: ${LightMode.primary_blue};
  color: ${LightMode.white};
  border: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton };
