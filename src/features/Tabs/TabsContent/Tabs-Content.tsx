import OffersList from '../../../entities/offers/ui/OffersList';
import { offers } from '../../../entities/offers/mocks/offers';

const offersList = offers.slice(0, 5);

export const TabsContent = () => (
  <div className="cities">
    <div className="cities__places-container container">
      <OffersList data={offersList}/>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  </div>
);
