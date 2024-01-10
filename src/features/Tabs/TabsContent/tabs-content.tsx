import OffersList from '../../../entities/offers/ui/OffersList';
import {FC} from 'react';
import classnames from 'classnames';
import {getOffersCount} from '../../../entities/offers/model';
import OffersListEmpty from '../../../entities/offers/ui/OffersListEmpty';
import {INIT_COUNT_OFFERS} from '../../../entities/offers/utils';
import {mapLocationItems} from '../../../entities/location/constants';
import {useOffersFilter} from '../../../entities/offers/hooks';
import {useAppSelector} from '../../../providers/StoreProvider/hooks';

export const TabsContent: FC<{activeKey: number}> = ({activeKey}) => {

  const currentLocation: string = mapLocationItems[activeKey];
  const filteredOffers = useOffersFilter(currentLocation);
  const countOffers = useAppSelector(getOffersCount);

  return (
    <div className="cities" data-testid="cities">
      <div className={classnames('cities__places-container container', {['cities__places-container--empty container']: countOffers === INIT_COUNT_OFFERS})} data-testid="cities-container">
        {countOffers !== INIT_COUNT_OFFERS ? <OffersList data={filteredOffers} currentLocation={currentLocation}/> : <OffersListEmpty currentLocation={currentLocation}/>}
        <div className="cities__right-section">
          {countOffers !== INIT_COUNT_OFFERS && <section className="cities__map map" data-testid="cities-map"></section>}
        </div>
      </div>
    </div>
  );
};
