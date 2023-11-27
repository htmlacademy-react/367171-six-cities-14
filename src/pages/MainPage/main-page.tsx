import Tabs from '../../features/Tabs';
import {Header} from '../../widgets/Header/header';
import classnames from 'classnames';
import {useAppSelector} from '../../providers';
import {getOffersCount} from '../../entities/offers/model';
import {INIT_COUNT_OFFERS} from '../../entities/offers/utils';

export const MainPage = () => {
  const countOffers = useAppSelector(getOffersCount);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={classnames('page__main page__main--index', {['page__main--index-empty']: countOffers === INIT_COUNT_OFFERS})}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
      </main>
    </div>
  );
};
