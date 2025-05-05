import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Department</th>
                    <th>Allocated Budget</th>
                    <th colSpan='2'>Increase by 10</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <ExpenseItem key={expense.name} name={expense.name} cost={expense.cost} />
                ))}
            </tbody>
        </table>
    );
};

export default ExpenseList;
