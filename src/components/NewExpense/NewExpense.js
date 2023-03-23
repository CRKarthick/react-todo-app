import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
    const [isExpenseFormActive, setIsExpsenseFormActive] = useState(false);
    const submitExpenseDataHandler = submittedExpenseData => {
        const expenseData = {
            ...submittedExpenseData,
            id: Math.random().toString(),
        };
        // console.log(expenseData);
        props.onAddExpense(expenseData);
        hideExpenseFormHandler();
    };

    const hideExpenseFormHandler = () => {
        setIsExpsenseFormActive(false);
    };

    return (
        <div className='new-expense'>
            {!isExpenseFormActive && (
                <button onClick={() => setIsExpsenseFormActive(true)}>
                    Add New Expense
                </button>
            )}
            {isExpenseFormActive && (
                <ExpenseForm
                    onSubmitExpenseData={submitExpenseDataHandler}
                    onHideExpenseForm={hideExpenseFormHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
