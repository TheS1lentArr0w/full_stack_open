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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

const Header = () => <h1>Feedback Page</h1>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const sum = props.good - props.bad
  const avg = sum / total
  const pos_percent = 100 * props.good / total

  // Display when no feedback yet.
  if (total === 0) {
    return(
      <p>No feedback given.</p>
    )
  }

  // Display when feedback exists
  return (
    <>
      <h1>Statistics</h1>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <div>Total Feedback: {total}</div>
      <div>Average: {avg}</div>
      <div>Positive Percentage: {pos_percent}%</div>
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <table>
      <tr>
        <td>{props.text}:</td>
        <td>{props.value}</td>
      </tr>
    </table>
    // {props.text}: {props.value}
  )
}


export default App