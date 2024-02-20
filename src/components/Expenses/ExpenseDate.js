import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = (props) => {
  let month = props.date.toLocaleString('en-US', { month: 'long' })
  let year = props.date.getFullYear()
  let day = props.date.toLocaleString('en-US', { day: '2-digit' })

  return (
    <div className='expense-date'>
      <span className='expense-date__day'>{day}</span>
      <span className='expense-date__month'>{month}</span>
      <span className='expense-date__year'>{year}</span>
    </div>
  )
}

export default ExpenseDate
