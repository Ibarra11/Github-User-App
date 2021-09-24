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
