import {State} from '../../../shared/api';

export const getOffers = (state: State) => state.offersList;
export const getOffersCount = (state: State): number => state.offersCount.countOffers;
