import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../images/header/header-logo.svg';

function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого" />
      <div className="header__loginContainer">
        {location.pathname === '/' && <p className="header__login">fff@ru</p>}
        <Link className="header__link common-link" to="/sing-in">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Header;
