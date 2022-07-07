import { View } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'a pair of shoes',
        amount: 500.50,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'a pair of shoes',
        amount: 2000.50,
        date: new Date('2022-01-19')
    },
    {
        id: 'e3',
        description: 'bananas',
        amount: 60.00,
        date: new Date('2021-01-05')
    },
    {
        id: 'e4',
        description: 'book',
        amount: 300.00,
        date: new Date('2022-02-19')
    },
    {
        id: 'e5',
        description: 'another book',
        amount: 430.00,
        date: new Date('2022-02-18')
    },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;