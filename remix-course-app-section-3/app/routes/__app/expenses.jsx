const DUMMY_EXPENSES = [
    {
        id: 'e1',
        title: 'First Expense',
        amount: 12.99,
        date: new Date().toISOString(),
    },
    {
        id: 'e2',
        title: 'Second Expense',
        amount: 16.99,
        date: new Date().toISOString(),
    }
];

import { Outlet } from "@remix-run/react";
import expensesStyles from '~/styles/expenses.css';
import ExpensesList from '~/components/expenses/ExpensesList';
import { FaPlus, FaDownload } from 'react-icons/fa';
import { Link } from '@remix-run/react';

export default function ExpensesLayout() {
    return (
        <>
            <Outlet />
            <main>
                <section id="expenses-actions">
                    <Link to="add">
                        <FaPlus />
                        <span>Add Expense</span>
                    </Link>
                    <a href="/expenses/raw">
                        <FaDownload />
                        <span>Load Raw Data</span>
                    </a>
                </section>
                <ExpensesList expenses={DUMMY_EXPENSES} />
            </main>
        </>
    );
}

