const Header = ({ name }) => <h1>{name}</h1>


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

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
)

const Course = ({ courses }) => {
  return (
    <>
      {courses.map( (course) =>  
      <>
        <Header name={course.name} />
        <>
          {course.parts.map( (part) => 
            <Part key={part.id} part={part} />
          )}
        </>
        <Total parts={course.parts} />
      </>
      )}
    </>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  
  return (
    <>
      <Header name='Web development curriculum' />
      <Course courses={courses} />
    </>
  ) 
}

export default App