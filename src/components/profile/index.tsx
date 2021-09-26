import React from 'react';
import { GithubApiResponse } from '../../shared/types';
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

const Profile = ({
  name,
  login,
  avatar_url,
  html_url,
  company,
  blog,
  location,
  email,
  bio,
  twitter_username,
  public_repos,
  public_gists,
  followers,
  following,
  created_at,
  website,
}: GithubApiResponse) => {
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
