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
            <NavLink to="/pricing">{t("header.pricing")}</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <ul>
          <li>

          </li>
          <li>
            {userId && (
              <Form method="post" action="/logout" id="logout-form">
                <button className="cta-alt">{t("header.logout")}</button>
              </Form>)}
            {!userId && (
              <Link to="/auth" className="cta">
                {t("header.login")}
              </Link>
            )}
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
