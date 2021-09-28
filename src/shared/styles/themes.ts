const LightMode = {
  mode: 'light' as const,
  lm_primary_white: '#FEFEFE',
  lm_primary_grey: '#F6F8FF',
  lm_primary_blue: '#0079FF',
  lm_secondary_grey: '#697C9A',
  lm_hover_btn_blue: '#4B6A9B',
  lm_primary_black: '#2B3442',
};

const DarkMode = {
  mode: 'dark' as const,
  dm_primary_blue: '#0079FF',
  dm_primary_white: '#FFFFFF',
  dm_primary_dark_blue: '#141D2F',
  dm_secondary_blue: '#1E2A47',
};

export { LightMode, DarkMode };
