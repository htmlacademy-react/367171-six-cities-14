import {OfferListItemProps} from '../types';

export type OffersListStateProps = {
  items: OfferListItemProps[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

export type OffersFilterStateProps = {
  countOffers: number;
}
