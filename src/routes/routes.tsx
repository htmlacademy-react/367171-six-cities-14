/* eslint-disable react-refresh/only-export-components */
import {Navigate, type RouteObject } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import OfferPage from '../pages/OfferPage';
import FavoritesPage from '../pages/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage';
import { ReactNode } from 'react';

type Routes = 'main' | 'notFound' | 'login' | 'offer' | 'favorites';

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: ReactNode;
}

export const RoutePath: Record<Routes, string> = {
  main: '/',
  notFound: '*',
  login: '/login',
  offer: '/offer/:id',
  favorites: 'favorites'
};

const {main, notFound, login, offer, favorites} = RoutePath;

function PrivateRoute({authStatus, children}: PrivateRouteProps): ReactNode {
  return (
    authStatus === AuthStatus.Auth
      ? children
      : <Navigate to={login} />
  );
}

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
    element: <PrivateRoute authStatus={AuthStatus.NoAuth}><FavoritesPage /></PrivateRoute>
  },
  {
    path: notFound,
    element: <NotFoundPage />,
  },
];
