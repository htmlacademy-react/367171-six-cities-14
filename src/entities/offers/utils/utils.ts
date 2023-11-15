import {OfferListItemProps} from '../types/types';
export const getByTypeRoom = (type: string) => `${type[0].toUpperCase()}${type.slice(1)}`;
export const getByRatingStars = (rating: number) => {
  const MAX_RATING = 5;
  const ONE_HUNDRED_PERCENT = 100;

  return `${Math.round(rating) / MAX_RATING * ONE_HUNDRED_PERCENT}%`;
};
export const getByCityOffers = (data: OfferListItemProps[], currentCity: string) => data.filter(({city}) => city.name === currentCity);
