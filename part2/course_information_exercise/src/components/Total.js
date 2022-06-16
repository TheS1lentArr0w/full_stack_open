import React from 'react'

const Total = ({ parts }) => {
    let totalAmount = parts.reduce( (sum, part) => {
      return sum + part.exercises
    }, 0)
    return (
      <>
        <b>total of {totalAmount} exercises</b>
      </>
    )
  }

export default Total