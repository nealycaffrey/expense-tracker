import React from 'react'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

const RecentExpenses = () => {
  return (
    <ExpensesOutput expensesPeriod="last 7 days" />
  )
}

export default RecentExpenses