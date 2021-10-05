import styled from 'styled-components';
import SearchIcon from '../../assets/icon-search.svg';
import { LightMode, DarkMode } from '../../shared/styles/themes';
const SearchBarContainer = styled.div<{ bg: string }>`
  display: flex;
  height: 10%;
  margin-top: 2rem;
  align-items: center;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  background-color: ${(props) => props.bg};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 8px;
`;
const SearchBarIcon = styled.img.attrs<{ placeHolderClr: string }>((props) => ({
  src: SearchIcon,
}))`
  height: 50%;
`;

const SearchBarInput = styled.input.attrs<{ placeHolderClr: string }>((props) => ({
  placeholder: 'Search GitHub username...',
}))<{ placeHolderClr: string }>`
  flex-grow: 4;
  border: none;
  background: transparent;
  margin-left: 1rem;
  height: 80%;
  color: inherit;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.placeHolderClr};
  }
`;

const SearchBarError = styled.span`
  color: #f94144;
  font-weight: 700;
  position: relative;
  right: 1rem;
`;

const SearchBarButton = styled.button<{ btnClr: string }>`
  flex-grow: 1;
  font-family: inherit;
  border-radius: 0.5rem;
  height: 90%;
  font-size: 1.25rem;
  background-color: ${(props) => props.btnClr};
  color: ${LightMode.lm_primary_white};
  border: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    filter: sepia(0.25);
  }
`;

export { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton, SearchBarError };
