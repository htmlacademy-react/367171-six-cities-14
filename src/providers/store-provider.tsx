import {configureStore} from '@reduxjs/toolkit';
import React, {FC} from 'react';
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI} from "../shared/api/api.ts";
import {offersSlice} from "../entities/offers/model/slice.ts";


export const api = createAPI();
export const store = configureStore({
  reducer: {
    offersList: offersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const StoreProvider: FC = ({children}) => <Provider store={store}>{children}</Provider>;
