import styled from 'styled-components';
import { ThemeMode } from '../../shared/types';
import { device } from '../../shared/media_query_breakpoints';
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

  padding: 24px 16px;
  padding-bottom: 48px;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
  margin-top: 16px;
  column-gap: 12px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 8px;

  h4,
  p {
    color: ${(props) => props.fontColor};
  }
`;

const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 64px;
  grid-column: 1/2;
  @media ${device.mobileL} {
    width: 84px;
  }

  @media ${device.tablet} {
    width: 100px;
  }
  @media ${device.laptop} {
    width: 120px;
  }
  @media ${device.laptopL} {
    width: 140px;
  }
`;

const ProfileBio = styled.p`
  font-size: 0.76rem;
  line-height: 1.45;
  grid-column: 1/3;
  margin: 8px;
  @media ${device.mobileL} {
    font-size: 1rem;
  }
  @media ${device.tablet} {
    font-size: 1.25rem;
  }
  @media ${device.laptop} {
    font-size: 1.5rem;
    grid-column: 2/3;
  }
  @media ${device.laptopL} {
    font-size: 1.5rem;
  }
`;

export { ProfileGrid, ProfileAvatar, ProfileBio };
