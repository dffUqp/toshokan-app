import { InstagramIcon, FacebookIcon, TwitterIcon } from '@UI/icons';

export interface IRoutesItem {
  path: string;
  title: string;
}

export interface ISocialLink {
  path: string;
  title: string;
  icon: JSX.Element;
}

export const routesItems: IRoutesItem[] = [
  { path: ``, title: 'header.home_link' },
  { path: 'category', title: 'header.category_link' },
  { path: 'random', title: 'header.random_link' },
];

export const socialLinks: ISocialLink[] = [
  { path: '/', title: '@animes_online', icon: <InstagramIcon /> },
  { path: '/', title: '@animes_online', icon: <FacebookIcon /> },
  { path: '/', title: '@animes_online', icon: <TwitterIcon /> },
];
