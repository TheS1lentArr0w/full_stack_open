const App = () => {
  // const-definitions
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

const Header = (props) => {
  return (
    // Renders the name of the course
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    // Renders the parts and their number of exercises
    <>
      <Parts part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Parts part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Parts part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

const Parts = (props) => {
  return (
    <>
      <p>
        {props.part} {props.exercises}
      </p>
    </>
  )
}

const Total = (props) => {
  return (
    // Renders total number of exercises
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

export default App