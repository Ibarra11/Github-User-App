import React from 'react';
import styled from 'styled-components';

import company_icon from '../../../assets/icon-company.svg';
import location_icon from '../../../assets/icon-location.svg';
import website_icon from '../../../assets/icon-website.svg';
import twitter_icon from '../../../assets/icon-twitter.svg';
import { device } from '../../../shared/media_query_breakpoints';
type Props = {
  themeMode: string;
  location: string | null;
  twitter_username: string | null;
  blog: string | null;
  company: string | null;
};

const ProfileFooter = ({ themeMode, location, twitter_username, blog, company }: Props) => {
  return (
    <Wrapper themeMode={themeMode}>
      <ProfileLinkItem gridArea={'location'}>
        <LocationIcon />
        <ProfileLink link={null} as={'span'}>
          {location || 'Not Available'}
        </ProfileLink>
      </ProfileLinkItem>
      <ProfileLinkItem gridArea={'twitter'}>
        <TwitterIcon />
        <ProfileLink
          link={`https://twitter.com/${twitter_username}`}
          as={twitter_username != null ? undefined : 'span'}
        >
          {twitter_username || 'Not Available'}
        </ProfileLink>
      </ProfileLinkItem>
      <ProfileLinkItem gridArea={'website'}>
        <WebsiteIcon />
        <ProfileLink link={blog} as={blog !== '' ? undefined : 'span'}>
          {blog || 'Not Available'}
        </ProfileLink>
      </ProfileLinkItem>
      <ProfileLinkItem gridArea={'company'}>
        <CompanyIcon />
        <ProfileLink link={null} as={'span'}>
          {company || 'Not Available'}
        </ProfileLink>
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

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'location twitter'
      'website company';
  }
  @media ${device.laptop} {
    grid-column: 2/3;
  }
`;

const ProfileLinkItem = styled.div<{ gridArea: string }>`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  grid-area: ${(p) => p.gridArea};
`;

const ProfileLink = styled.a.attrs<{ link: string | null }>((p) => ({
  href: p.link,
}))<{ link: string | null }>`
  font-size: 0.6rem;
  color: inherit;
  &:link {
    text-decoration: none;
    &:hover {
      text-decoration: revert;
    }
  }

  @media ${device.mobileL} {
    font-size: 0.8rem;
  }

  @media ${device.tablet} {
    font-size: 1rem;
  }
  @media ${device.laptop} {
    font-size: 1.2rem;
  }
  @media ${device.laptopL} {
    font-size: 1.4rem;
  }
`;

const ProfileLinkIcon = styled.span`
  display: inline-block;
  height: 14px;
  width: 14px;
  margin: 0 8px;
  background-size: contain;
  background-repeat: no-repeat;
  @media ${device.mobileL} {
    width: 18px;
    height: 18px;
  }

  @media ${device.tablet} {
    width: 22px;
    height: 22px;
  }
  @media ${device.laptop} {
    width: 26px;
    height: 26px;
  }
  @media ${device.laptopL} {
    width: 30px;
    height: 30px;
  }
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
