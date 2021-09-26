import React, { useState, useEffect, useCallback } from 'react';
import useFetch from '../../shared/hooks/useFetch';
import { GithubApiResponse, SearchBarProps } from '../../shared/types';
import { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton } from './styles';

const BASE_URL = 'https://api.github.com/users/';

const SearchBar = ({ bg, handleUserRequest }: SearchBarProps) => {
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

  // const request = useCallback(
  //   async <Tresponse extends unknown>(url: string, config: RequestInit = {}) => {
  //     const response = await fetch(url, config);
  //     const data = (await response.json()) as Tresponse;
  //     return data;
  //   },
  //   [searchStatus],
  // );

  useEffect(() => {
    if (data) {
      console.log(data);
      handleUserRequest(data);
    } else if (error) {
    }
  }, [data, error]);

  useEffect(() => {
    if (!searchStatus) return;
    const url = `${BASE_URL}${searchTerm}`;
    setUrl(url);
  }, [searchStatus]);

  return (
    <SearchBarContainer bg={bg}>
      <SearchBarIcon />
      <SearchBarInput value={searchTerm} onChange={handleSearchTermChange} />
      <SearchBarButton onClick={handleSearch}>Search</SearchBarButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
