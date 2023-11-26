import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type OffersFilterStateProps = {
  countOffers: number;
}

const initialState: OffersFilterStateProps = {
  countOffers: 0,
};

export const offersFilterSlice = createSlice({
  name: 'offers/filter',
  initialState,
  reducers: {
    countOffers: (state, action: PayloadAction<{countOffers: number}>) => {
      state.countOffers = action.payload.countOffers;
    },
  },
});

export const {countOffers} = offersFilterSlice.actions;
