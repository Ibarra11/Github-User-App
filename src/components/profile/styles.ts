import styled, { ThemeConsumer } from 'styled-components';
import { ThemeMode } from '../../shared/types';

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
  margin: 8px;
`;

export { ProfileGrid, ProfileAvatar, ProfileBio };
