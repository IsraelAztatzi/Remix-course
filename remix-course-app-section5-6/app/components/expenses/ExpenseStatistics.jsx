import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
function calculateSummaryStatistics(expenses) {
  const amounts = expenses.map((expense) => +expense.amount);
  const maxAmount = Math.max(...amounts);
  const minAmount = Math.min(...amounts);
  const sum = expenses.reduce((prevVal, curVal) => curVal.amount + prevVal, 0);
  const mean = sum / expenses.length;

  return { minAmount, maxAmount, sum, mean };
}

function ExpenseStatistics({ expenses }) {
  const { minAmount, maxAmount, sum, mean } = useMemo(
    () => calculateSummaryStatistics(expenses),
    [expenses]
  );
  let { t } = useTranslation();

  return (
    <section>
      <h2>{t("expense.summary")}</h2>
      <dl id="expense-statistics">
        <div>
          <dt>{t("expense.total")}</dt>
          <dd>${sum.toFixed(2)}</dd>
        </div>
        <div>
          <dt>{t("expense.average")}</dt>
          <dd>${mean.toFixed(2)}</dd>
        </div>
        <div>
          <dt> {t("expense.min.amount")}</dt>
          <dd>${minAmount.toFixed(2)}</dd>
        </div>
        <div>
          <dt>{t("expense.max.amount")}</dt>
          <dd>${maxAmount.toFixed(2)}</dd>
        </div>
      </dl>
    </section>
  );
}

export default ExpenseStatistics;
