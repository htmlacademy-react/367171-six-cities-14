import { FC } from 'react';
import Sorting from '../../../../features/Sorting';
import { OfferListItemProps } from '../../types';
import OffersCardItem from '../OffersCardItem';

export const OffersList:FC<{data: OfferListItemProps[]; currentLocation: string}> = ({data, currentLocation}) => (
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{data.length} places to stay in {currentLocation}</b>
    <Sorting/>
    <div className="cities__places-list places__list tabs__content" data-testid="offers-list">
      {data.map((item: OfferListItemProps) => <OffersCardItem key={item.id} {...item}/>)}
    </div>
  </section>
);


