import React, { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch } = useContext(AppContext);
    const [department, setDepartment] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('Add');

    const submit = () => {
        const payload = { name: department, cost: parseInt(cost) };
        dispatch({ type: action === 'Add' ? 'ADD_EXPENSE' : 'REDUCE_EXPENSE', payload });
    };

    return (
        <div>
            <select onChange={(e) => setDepartment(e.target.value)}>
                <option value="">Choose...</option>
                <option value="Marketing">Marketing</option>
                <option value="Finance">Finance</option>
                <option value="Sales">Sales</option>
                <option value="Human Resource">Human Resource</option>
                <option value="IT">IT</option>
            </select>
            <select onChange={(e) => setAction(e.target.value)}>
                <option value="Add">Add</option>
                <option value="Reduce">Reduce</option>
            </select>
            <input type="number" value={cost} onChange={(e) => setCost(e.target.value)} />
            <button onClick={submit}>Save</button>
        </div>
    );
};

export default AllocationForm;
