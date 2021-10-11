const size = {
  mobileL: '576px',
  tablet: '768px',
  labtop: '992px',
  labtopL: '1200px',
};

export const device = {
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.labtop})`,
  laptopL: `(min-width: ${size.labtopL})`,
};
