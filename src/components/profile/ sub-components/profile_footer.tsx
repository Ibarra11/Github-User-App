import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../shared/types';
import company_icon from '../../../assets/icon-company.svg';
import location_icon from '../../../assets/icon-location.svg';
import website_icon from '../../../assets/icon-website.svg';
import twitter_icon from '../../../assets/icon-twitter.svg';
type Props = {
  themeMode: string;
  location: string | null;
  twitter_username: string | null;
  website: string | null;
  company: string | null;
};
const ProfileFooter = ({ themeMode, location, twitter_username, website, company }: Props) => {
  return (
    <Wrapper themeMode={themeMode}>
      <ProfileLinkItem gridArea={'location'}>
        <LocationIcon />
        <ProfileLinkText>{location || 'Not Available'}</ProfileLinkText>
      </ProfileLinkItem>
      <ProfileLinkItem gridArea={'twitter'}>
        <TwitterIcon />
        <ProfileLinkText>{twitter_username || 'Not Available'}</ProfileLinkText>
      </ProfileLinkItem>
      <ProfileLinkItem gridArea={'website'}>
        <WebsiteIcon />
        <ProfileLinkText>{website || 'Not Available'}</ProfileLinkText>
      </ProfileLinkItem>
      <ProfileLinkItem gridArea={'company'}>
        <CompanyIcon />
        <ProfileLinkText>{company || 'Not Available'}</ProfileLinkText>
      </ProfileLinkItem>
    </Wrapper>
  );
};

const Wrapper = styled.footer<{ themeMode: string }>`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'location'
    'website'
    'twitter'
    'company';
  padding: 0;
  margin-bottom: 0;
  margin-top: 16px;

  span {
    filter: brightness(${(props) => (props.themeMode === 'dark' ? 0 : 1)})
      invert(${(props) => (props.themeMode === 'dark' ? 1 : 0)});
  }
`;

const ProfileLinkItem = styled.div<{ gridArea: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  grid-area: ${(p) => p.gridArea};
`;

const ProfileLinkText = styled.a`
  font-size: 0.6rem;
`;

const ProfileLinkIcon = styled.span`
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-right: 6px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const TwitterIcon = styled(ProfileLinkIcon)`
  background-image: url(${twitter_icon});
`;

const LocationIcon = styled(ProfileLinkIcon)`
  background-image: url(${location_icon});
`;

const WebsiteIcon = styled(ProfileLinkIcon)`
  background-image: url(${website_icon});
`;
const CompanyIcon = styled(ProfileLinkIcon)`
  background-image: url(${company_icon});
`;

export default ProfileFooter;
