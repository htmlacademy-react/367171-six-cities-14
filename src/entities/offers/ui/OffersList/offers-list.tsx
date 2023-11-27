import { FC } from 'react';
import Sorting from '../../../../features/Sorting';
import { OfferListItemProps } from '../../types';
import OffersCardItem from '../OffersCardItem';
import {useOffersFilter} from '../../hooks';

export const OffersList:FC<{currentLocation: string}> = ({currentLocation}) => {
  const filteredOffers = useOffersFilter(currentLocation);
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{filteredOffers.length} places to stay in {currentLocation}</b>
      <Sorting/>
      <div className="cities__places-list places__list tabs__content" data-testid="offers-list">
        {filteredOffers.map((item: OfferListItemProps) => <OffersCardItem key={item.id} {...item}/>)}
      </div>
    </section>
  );
};


