import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick={handleBadClick} text='Bad' />
      <Display_Results good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = () => <h1>Feedback Page</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Display_Results = (props) => {
  return (
    <>
      <h1>Statistics</h1>
      <div>Good: {props.good}</div>
      <div>Neutral: {props.neutral}</div>
      <div>Bad: {props.bad}</div>
    </>
  )
}

export default App