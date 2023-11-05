import {NotFoundPage} from '../pages/NotFoundPage/not-found-page';
import {FavoritesPage} from '../pages/FavoritesPage/favorites-page';
import {RouteObject} from 'react-router-dom';
import {OfferPage} from '../pages/OfferPage/offer-page';
import {PrivateRoute} from '../shared/hocs/PrivateRoute/private-route';
import {LoginPage} from '../pages/LoginPage/login-page';
import {MainPage} from '../pages/MainPage/main-page';

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
