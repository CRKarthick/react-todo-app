import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('2020');
    // const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    const selectFilterYearHandler = year => {
        setFilterYear(year);
        // console.log('Expenses.js');
        // console.log(year);
        // console.log(filteredExpenses);
    };

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filterYear;
    });
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    onSelectFilterYear={selectFilterYearHandler}
                    selected={filterYear}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList item={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
