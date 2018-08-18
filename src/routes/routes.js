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
import * as routes from './routeTypes';

type Route = {
  exact: boolean,
  path: string,
  component: React.Node,
};

export const mainRoutes: Array<Route> = [
  {
    exact: true,
    path: routes.MAIN,
    component: HomePage,
  },
  {
    exact: true,
    path: routes.DOCTORS,
    component: Doctors,
  },
  {
    exact: true,
    path: routes.PRACTICES,
    component: Practices,
  },
  {
    exact: true,
    path: routes.FAVOURITE,
    component: Favourite,
  },
  {
    exact: true,
    path: routes.LEAST_LIKED,
    component: LeastLiked,
  },
  {
    exact: true,
    path: routes.SPECIALTIES,
    component: Specialties,
  },
  {
    exact: true,
    path: routes.CONDITIONS,
    component: Conditions,
  },
  {
    exact: true,
    path: routes.INSURANCES,
    component: Insurances,
  },
];
