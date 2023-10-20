import {type RouteObject } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage/Login-Page';
import OfferPage from '../pages/OfferPage';
import FavoritesPage from '../pages/FavoritesPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from '../shared/hocs/PrivateRoute';

// type Routes = 'main' | 'notFound' | 'login' | 'offer' | 'favorites';

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum RoutePath {
  main ='/',
  notFound = '*',
  login = '/login',
  offer = '/offer/:id',
  favorites ='favorites'
}

export const routeConfig: RouteObject[] = [
  {
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    path: RoutePath.login,
    element: <LoginPage />,
  },
  {
    path: RoutePath.offer,
    element: <OfferPage />,
  },
  {
    path: RoutePath.favorites,
    element: <PrivateRoute authStatus={AuthStatus.NoAuth}><FavoritesPage /></PrivateRoute>
  },
  {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
];
