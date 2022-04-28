const App = () => {
  // const-definitions
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} 
      exercises1={part1.exercises} exercises2={part2.exercises}
      exercises3={part3.exercises}
      />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
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
      <Parts part={props.part1} exercises={props.exercises1} />
      <Parts part={props.part2} exercises={props.exercises2} />
      <Parts part={props.part3} exercises={props.exercises3} />
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
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </>
  )
}

export default App