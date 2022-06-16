import React from 'react'
import Part from '../components/Part'
import Total from '../components/Total'
import Header from '../components/Header'

const Courses = ({ courses }) => {
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

export default Courses