import React from 'react'
import { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const handleTitleChange = (e) => {
    setEnteredTitle(e.target.value)
  }
  const handleAmountChange = (e) => {
    setEnteredAmount(e.target.value)
  }
  const handleDateChange = (e) => {
    setEnteredDate(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    props.onSaveExpenseData(expenseData)

    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            value={enteredTitle}
            id='title'
            onChange={handleTitleChange}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount ($)</label>
          <input
            type='number'
            value={enteredAmount}
            id='amount'
            min={0.01}
            step={0.01}
            onChange={handleAmountChange}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            value={enteredDate}
            id='date'
            onChange={handleDateChange}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
