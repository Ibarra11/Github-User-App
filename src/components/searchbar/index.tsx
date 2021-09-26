import React, { useState, useEffect, useCallback } from 'react';
import useFetch from '../../shared/hooks/useFetch';
import { GithubApiResponse } from '../../shared/types';
import { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton } from './styles';
type Props = {
  bg: string;
};

const BASE_URL = 'https://api.github.com/users/';

const SearchBar = (props: Props) => {
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
    } else if (error && status === 'REJECTED') {
      console.log('error: ' + JSON.stringify(error));
    }
  }, [data, error, status]);

  useEffect(() => {
    if (!searchStatus) return;
    const url = `${BASE_URL}${searchTerm}`;
    setUrl(url);
  }, [searchStatus]);

  return (
    <SearchBarContainer bg={props.bg}>
      <SearchBarIcon />
      <SearchBarInput value={searchTerm} onChange={handleSearchTermChange} />
      <SearchBarButton onClick={handleSearch}>Search</SearchBarButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
