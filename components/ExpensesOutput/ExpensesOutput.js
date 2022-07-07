import { View, StyleSheet } from 'react-native'
import React from 'react'
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../constants/styles';

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'a pair of shoes',
        amount: 500.50,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'another pair of shoes',
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
    {
        id: 'e6',
        description: 'chappal',
        amount: 500.50,
        date: new Date('2021-12-19')
    },
    {
        id: 'e7',
        description: 'converse',
        amount: 2000.50,
        date: new Date('2022-01-19')
    },
    {
        id: 'e8',
        description: 'orange',
        amount: 60.00,
        date: new Date('2021-01-05')
    },
    {
        id: 'e9',
        description: 'mangoes',
        amount: 300.00,
        date: new Date('2022-02-19')
    },
    {
        id: 'e10',
        description: 'paper',
        amount: 430.00,
        date: new Date('2022-02-18')
    },
];

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
        <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
        <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: GlobalStyles.colors.primary700,
    }
})

export default ExpensesOutput;