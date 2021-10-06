import styled, { ThemeConsumer } from 'styled-components';
import { ThemeMode } from '../../shared/types';
import { Icon } from '../../shared/types';
import company_icon from '../../assets/icon-company.svg';
import location_icon from '../../assets/icon-location.svg';
import website_icon from '../../assets/icon-website.svg';
import twitter_icon from '../../assets/icon-twitter.svg';

const ProfileGrid = styled.div.attrs<
  { bgColor: string; theme: ThemeMode },
  { fontColor: string; usernameFontColor: string }
>((props) => {
  let fontColor;
  let usernameFontColor;
  if (props.theme.mode === 'light') {
    fontColor = props.theme.lm_secondary_grey;
    usernameFontColor = props.theme.lm_primary_blue;
  } else {
    fontColor = props.theme.dm_primary_white;
    usernameFontColor = props.theme.dm_primary_blue;
  }
  return { fontColor, usernameFontColor };
})<{
  bgColor: string;
  theme: ThemeMode;
}>`
  background-color: ${(props) => props.bgColor};
  display: grid;
  padding: 2rem;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 25% 20% 20% 35%;
  margin-top: 32px;
  column-gap: 2rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  & > * {
    grid-column: 2/3;
  }
  h4,
  p {
    color: ${(props) => props.fontColor};
  }
  h3 {
    color: ${(props) => props.usernameFontColor};
  }
`;

const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;

const ProfileHeading = styled.div<{ fontColor: string }>`
  position: relative;
`;

const ProfileHeadingMain = styled.h1`
  margin: 0.5rem 0;
`;
const ProfileHeadingDate = styled.p`
  position: absolute;
  font-size: 0.8rem;
  top: 0;
  right: 0;
`;

const ProfileHeadingUsername = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

const ProfileBio = styled.p``;

const ProfileStats = styled.div<{ bg: string }>`
  display: flex;
  background-color: ${(props) => props.bg};
`;
const ProfileStatItem = styled.div`
  flex-grow: 1;
  padding: 1rem 1rem;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProfileStatItemHeader = styled.h4`
  margin: 0;
  font-size: 0.9rem;
`;
const ProfileStatItemHeaderValue = styled.h2`
  margin: 0;
  margin-top: 0.25rem;
  font-size: 1.25rem;
`;

const ProfileLinks = styled.ul<{ themeMode: string }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
  align-content: center;
  li:nth-child(-n + 2) {
    margin-bottom: 8px;
  }
  span {
    filter: invert(93%) sepia(100%) saturate(0%) hue - rotate(244deg) brightness(107%)
      contrast(110%);
  }
`;

const ProfileLinkItem = styled.li`
  width: 40%;
  display: flex;
  align-items: center;
  margin: 0;
  height: 25%;
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
  height: 20px;
  width: 20px;
  margin-right: 10px;
  background-image: url(${(props) => props.bg});
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProfileLinkText = styled.a`
  font-size: 0.8rem;
`;

export {
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
};
