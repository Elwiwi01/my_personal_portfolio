import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget >= totalExpenses) {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        } else {
            alert("Budget can't be lower than the total expenses.");
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input
                type='number'
                step='10'
                value={budget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
