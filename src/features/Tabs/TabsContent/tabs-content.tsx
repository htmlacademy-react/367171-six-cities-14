import OffersList from '../../../entities/offers/ui/OffersList';
import {FC} from 'react';
import {mapLocationItems} from '../../../entities/location/constants/constants.ts';
import classnames from 'classnames';
import {getOffersCount} from '../../../entities/offers/model';
import OffersListEmpty from '../../../entities/offers/ui/OffersListEmpty';
import {useAppSelector} from '../../../providers';
import {INIT_COUNT_OFFERS} from '../../../entities/offers/utils';

export const TabsContent: FC<{activeKey: number}> = ({activeKey}) => {

  const currentLocation: string = mapLocationItems[activeKey];
  const countOffers = useAppSelector(getOffersCount);

  return (
    <div className="cities" data-testid="cities">
      <div className={classnames('cities__places-container container', {['cities__places-container--empty container']: countOffers === INIT_COUNT_OFFERS})} data-testid="cities-container">
        {countOffers !== INIT_COUNT_OFFERS ? <OffersList currentLocation={currentLocation}/> : <OffersListEmpty/>}
        <div className="cities__right-section">
          {countOffers !== INIT_COUNT_OFFERS && <section className="cities__map map" data-testid="cities-map"></section>}
        </div>
      </div>
    </div>
  );
};
