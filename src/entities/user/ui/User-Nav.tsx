import {useState} from 'react';

//FIXME: доделать, когда будет делать авторизацию
export const UserNav = () => {

  const [isLogin, setLogin] = useState<boolean>(true);

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            {isLogin ? (
              <>
                <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                <span className="header__favorite-count">3</span>
              </>
            ) : (
              <a className="header__nav-link" href="#" onClick={() => setLogin(true)}>
                <span className="header__signout">Sign in</span>
              </a>
            )}
          </a>
        </li>
        {isLogin && (
          <li className="header__nav-item">
            <a className="header__nav-link" href="#" onClick={() => setLogin(false)}>
              <span className="header__signout">Sign out</span>
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
