import {createAsyncThunk} from "@reduxjs/toolkit";
import {OfferListItemProps} from "../types";
import {AppDispatch} from "../../../providers/store-provider.tsx";
import {APIRoute, State} from "../../../shared/api/api.ts";
import {AxiosInstance} from "axios/index";

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
