import {createAsyncThunk} from '@reduxjs/toolkit';
import {OfferListItemProps} from '../types';
import {AxiosInstance} from 'axios/index';
import {AppDispatch, State} from '../../../providers/StoreProvider/store';
import {APIRoute} from '../../../providers/StoreProvider/constants';

export const fetchOffersListAction = createAsyncThunk<OfferListItemProps[], {
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
