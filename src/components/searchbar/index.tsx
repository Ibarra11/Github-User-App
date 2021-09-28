import React, { useState, useEffect, useCallback } from 'react';
import useFetch from '../../shared/hooks/useFetch';
import { GithubApiResponse, SearchBarProps } from '../../shared/types';
import { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton } from './styles';

const BASE_URL = 'https://api.github.com/users/';

const SearchBar = ({ theme, handleUserRequest }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [url, setUrl] = useState('');
  const [status, data, error] = useFetch<GithubApiResponse>(url);

  function handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    setSearchStatus(true);
  }

  useEffect(() => {
    console.log('Status: ' + status);
    if (data && status === 'RESOLVED') {
      console.log(data);
      handleUserRequest(data);
    } else if (error) {
    }
  }, [data, error, status]);

  useEffect(() => {
    if (!searchStatus) return;
    const url = `${BASE_URL}${searchTerm}`;
    setUrl(url);
  }, [searchStatus]);

  if (theme.mode === 'light') {
    var { lm_primary_white, lm_primary_blue, lm_secondary_grey } = theme;
  } else {
    var { dm_primary_blue, dm_primary_white, dm_secondary_blue } = theme;
  }
  return (
    <SearchBarContainer bg={lm_primary_white || dm_secondary_blue}>
      <SearchBarIcon />
      <SearchBarInput
        value={searchTerm}
        placeHolderClr={lm_secondary_grey || dm_primary_white}
        onChange={handleSearchTermChange}
      />
      <SearchBarButton onClick={handleSearch} btnClr={lm_primary_blue || dm_primary_blue}>
        Search
      </SearchBarButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
