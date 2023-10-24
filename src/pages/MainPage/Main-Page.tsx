import {Header} from '../../widgets/Header/Header';
import {Tabs} from '../../widgets/Tabs/Tabs';
import {OffersList} from '../../entities/offers/ui/OffersList/Offers-List';

export const MainPage = () => (
  <div className="page page--gray page--main">
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
      <div className="cities">
        <div className="cities__places-container container">
          <OffersList/>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>
    </main>
  </div>
);
