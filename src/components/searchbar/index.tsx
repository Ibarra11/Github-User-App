import React, { useState, useEffect, PointerEvent, MouseEvent } from 'react';
import useFetch from '../../shared/hooks/useFetch';
import { GithubApiResponse, SearchBarProps } from '../../shared/types';
import { SearchBarContainer, SearchBarIcon, SearchBarInput, SearchBarButton } from './styles';

const BASE_URL = 'https://api.github.com/users/';

const SearchBar = ({ theme, handleUserRequest }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchStatus, setSearchStatus] = useState(false);
  const [url, setUrl] = useState('');
  const [status, data, error] = useFetch<GithubApiResponse>(url);

  function handleSearchTermChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function handleSearch(
    e: React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLButtonElement>,
  ) {
    function isPointerEvent(valueToTest: any): valueToTest is MouseEvent<HTMLButtonElement> {
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
      console.log(data);

      handleUserRequest(data);
    } else if (error) {
    }
  }, [data, error, handleUserRequest, status]);

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
