// @flow strict
import { COLORS } from 'config/theme';
import avatar from 'images/user/avatar-photo.jpg';

export const SIDEBAR_WIDTH:number = 250;
export const GUTTER:number = 25;
export const THEME_COLORS = COLORS;

export type User = {
  gender: 'male' | 'female',
  status: 'active' | 'inactive',
  avatar: string,
  name: {
    title: 'mr' | 'mrs',
    first: string,
    last: string,
  },
  location?: {
    street: string,
    city: string,
    state: string,
    postcode: string,
    coordinates: {
      latitude: string,
      longitude: string,
    },
  },
  email: string,
  phone?: string,
};

export const USER: User = {
  avatar,
  status: 'active',
  gender: 'male',
  name: {
    title: 'mr',
    first: 'John',
    last: 'Smith',
  },
  location: {
    street: 'Adams Blvd 123',
    city: 'Los Angeles',
    state: 'CA',
    postcode: '90016',
    coordinates: {
      latitude: '34.0336174',
      longitude: '-118.3590757',
    },
  },
  email: 'john.smith@example.com',
  phone: '111333555',
};
