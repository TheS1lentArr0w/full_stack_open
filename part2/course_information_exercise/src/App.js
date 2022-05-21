const Header = ({ course }) => <h1>{course}</h1>

/* const Total = parts.reduce( (sum, order) => {
  return sum + order.exercises
}, 0) */

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

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>


const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      {course.parts.map( part =>
        <Part key={part.id} part={part} />
      )}
      <Total parts={course.parts} />
    </>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App