import {State} from '../../../providers/StoreProvider/store';

export const getOffers = (state: State) => state.offersList;
export const getOffersCount = (state: State): number => state.offersCount.countOffers;
