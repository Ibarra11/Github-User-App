import React, { useState, useEffect } from 'react';
import useFetch from '../../shared/hooks/useFetch';
import { GithubApiResponse, SearchBarProps } from '../../shared/types';
import {
  SearchBarContainer,
  SearchBarIcon,
  SearchBarInput,
  SearchBarButton,
  SearchBarError,
} from './styles';

const BASE_URL = 'https://api.github.com/users/';

const SearchBar = ({ theme, handleUserRequest }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchStatus, setSearchStatus] = useState(false);
  const [url, setUrl] = useState('');
  const [status, data, errorRes] = useFetch<GithubApiResponse>(url);
  const [error, setError] = useState(false);

  function handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    setError(false);
    setSearchTerm(e.target.value);
  }

  function handleSearch(
    e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>,
  ) {
    function isPointerEvent(valueToTest: any): valueToTest is React.MouseEvent<HTMLButtonElement> {
      if (valueToTest.type === 'click') return true;
      else return false;
    }

    if (isPointerEvent(e)) {
      setSearchStatus(true);
    } else {
      if (e.key === 'Enter') {
        setSearchStatus(true);
      }
    }
  }

  useEffect(() => {
    if (data && status === 'RESOLVED') {
      handleUserRequest(data);
      setSearchStatus(false);
    } else if (status === 'REJECTED') {
      setError(true);
      setSearchStatus(false);
    }
  }, [data, errorRes, handleUserRequest, status]);

  useEffect(() => {
    if (!searchStatus) return;
    const url = `${BASE_URL}${searchTerm}`;
    setUrl(url);
  }, [searchStatus, searchTerm]);

  if (theme.mode === 'light') {
    var { lm_primary_white, lm_primary_blue, lm_secondary_grey } = theme;
  } else {
    var { dm_primary_blue, dm_primary_white, dm_secondary_blue } = theme;
  }

  return (
    <SearchBarContainer bg={lm_primary_white || dm_secondary_blue} onKeyPress={handleSearch}>
      <SearchBarIcon />
      <SearchBarInput
        value={searchTerm}
        placeHolderClr={lm_secondary_grey || dm_primary_white}
        onChange={handleSearchTermChange}
      />
      {error ? <SearchBarError>{errorRes}</SearchBarError> : null}
      <SearchBarButton
        type="submit"
        onClick={handleSearch}
        btnClr={lm_primary_blue || dm_primary_blue}
      >
        Search
      </SearchBarButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
