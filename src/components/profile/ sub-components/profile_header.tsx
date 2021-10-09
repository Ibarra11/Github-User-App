import React from 'react';
import styled from 'styled-components';
type Props = {
  name: string | null;
  username: string | null;
  joinDate: string | null;
};
const ProfileHeader = ({ name, username, joinDate }: Props) => {
  return (
    <Wrapper>
      <ProfileHeadingMain>{name}</ProfileHeadingMain>
      <ProfileHeadingUsername>@{username}</ProfileHeadingUsername>
      <ProfileHeadingDate>Joined {joinDate}</ProfileHeadingDate>
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
`;
const ProfileHeadingDate = styled.p`
  font-size: 0.6rem;
  bottom: 15px;
  margin: 0;
  margin-top: 4px;
`;

const ProfileHeadingUsername = styled.h3`
  margin: 0;
  font-size: 0.6rem;
`;

export default ProfileHeader;
