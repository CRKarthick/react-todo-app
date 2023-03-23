import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
    const [formValue, setFormValue] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
    });
    const changeHandler = event => {
        setFormValue(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };

    const submitHandler = event => {
        event.preventDefault();

        const expenseData = {
            title: formValue.enteredTitle,
            amount: +formValue.enteredAmount,
            date: new Date(formValue.enteredDate),
        };

        // console.log(expenseData);
        props.onSubmitExpenseData(expenseData);
        setFormValue({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: '',
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        onChange={changeHandler}
                        name='enteredTitle'
                        value={formValue.enteredTitle}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={changeHandler}
                        name='enteredAmount'
                        value={formValue.enteredAmount}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min='2020-01-01'
                        step='2023-12-31'
                        onChange={changeHandler}
                        name='enteredDate'
                        value={formValue.enteredDate}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={props.onHideExpenseForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
