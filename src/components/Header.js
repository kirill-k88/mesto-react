import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/header/header-logo.svg';

function Header({ email, loggedIn }) {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname, email);
  }, [location, email]);

  function getLink() {
    if (location.pathname === '/sing-in' && !loggedIn) {
      return (
        <Link className="header__link common-link" to="/sing-up">
          Регистрация
        </Link>
      );
    } else if (location.pathname === '/sing-in' && loggedIn) {
      return (
        <Link className="header__link common-link" to="/sing-up">
          Выход
        </Link>
      );
    }
    return (
      <Link className="header__link common-link" to="/sing-in">
        Войти
      </Link>
    );
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого" />
      <div className="header__loginContainer">
        {loggedIn && <p className="header__login">{email}</p>}
        {getLink()}
      </div>
    </header>
  );
}

export default Header;
