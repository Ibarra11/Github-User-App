import React from 'react';
import { GithubApiResponse, ThemeMode } from '../../shared/types';
import ProfileHeader from './ sub-components/profile_header';
import ProfileStats from './ sub-components/profile_stats';
import ProfileFooter from './ sub-components/profile_footer';
import { ProfileGrid, ProfileAvatar, ProfileBio } from './styles';

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
  if (theme.mode === 'light') {
    profileBg = theme.lm_primary_white;
    statsBg = theme.lm_primary_grey;
    profileUsernameColor = theme.lm_primary_blue;
  } else {
    profileBg = theme.dm_secondary_blue;
    statsBg = theme.dm_primary_dark_blue;
    profileUsernameColor = theme.dm_primary_blue;
  }

  return (
    <ProfileGrid bgColor={profileBg} theme={theme}>
      <ProfileAvatar src={avatar_url as string} />
      <ProfileHeader name={name} username={login} joinDate={created_at} />
      <ProfileBio>{bio || 'This Profile has no Bio'}</ProfileBio>
      <ProfileStats bg={statsBg} repos={public_repos} followers={followers} following={following} />
      <ProfileFooter
        themeMode={theme.mode}
        location={location}
        twitter_username={twitter_username}
        website={website}
        company={company}
      />
    </ProfileGrid>
  );
};

export default Profile;
