import {OfferListItemProps} from "../types";
import {createSlice} from "@reduxjs/toolkit";
import {fetchOffersListAction} from "./action.ts";
export type OffersListStateProps = {
  items: OfferListItemProps[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

const initialState: OffersListStateProps = {
  items: undefined,
  isLoading: false,
  isError: false,
};

export const offersSlice = createSlice({
  name: 'offers/list',
  initialState,
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
