import {createAPI} from '../../../shared/api';
import {configureStore} from '@reduxjs/toolkit';
import {offersFilterSlice, offersSlice} from '../../../entities/offers/model';

export const api = createAPI();
export const store = configureStore({
  reducer: {
    offersList: offersSlice.reducer,
    offersCount: offersFilterSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
