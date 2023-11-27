import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';
import {store} from './providers/store-provider.tsx';
import {fetchOffersListAction} from './entities/offers/model/action.ts';

store.dispatch(fetchOffersListAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
