import React from 'react';
import styled from 'styled-components';
import { device } from '../../../shared/media_query_breakpoints';
type Props = {
  name: string | null;
  username: string | null;
  joinDate: string | null;
  usernameColor: string;
};
const ProfileHeader = ({ name, username, joinDate, usernameColor }: Props) => {
  function formatJoinDate(date: string) {
    return new Date(date)
      .toDateString()
      .split(' ')
      .slice(1)
      .reduce((prevValue, currValue, currentIndex) => {
        if (currentIndex !== 1) {
          return prevValue + ' ' + currValue;
        } else {
          return currValue + ' ' + prevValue;
        }
      });
  }

  const formattedDate = formatJoinDate(joinDate as string);

  return (
    <Wrapper>
      <ProfileHeadingMain>{name || username}</ProfileHeadingMain>
      <ProfileHeadingUsername href={`https://github.com/${username}`} usernameColor={usernameColor}>
        @{username}
      </ProfileHeadingUsername>
      <ProfileHeadingDate>Joined {formattedDate}</ProfileHeadingDate>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  grid-column: 2/3;
`;

const ProfileHeadingMain = styled.h1`
  margin-bottom: 2px;
  font-size: 1rem;
  letter-spacing: 2px;
  @media ${device.mobileL} {
    font-size: 1.25rem;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 1.75rem;
  }
  @media ${device.laptopL} {
    font-size: 2rem;
  }
`;
const ProfileHeadingDate = styled.p`
  font-size: 0.6rem;
  bottom: 15px;
  margin: 0;
  margin-top: 4px;
  letter-spacing: 1px;
  @media ${device.mobileL} {
    font-size: 0.7rem;
  }

  @media ${device.tablet} {
    font-size: 0.8rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.2rem;
  }
`;

const ProfileHeadingUsername = styled.a<{ usernameColor: string }>`
  margin: 0;
  font-size: 0.5rem;
  color: ${(p) => p.usernameColor};
  text-decoration: none;
  &:hover {
    cursor: pointer;
    text-decoration: revert;
  }
  @media ${device.mobileL} {
    font-size: 0.75rem;
  }

  @media ${device.tablet} {
    font-size: 0.9rem;
  }
  @media ${device.laptop} {
    font-size: 1rem;
  }
  @media ${device.laptopL} {
    font-size: 1.3rem;
  }
`;

export default ProfileHeader;
