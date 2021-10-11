import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { device } from '../../../shared/media_query_breakpoints';
type Props = {
  repos: number | null;
  followers: number | null;
  following: number | null;
  bg: string;
};
const ProfileStats = ({ repos, followers, following, bg }: Props) => {
  return (
    <Wrapper bg={bg}>
      <ProfileStatItem>
        <ProfileStatItemHeader>Repos</ProfileStatItemHeader>
        <ProfileStatItemHeaderValue>{repos}</ProfileStatItemHeaderValue>
      </ProfileStatItem>
      <ProfileStatItem>
        <ProfileStatItemHeader>Followers</ProfileStatItemHeader>
        <ProfileStatItemHeaderValue>{followers}</ProfileStatItemHeaderValue>
      </ProfileStatItem>
      <ProfileStatItem>
        <ProfileStatItemHeader>Following</ProfileStatItemHeader>
        <ProfileStatItemHeaderValue>{following}</ProfileStatItemHeaderValue>
      </ProfileStatItem>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ bg: string }>`
  display: flex;
  grid-column: 1/3;
  background-color: ${(props) => props.bg};
`;
const ProfileStatItem = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 4px 0;

  @media ${device.mobileL} {
  }

  @media ${device.tablet} {
    padding: 8px 0;
  }
  @media ${device.laptop} {
    padding: 12px 0;
  }
  @media ${device.laptopL} {
    padding: 16px 0;
  }
`;
const ProfileStatItemHeader = styled.h4`
  margin: 0;
  font-size: 0.5rem;
  @media ${device.mobileL} {
    font-size: 0.75rem;
  }

  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptop} {
    font-size: 1.25rem;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;
const ProfileStatItemHeaderValue = styled.h2`
  margin: 0;
  margin-top: 0.25rem;
  font-size: 0.75rem;
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

export default ProfileStats;
