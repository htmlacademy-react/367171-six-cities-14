import OffersList from '../../../entities/offers/ui/OffersList';

export const TabsContent = () => (
  <div className="cities">
    <div className="cities__places-container container">
      <OffersList/>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  </div>
);
