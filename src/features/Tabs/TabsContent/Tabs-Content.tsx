import OffersList from '../../../entities/offers/ui/OffersList';
import offers from '../../../entities/offers/mocks/offers.json';

export const TabsContent = () => (
  <div className="cities">
    <div className="cities__places-container container">
      <OffersList data={offers}/>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  </div>
);
