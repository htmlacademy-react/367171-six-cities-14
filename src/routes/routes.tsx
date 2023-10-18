/* eslint-disable react-refresh/only-export-components */
import {type RouteObject } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import OfferPage from '../pages/OfferPage';
import FavoritesPage from '../pages/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage';

type Routes = 'main' | 'notFound' | 'login' | 'offer' | 'favorites';

export const RoutePath: Record<Routes, string> = {
  main: '/',
  notFound: '*',
  login: '/login',
  offer: '/offer/:id',
  favorites: 'favorites'
};

const {main, notFound, login, offer, favorites} = RoutePath;

export const routeConfig: RouteObject[] = [
  {
    path: main,
    element: <MainPage />,
  },
  {
    path: login,
    element: <LoginPage />,
  },
  {
    path: offer,
    element: <OfferPage />,
  },
  {
    path: favorites,
    element: <FavoritesPage />,
  },
  {
    path: notFound,
    element: <NotFoundPage />,
  },
];
