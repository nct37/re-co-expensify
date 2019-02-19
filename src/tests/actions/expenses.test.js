import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('5678', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '5678',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  });
});

test('should add expense to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'This is a good one',
    createdAt: 1000
  };

  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      // Correctly dispatched?
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });
      // Correctly stored and retreived from firebase?
      database.ref(`expenses/${actions[0].id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
      // Since asynchronous, need to call done() so jest testing waits for this dispatch to finish
    });
  done();
});

test('should add expense with defaults to database and store', done => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };

  store
    .dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      // Correctly dispatched?
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });
      // Correctly stored and retreived from firebase?
      database.ref(`expenses/${actions[0].id}`).once('value');
    })
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done();
      // Since asynchronous, need to call done() so jest testing waits for this dispatch to finish
    });
  done();
});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//     expense: {
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String) // Use .any(String) -- since uidd creates a unique id each time
//     }
//   });
// });
