import React from 'react';
type GithubApiParamaters = {
  name: string;
  login: string;
  avatar_url: string;
  html_url: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  website: string;
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export enum Status {
  idle = 'IDLE',
  pending = 'PENDING',
  resolved = 'RESOLVED',
  rejected = 'REJECTED',
}
export type GithubApiResponse = Nullable<GithubApiParamaters>;
export type Cache<T> = { [key: string]: T };

// Component Props
export type SearchBarProps = {
  theme: ThemeMode;
  handleUserRequest: React.Dispatch<React.SetStateAction<Nullable<GithubApiParamaters> | null>>;
};

export type NavbarProps = {
  toggleTheme: () => void;
  theme: ThemeMode;
};

export type Mode = 'light' | 'dark';

type DarkMode = {
  mode: 'dark';
  dm_primary_blue: string;
  dm_primary_white: string;
  dm_primary_dark_blue: string;
  dm_secondary_blue: string;
};

type LightMode = {
  mode: 'light';
  lm_primary_white: string;
  lm_primary_grey: string;
  lm_secondary_grey: string;
  lm_primary_blue: string;
  lm_hover_btn_blue: string;
  lm_primary_black: string;
};

export type ThemeMode = LightMode | DarkMode;
