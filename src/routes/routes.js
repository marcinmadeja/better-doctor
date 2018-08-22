// @flow strict
import * as React from 'react';
import HomePage from 'pages/HomePage/HomePage';
import Cards from 'pages/Cards/Cards';
import Favourite from 'pages/Favourite/Favourite';
import LeastLiked from 'pages/LeastLiked/LeastLiked';
import Players from 'pages/Players/Players';
import Friends from 'pages/Friends/Friends';
import Decks from 'pages/Decks/Decks';
import * as routes from 'routes/routeTypes';

import HomeIcon from '@material-ui/icons/Home';
import StyleIcon from '@material-ui/icons/Style';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PeopleIcon from '@material-ui/icons/People';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export type Route = {
  exact: boolean,
  path: string,
  component: React.Node,
  name: string,
  icon?: React.Node,
};

export const mainRoutes: Array<Route> = [
  {
    exact: true,
    path: routes.MAIN,
    component: HomePage,
    name: 'Home',
    icon: <HomeIcon />,
  },
  {
    exact: true,
    path: routes.CARDS,
    component: Cards,
    name: 'Cards',
    icon: <StyleIcon />,
  },
  {
    exact: true,
    path: routes.FAVOURITE,
    component: Favourite,
    name: 'Favourite',
    icon: <ThumbUpIcon />,
  },
  {
    exact: true,
    path: routes.LEAST_LIKED,
    component: LeastLiked,
    name: 'Least-liked',
    icon: <ThumbDownIcon />,
  },
  {
    exact: true,
    path: routes.DECKS,
    component: Decks,
    name: 'Decks',
    icon: <AccountBalanceWalletIcon />,
  },
  {
    exact: true,
    path: routes.PLAYERS,
    component: Players,
    name: 'Players',
    icon: <SupervisorAccountIcon />,
  },
  {
    exact: true,
    path: routes.FRIENDS,
    component: Friends,
    name: 'Friends',
    icon: <PeopleIcon />,
  },
];
