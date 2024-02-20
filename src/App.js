import React from 'react'
import { useState, useEffect } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  // let expenseData = new Date(2024, 1, 10)
  // let expenseTitle = 'School Fees'
  // let expenseAmount = 300

  let DUMMY_EXPENSE = [
    {
      id: 'e1',
      title: 'School Fees',
      amount: 300,
      date: new Date(2024, 1, 3),
    },
    {
      id: 'e2',
      title: 'School Books',
      amount: 200,
      date: new Date(2024, 1, 5),
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 650,
      date: new Date(2024, 1, 12),
    },
    {
      id: 'e4',
      title: 'Foods',
      amount: 230,
      date: new Date(2024, 1, 14),
    },
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)

  // // We use useEffect() to stop the infinit loop when fetching data from url
  // useEffect(() => {
  //   fetch('https://api.github.com/users')
  //     .then((res) => {
  //       return res.json()
  //     })
  //     .then((data) => {
  //       console.log(data)
  //       setExpenses(data)
  //     })
  // }, [])

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
  }

  return (
    // <div className='app-container'>
    //   <h1>My First Component</h1>
    //   <p>This some plain text</p>
    // </div>
    <div>
      {/* <ExpenseItem
        // Props -- Passes the data to the component
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      /> */}
      {/* Nested Components */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  )
}

export default App
