import { Form, NavLink } from '@remix-run/react';
import { useTranslation } from 'react-i18next';
import Logo from '../util/Logo';

function ExpensesHeader() {
  const { t } = useTranslation();
  return (
    <header id="main-header">
      <Logo />
      <nav id="main-nav">
        <ul>
          <li>
            <NavLink to="/expenses" end>
              {t('expenses.header.manage')}
            </NavLink>
          </li>
          <li>
            <NavLink to="/expenses/analysis">{t('expenses.header.analyze')}</NavLink>
          </li>
        </ul>
      </nav>
      <nav id="cta-nav">
        <Form method="post" action="logout">
          <button className="cta">{t("header.logout")}</button>
        </Form>

      </nav>
    </header>
  );
}

export default ExpensesHeader;
