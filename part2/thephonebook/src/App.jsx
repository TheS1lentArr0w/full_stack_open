import { useState } from 'react'
import isEqual from 'lodash';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      key: 'Arto Hellas'
   }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
//    persons.forEach( (value) => {
//            
//        })
    const nameObject = {
      name: newName,
      key: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleFormChange = (event) => {
    setNewName(event.target.value)
  }

  var example1 = { 
    name: 'Example 1',
    key: 'Example 1'
   }
  var example2 = { 
    name: 'Example 1',
    key: 'Example 2'
   }
  console.log(example1);
  console.log(example2);
  console.log(isEqual(example1, example2));

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleFormChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => <div>{person.name}</div>)}
    </div>
  )
}

export default App
