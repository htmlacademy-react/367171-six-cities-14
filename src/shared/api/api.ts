import axios, {AxiosInstance} from 'axios';
import {store} from '../../providers/store-provider.tsx';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

export enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Comments = '/comments',
  Auth = '/login'
}

// export enum NameSpace {
//   Offers = 'OFFERS',
//   Comment = 'COMMENT',
//   User = 'USER',
// }
