import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferListItemProps} from '../types';
import {AppDispatch, State} from '../../../providers/StoreProvider/store';
import {APIRoute} from '../../../providers/StoreProvider/constants';
import {AxiosInstance} from 'axios';

export const fetchOffersListAction = createAsyncThunk<OfferListItemProps[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersList',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<OfferListItemProps[]>(APIRoute.Offers);
    return data;
  },
);
