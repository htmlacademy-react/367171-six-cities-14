import {configureStore} from '@reduxjs/toolkit';
import {Provider, TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {createAPI, State} from '../shared/api/api.ts';
import {FC, ReactNode} from "react";
import {offersFilterSlice, offersSlice} from "../entities/offers/model";

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

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
export const StoreProvider: FC<{children: ReactNode}> = ({children}) => <Provider store={store}>{children}</Provider>;
