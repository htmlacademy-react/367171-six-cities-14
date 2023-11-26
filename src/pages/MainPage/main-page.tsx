import Tabs from '../../features/Tabs/ui';
import {Header} from '../../widgets/Header/header';
import {useAppSelector} from "../../providers/store-provider.tsx";
import {getOffersCount} from "../../features/Tabs/model/selectors.ts";
import classnames from "classnames";

export const MainPage = () => {
  const countOffers = useAppSelector(getOffersCount);
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className={classnames('page__main page__main--index', {['page__main--index-empty']: countOffers === 0})}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs/>
      </main>
    </div>
  )
};
