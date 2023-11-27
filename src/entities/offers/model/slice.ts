import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchOffersListAction} from './action.ts';
import {OffersFilterStateProps, OffersListStateProps} from './types.ts';

const initialStateOffersList: OffersListStateProps = {
  items: undefined,
  isLoading: false,
  isError: false,
};

export const offersSlice = createSlice({
  name: 'offers/list',
  initialState: initialStateOffersList,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOffersListAction.fulfilled, (state, action) => {
      state.isLoading = true;
      state.items = action.payload;
    });
    builder.addCase(fetchOffersListAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOffersListAction.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

const initialStateOffersFilter: OffersFilterStateProps = {
  countOffers: 0,
};

export const offersFilterSlice = createSlice({
  name: 'offers/filter',
  initialState: initialStateOffersFilter,
  reducers: {
    countOffers: (state, action: PayloadAction<{countOffers: number}>) => {
      state.countOffers = action.payload.countOffers;
    },
  },
});

export const {countOffers} = offersFilterSlice.actions;
