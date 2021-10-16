import styled from 'styled-components';
import SearchIcon from '../../assets/icon-search.svg';
import { LightMode } from '../../shared/styles/themes';
import { device } from '../../shared/media_query_breakpoints';
const SearchBarContainer = styled.div<{ bg: string }>`
  position: relative;
  display: flex;
  margin-top: 36px;
  align-items: center;
  padding: 4px 4px 4px 12px;
  background-color: ${(props) => props.bg};
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 8px;
`;
const SearchBarIcon = styled.img.attrs<{ placeHolderClr: string }>((props) => ({
  src: SearchIcon,
}))`
  height: 16px;
  @media ${device.mobileL} {
    height: 20px;
  }

  @media ${device.tablet} {
    height: 24px;
  }
  @media ${device.laptop} {
    height: 28px;
  }
  @media ${device.laptopL} {
    height: 32px;
  }
`;

const SearchBarInput = styled.input.attrs<{ placeHolderClr: string }>((props) => ({
  placeholder: 'Search GitHub username...',
}))<{ placeHolderClr: string }>`
  flex-grow: 4;
  border: none;
  background: transparent;
  margin-left: 12px;
  color: inherit;
  font-size: 0.75rem;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.placeHolderClr};
  }

  @media ${device.mobileL} {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    font-size: 1.25rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;

const SearchBarError = styled.span`
  color: #f94144;
  font-weight: 700;
  font-size: 0.75rem;
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const SearchBarButton = styled.button<{ btnClr: string }>`
  flex-grow: 1;
  font-family: inherit;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8rem;
  background-color: ${(props) => props.btnClr};
  color: ${LightMode.lm_primary_white};
  border: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    filter: sepia(0.25);
  }

  @media ${device.mobileL} {
    font-size: 1rem;
  }

  @media ${device.tablet} {
    font-size: 1.25rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
  @media ${device.laptopL} {
    font-size: 1.75rem;
  }
`;

export { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton, SearchBarError };
