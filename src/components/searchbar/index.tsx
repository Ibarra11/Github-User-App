import React from 'react';
import { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton } from './styles';
const SearchBar = () => {
    return (
        <SearchBarContainer>
            <SearchBarIcon />
            <SearchBarInput />
            <SearchBarButton>Search</SearchBarButton>
        </SearchBarContainer>
    )
}

export default SearchBar;