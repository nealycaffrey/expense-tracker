import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'

function renderExpenseItem(itemData) {
  return <Text>{itemData.item.description}</Text>
}

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList 
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList