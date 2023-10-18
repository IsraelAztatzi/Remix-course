import { Form, Link, NavLink, useLoaderData } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import Logo from '../util/Logo';


function MainHeader() {
  const userId = useLoaderData();
  const { t } = useTranslation();

  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/">{t("header.home")}</NavLink>
          </li>
          <li>
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li><button className='cta-alt'>{t("header.language")}</button></li>
          <li>
            {userId && (
              <Form method="post" action="/logout" id="logout-form">
                <button className="cta-alt">Logout</button>
              </Form>)}
            {!userId && (
              <Link to="/auth" className="cta">
                Login
              </Link>
            )}
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
