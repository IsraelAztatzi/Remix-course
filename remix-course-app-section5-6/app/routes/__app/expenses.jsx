import { FaPlus, FaDownload } from 'react-icons/fa';
import { Link, Outlet, useLoaderData } from '@remix-run/react';
import ExpensesList from '~/components/expenses/ExpensesList';
import { getExpenses } from '~/data/expenses.server';
import { requireUserSession } from '~/data/auth.server';
import { json } from '@remix-run/node';
import { useTranslation } from 'react-i18next';
export default function ExpensesLayout() {
  const expenses = useLoaderData();
  const hasExpenses = expenses && expenses.length > 0;
  const { t } = useTranslation();
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>{t("expenses.add")}</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>{t("expenses.load")}</span>
          </a>
        </section>
        {hasExpenses && <ExpensesList expenses={expenses} />}
        {
          !hasExpenses && (<section id="no-expenses">
            <h1>No expense found</h1>
            <p>
              Start <Link to="add">adding some</Link> today
            </p>
          </section>
          )}
      </main>
    </>
  );
}

export async function loader({ request }) {
  const userId = await requireUserSession(request);
  const expenses = await getExpenses(userId);
  return json(expenses, {
    headers: {
      'Cache-Control': 'max-age=3'
    },
  });
}

export function headers({
  actionHeaders,
  loaderHeaders,
  parentHeaders
}) {
  return {
    'Cache-Control': parentHeaders.get('Cache-Control')
  }
}