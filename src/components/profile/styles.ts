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
  min-height: 300px;
  background-color: ${(props) => props.bgColor};
  display: grid;
  padding: 24px 16px;
  padding-bottom: 48px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  margin-top: 16px;
  column-gap: 12px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

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
  width: 64px;
  grid-column: 1/2;
`;

const ProfileBio = styled.p`
  font-size: 0.7rem;

  line-height: 1.45;
  grid-column: 1/3;
  margin: 0;
`;

const ProfileLinks = styled.ul<{ themeMode: string }>`
  grid-column: 1/3;
  display: grid;
  grid-template-columns: 1fr;
  list-style-type: none;
  padding: 0;
  margin-bottom: 0;
  span {
    filter: brightness(${(props) => (props.themeMode === 'dark' ? 0 : 1)})
      invert(${(props) => (props.themeMode === 'dark' ? 1 : 0)});
  }
`;

const ProfileLinkItem = styled.li`
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

export {
  ProfileGrid,
  ProfileAvatar,
  ProfileLinks,
  ProfileBio,
  ProfileLinkImg,
  ProfileLinkItem,
  ProfileLinkText,
};
