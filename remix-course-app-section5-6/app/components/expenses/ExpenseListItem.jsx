import { Form, Link, useFetcher, useSubmit } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

function ExpenseListItem({ id, title, amount }) {
  const fetcher = useFetcher();

  function deleteExpenseItemHandler() {
    const proceed = confirm('Are you sure? Do you want to delete this item?');
    if (!proceed) {
      return;
    }

    fetcher.submit(null, { method: 'delete', action: `/expenses/${id}` });
  }
  const { t } = useTranslation();
  if (fetcher.state !== 'idle') {
    return <article className='expense-item locked'>
      <p>Deleting..</p>
    </article>
  }
  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}>{t("expenses.list.delete")}</button>
        {/*<Form method='delete' action={`/expenses/${id}`}>
          <button>Delete</button>
          </Form>*/}

        <Link to={id}>{t("expenses.list.edit")}</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
