import React from 'react';
import { GithubApiResponse, ThemeMode } from '../../shared/types';

import {
  ProfileGrid,
  ProfileAvatar,
  ProfileLinks,
  ProfileStats,
  ProfileBio,
  ProfileHeading,
  ProfileHeadingDate,
  ProfileHeadingMain,
  ProfileHeadingUsername,
  ProfileLinkImg,
  ProfileLinkItem,
  ProfileLinkText,
  ProfileStatItem,
  ProfileStatItemHeader,
  ProfileStatItemHeaderValue,
} from './styles';

const Profile = ({ userData, theme }: { userData: GithubApiResponse; theme: ThemeMode }) => {
  const {
    avatar_url,
    name,
    login,
    created_at,
    bio,
    public_repos,
    followers,
    following,
    location,
    twitter_username,
    website,
    company,
  } = userData;

  let statsBg;
  let profileBg;
  let profileUsernameColor;
  let joinDate;
  if (theme.mode === 'light') {
    profileBg = theme.lm_primary_white;
    statsBg = theme.lm_primary_grey;
    profileUsernameColor = theme.lm_primary_blue;
  } else {
    profileBg = theme.dm_secondary_blue;
    statsBg = theme.dm_primary_dark_blue;
    profileUsernameColor = theme.dm_primary_blue;
  }

  if (created_at) {
    joinDate = new Date(created_at)
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

  return (
    <ProfileGrid bgColor={profileBg} theme={theme}>
      <ProfileAvatar src={avatar_url as string} />
      <ProfileHeading fontColor={'#697C9A'}>
        <ProfileHeadingMain>{name || login}</ProfileHeadingMain>
        <ProfileHeadingDate>Joined {joinDate}</ProfileHeadingDate>
        <ProfileHeadingUsername>@{login}</ProfileHeadingUsername>
      </ProfileHeading>
      <ProfileBio>{bio || 'This Profile has no Bio'}</ProfileBio>
      <ProfileStats bg={statsBg}>
        <ProfileStatItem>
          <ProfileStatItemHeader>Repos</ProfileStatItemHeader>
          <ProfileStatItemHeaderValue>{public_repos}</ProfileStatItemHeaderValue>
        </ProfileStatItem>
        <ProfileStatItem>
          <ProfileStatItemHeader>Followers</ProfileStatItemHeader>
          <ProfileStatItemHeaderValue>{followers}</ProfileStatItemHeaderValue>
        </ProfileStatItem>
        <ProfileStatItem>
          <ProfileStatItemHeader>Following</ProfileStatItemHeader>
          <ProfileStatItemHeaderValue>{following}</ProfileStatItemHeaderValue>
        </ProfileStatItem>
      </ProfileStats>
      <ProfileLinks themeMode={theme.mode}>
        <ProfileLinkItem>
          <ProfileLinkImg icon={'icon_location'} />
          <ProfileLinkText>{location || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
        <ProfileLinkItem>
          <ProfileLinkImg icon={'icon_twitter'} />
          <ProfileLinkText>{twitter_username || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
        <ProfileLinkItem>
          <ProfileLinkImg icon={'icon_website'} />
          <ProfileLinkText>{website || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
        <ProfileLinkItem>
          <ProfileLinkImg icon={'icon_company'} />
          <ProfileLinkText>{company || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
      </ProfileLinks>
    </ProfileGrid>
  );
};

export default Profile;
