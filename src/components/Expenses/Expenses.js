import React from 'react'
import './Expenses.css'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'

const Expenses = (props) => {
  return (
    <Card className='expenses'>
      <h1 style={{ textAlign: 'center' }}>Expenses Record</h1>
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
      {/* <ExpenseItem
        // Props -- Passes the data to the component
        date={props.item[0].date}
        title={props.item[0].title}
        amount={props.item[0].amount}
      />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title}
        amount={props.item[1].amount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title}
        amount={props.item[2].amount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title}
        amount={props.item[3].amount}
      /> */}
    </Card>
  )
}

export default Expenses
