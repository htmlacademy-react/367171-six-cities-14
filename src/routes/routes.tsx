import {NotFoundPage} from '../pages/NotFoundPage/Not-Found-Page';
import {FavoritesPage} from '../pages/FavoritesPage/Favorites-Page';
import {RouteObject} from 'react-router-dom';
import {OfferPage} from '../pages/OfferPage/Offer-Page';
import {PrivateRoute} from '../shared/hocs/PrivateRoute/Private-Route';
import {LoginPage} from '../pages/LoginPage/Login-Page';
import {MainPage} from '../pages/MainPage/Main-Page';

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
