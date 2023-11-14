import OffersList from '../../../entities/offers/ui/OffersList';
import { offers } from '../../../entities/offers/mocks/offers';

const offersList = offers.slice(0, 5);

export const TabsContent = () => (
  <div className="cities" data-testid="cities">
    <div className="cities__places-container container" data-testid="cities-container">
      <OffersList data={offersList}/>
      <div className="cities__right-section">
        <section className="cities__map map" data-testid="cities-map"></section>
      </div>
    </div>
  </div>
);
