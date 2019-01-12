import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expenses = [];
  const wrapper = selectExpensesTotal(expenses);
  expect(wrapper).toEqual(0);
});

test('should correctly add up a single expenses', () => {
  const wrapper = selectExpensesTotal([expenses[0]]);
  expect(wrapper).toEqual(195);
});

test('should correctly add up multiple expenses', () => {
  const wrapper = selectExpensesTotal(expenses);
  expect(wrapper).toEqual(114195);
});
