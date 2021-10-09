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
    </Wrapper>
  );
};

const Wrapper = styled.footer<{ themeMode: string }>`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr;
  padding: 0;
  margin-bottom: 0;
  span {
    filter: brightness(${(props) => (props.themeMode === 'dark' ? 0 : 1)})
      invert(${(props) => (props.themeMode === 'dark' ? 1 : 0)});
  }
`;

const ProfileLinkItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ProfileLinkImg = styled.span.attrs<{ icon: Icon }, { bg: string }>((props) => {
  switch (props.icon) {
    case 'icon_location':
      return { bg: location_icon };
    case 'icon_website':
      return { bg: website_icon };
    case 'icon_company':
      return { bg: company_icon };
    case 'icon_twitter':
      return { bg: twitter_icon };
  }
})<{ icon: Icon }>`
  display: inline-block;
  height: 14px;
  width: 14px;
  margin-right: 6px;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProfileLinkText = styled.a`
  font-size: 0.6rem;
`;

export default ProfileFooter;
