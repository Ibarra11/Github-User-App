import React from 'react';
import { GithubApiResponse, ThemeMode } from '../../shared/types';
import Company_img from '../../assets/icon-company.svg';
import Location_img from '../../assets/icon-location.svg';
import Website_img from '../../assets/icon-website.svg';
import Twitter_img from '../../assets/icon-twitter.svg';

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
  return (
    <ProfileGrid>
      <ProfileAvatar src={avatar_url as string} />
      <ProfileHeading>
        <ProfileHeadingMain>{name || login}</ProfileHeadingMain>
        <ProfileHeadingDate>{created_at}</ProfileHeadingDate>
        <ProfileHeadingUsername>{login}</ProfileHeadingUsername>
      </ProfileHeading>
      <ProfileBio>{bio || 'This Profile has no Bio'}</ProfileBio>
      <ProfileStats>
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
      <ProfileLinks>
        <ProfileLinkItem>
          <ProfileLinkImg src={Location_img} />
          <ProfileLinkText>{location || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
        <ProfileLinkItem>
          <ProfileLinkImg src={Twitter_img} />
          <ProfileLinkText>{twitter_username || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
        <ProfileLinkItem>
          <ProfileLinkImg src={Website_img} />
          <ProfileLinkText>{website || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
        <ProfileLinkItem>
          <ProfileLinkImg src={Company_img} />
          <ProfileLinkText>{company || 'Not Available'}</ProfileLinkText>
        </ProfileLinkItem>
      </ProfileLinks>
    </ProfileGrid>
  );
};

export default Profile;
