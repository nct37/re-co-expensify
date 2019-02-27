import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense to expenses array', () => {
  const expenseData = {
    id: '4',
    description: 'Car',
    note: '',
    amount: 500000,
    createdAt: undefined
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseData
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expenseData]);
});

test('should edit expense by id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'Fuck you'
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].note).toBe('Fuck you');
});

test('should not edit expense if id not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});