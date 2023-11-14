import OffersList from '../../../entities/offers/ui/OffersList';
import { offers } from '../../../entities/offers/mocks/offers';
import {FC} from 'react';
import {useOffersFilter} from '../../../entities/offers/hooks/useOffersFilter';
import {mapLocationItems} from '../../../entities/location/constants/constants';

export const TabsContent: FC<{activeKey: number}> = ({activeKey}) => {

  const currentLocation = mapLocationItems[String(activeKey)];
  const filteredOffers = useOffersFilter(true, offers, currentLocation);

  return (

    <div className="cities" data-testid="cities">
      <div className="cities__places-container container" data-testid="cities-container">
        <OffersList data={filteredOffers} currentLocation={currentLocation}/>
        <div className="cities__right-section">
          <section className="cities__map map" data-testid="cities-map"></section>
        </div>
      </div>
    </div>
  );
};
