import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const increase = () => dispatch({ type: 'ADD_EXPENSE', payload: { name: props.name, cost: 10 } });
    const decrease = () => dispatch({ type: 'REDUCE_EXPENSE', payload: { name: props.name, cost: 10 } });
    const deleteItem = () => dispatch({ type: 'DELETE_EXPENSE', payload: props.name });

    return (
        <tr>
            <td>{props.name}</td>
            <td>£{props.cost}</td>
            <td><button onClick={increase}>+</button></td>
            <td><button onClick={decrease}>-</button></td>
            <td><TiDelete size='1.5em' onClick={deleteItem} /></td>
        </tr>
    );
};

export default ExpenseItem;
