import styled from "styled-components";
import SearchIcon from "../../assets/icon-search.svg";
import { LightMode } from "../../shared/styles/colors";
const SearchBarContainer = styled.div`
    display: flex;
    height: 10%;
    border: 1px solid orange;
    margin-top: 2rem;
    align-items: center;
    padding: 0 0.5rem 0 1rem;
`;
const SearchBarIcon = styled.img.attrs(props => ({
    src: SearchIcon,
}))`
    height: 50%;
`;

const SearchBarInput = styled.input.attrs(props => ({
    placeholder: "Search GitHub username..."
}))`
    flex-grow: 4;
    border: none;
    background: transparent;
    margin-left: 1rem;
    height: 80%;
    &:focus{
        outline: none;
    }
`;

const SearchBarButton = styled.button`
    flex-grow: 1;
    border-radius: 0.5rem;
    height: 90%;
    font-size: 1.25rem;
    background-color: ${LightMode.primary_blue};
    color: ${LightMode.white};
    border: none;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
`;


export { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton };