// @flow strict
/* eslint-disable quote-props */

import { createMuiTheme } from '@material-ui/core/styles';

const PRIMARY_COLORS = {
  '50': '#E2F4F3',
  '100': '#B6E4E0',
  '200': '#85d3cc',
  '300': '#54c1b8',
  '400': '#2fb3a8',
  '500': '#0aa699',
  '600': '#099e91',
  '700': '#079586',
  '800': '#058b7c',
  '900': '#037b6b',
  A100: '#747bff',
  A200: '#414bff',
  A400: '#0e1aff',
  A700: '#000cf4',
  contrastDefaultColor: 'light',
  contrastDarkColors: [
    50,
    100,
    200,
    'A100',
  ],
  contrastLightColors: [
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    'A200',
    'A400',
    'A700',
  ],
};

const DARK_COLORS: { [string]: string } = {
  main: '#22262e',
  mainText: '#8b91a0',
  mainTextActive: '#ffffff',
  lighter: '#22262e',
};

const theme = createMuiTheme({
  primary: PRIMARY_COLORS,
  darkColors: DARK_COLORS,
});

export const COLORS: { [string]: string } = {
  primaryColor: theme.palette.primary[500],
  darkColor: DARK_COLORS.main,
};

export const SHADOWS = theme.shadows;

export default theme;
