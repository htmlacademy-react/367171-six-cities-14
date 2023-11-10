import Tabs from '../../features/Tabs';
import {Header} from '../../widgets/Header/header';

export const MainPage = () => (
  <div className="page page--gray page--main">
    <Header/>
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <Tabs/>
    </main>
  </div>
);
