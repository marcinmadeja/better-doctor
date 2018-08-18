// @flow strict
import * as React from 'react';
import HomePage from 'pages/HomePage/HomePage';
import Doctors from 'pages/Doctors/Doctors';
import Practices from 'pages/Practices/Practices';
import Favourite from 'pages/Favourite/Favourite';
import LeastLiked from 'pages/LeastLiked/LeastLiked';
import Specialties from 'pages/Specialties/Specialties';
import Conditions from 'pages/Conditions/Conditions';
import Insurances from 'pages/Insurances/Insurances';
import * as routes from 'routes/routeTypes';

import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessIcon from '@material-ui/icons/Business';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

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
    path: routes.DOCTORS,
    component: Doctors,
    name: 'Doctors',
    icon: <SupervisorAccountIcon />,
  },
  {
    exact: true,
    path: routes.PRACTICES,
    component: Practices,
    name: 'Practices',
    icon: <BusinessIcon />,
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
    path: routes.SPECIALTIES,
    component: Specialties,
    name: 'Specialties',
    icon: <AssignmentIndIcon />,
  },
  {
    exact: true,
    path: routes.CONDITIONS,
    component: Conditions,
    name: 'Conditions',
    icon: <LocalHospitalIcon />,
  },
  {
    exact: true,
    path: routes.INSURANCES,
    component: Insurances,
    name: 'Insurances',
    icon: <AccountBalanceIcon />,
  },
];
