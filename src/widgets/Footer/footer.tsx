import {Link} from 'react-router-dom';
import {RoutePath} from '../../routes/routes';

export const Footer = () => (
  <footer className="footer">
    <Link to={RoutePath.main}>
      <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
    </Link>
  </footer>
);
