import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(
  addExpense({
    description: 'Water bill',
    note: 'Due pretty soon',
    amount: 5000
  })
);

store.dispatch(
  addExpense({
    description: 'Gas bill',
    note: 'not due for a while',
    amount: 4000,
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: 'Rent',
    note: 'Due the first of the month',
    amount: 109500,
    createdAt: 900
  })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

// Provider => Makes the Redux store available to the connect() calls. Wrap components needing store in <Provider></Provider> tag.

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
