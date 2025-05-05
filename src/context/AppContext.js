import React, { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': {
            const updated = state.expenses.map((e) =>
                e.name === action.payload.name ? { ...e, cost: e.cost + action.payload.cost } : e
            );
            const found = state.expenses.some(e => e.name === action.payload.name);
            return {
                ...state,
                expenses: found ? updated : [...state.expenses, action.payload]
            };
        }
        case 'REDUCE_EXPENSE': {
            return {
                ...state,
                expenses: state.expenses.map((e) =>
                    e.name === action.payload.name ? { ...e, cost: Math.max(0, e.cost - action.payload.cost) } : e
                )
            };
        }
        case 'DELETE_EXPENSE':
            return {
                ...state,
                expenses: state.expenses.filter(e => e.name !== action.payload)
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: []
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{ budget: state.budget, expenses: state.expenses, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
