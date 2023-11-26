import OffersList from '../../../../entities/offers/ui/OffersList';
import {FC} from 'react';
import {useOffersFilter} from '../../../../entities/offers/hooks/useOffersFilter.ts';
import {mapLocationItems} from '../../../../entities/location/constants/constants.ts';
import {useAppSelector} from "../../../../providers/store-provider.tsx";
import {getOffersCount} from "../../model/selectors.ts";
import classnames from "classnames";

export const TabsContent: FC<{activeKey: number}> = ({activeKey}) => {

  const currentLocation: string = mapLocationItems[activeKey];
  const filteredOffers = useOffersFilter(currentLocation);
  const countOffers = useAppSelector(getOffersCount);

  return (
    <div className="cities" data-testid="cities">
      <div className={classnames('cities__places-container container', {['cities__places-container--empty container']: countOffers === 0})} data-testid="cities-container">
        {countOffers !== 0 ? <OffersList data={filteredOffers} currentLocation={currentLocation}/> : (
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">No places to stay available</b>
              <p className="cities__status-description">We could not find any property available at the moment in Dusseldorf</p>
            </div>
          </section>
        )}
        <div className="cities__right-section">
          {countOffers !== 0 && <section className="cities__map map" data-testid="cities-map"></section>}
        </div>
      </div>
    </div>
  );
};
