import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Input from './Input'
import { GlobalStyles } from '../../constants/styles'
const ExpenseForm = () => {
    function amountChangedHandler() {

    }
  return (
    <View style={styles.form}>
        <Text style={styles.title}>your expense</Text>
        
        <Input label="amount" textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: amountChangedHandler,
        }} />
        <Input label="date" textInputConfig={{
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
            onChangeText: () => {}
        }} />
        <Input label="description" textInputConfig={{
            multiline: true,
            
        }}/>
    </View>
  )
}

export default ExpenseForm;


const styles = StyleSheet.create({
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 24,
    textAlign: 'center'
  },
  inputsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});