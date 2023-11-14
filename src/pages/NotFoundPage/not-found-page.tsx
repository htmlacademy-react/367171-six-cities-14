import {RoutePath} from '../../routes/routes';
import {Link} from 'react-router-dom';
import {Header} from '../../widgets/Header/header';
import {Footer} from '../../widgets/Footer/footer';

export const NotFoundPage = () => (
  <div className="page">
    <Header/>

    <main className="page__main">
      <div className="page__favorites-container container">
        <section className="favorites favorites--empty">
          <h1 className="visually-hidden">404 Not Found</h1>
          <div className="cities__status-wrapper">
            <b className="cities__status">Page Not Found</b>
            <Link to={RoutePath.main}>
             Come back to main page
            </Link>
          </div>
        </section>
      </div>
    </main>
    <Footer/>
  </div>
);
