import styled from 'styled-components';

const ProfileGrid = styled.div`
  display: grid;
  border: 1px solid red;
  padding: 2rem;
  height: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 35% 15% 20% 30%;
  column-gap: 2rem;
  & > * {
    grid-column: 2/3;
    border: 4px soild pink;
  }
`;

const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 100%;
  grid-column: 1;
  grid-row: 1;
`;

const ProfileHeading = styled.div`
  border: 1px solid red;
  position: relative;
`;

const ProfileHeadingMain = styled.h1`
  margin: 0.5rem 0;
`;
const ProfileHeadingDate = styled.p`
  position: absolute;
  top: 0;
  right: 0;
`;

const ProfileHeadingUsername = styled.h3`
  border: 1px solid blue;
  margin: 0;
`;

const ProfileBio = styled.p``;

const ProfileStats = styled.div`
  border: 1px solid green;
  display: flex;
`;
const ProfileStatItem = styled.div`
  flex-grow: 1;
  border: 1px solid orange;
  padding: 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProfileStatItemHeader = styled.h4`
  margin: 0;
`;
const ProfileStatItemHeaderValue = styled.h2`
  margin: 0;
  margin-top: 0%.5;
`;

const ProfileLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid blue;
  list-style-type: none;
  padding: 0;
`;

const ProfileLinkItem = styled.li`
  width: 40%;
  border: 1px solid green;
  &:nth-child(2n + 1) {
    margin-bottom: 1rem;
  }
`;

const ProfileLinkImg = styled.img`
  margin-right: 0.75rem;
`;

const ProfileLinkText = styled.a``;

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
