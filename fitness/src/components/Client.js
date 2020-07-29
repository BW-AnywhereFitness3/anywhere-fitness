import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ClassCard from './ClassCard'

const isInstructor = true
const classesArray = [
  {
    name: 'class1',
    type: 'cardio',
    start_time: 'time1',
    duration: 50,
    intensity_level: 3,
    address: 'address1',
    city: 'city1',
    postal: 'postal1',
    current_attendees: 1,
    max_class: 10,
  },
  {
    name: 'class2',
    type: 'weight lifting',
    start_time: 'time1',
    duration: 80,
    intensity_level: 5,
    address: 'address2',
    city: 'city2',
    postal: 'postal2',
    current_attendees: 2,
    max_class: 20,
  },
]

const Client = props => {
  const [ classData, setClassData ] = useState(classesArray)
  const [ searchString, setSearchString ] = useState('')

  useEffect(() => {
    //load in classData
  },[])

  const searchFilter = () => {
    const filteredArray = []
    classData.forEach(v => {
      if (v.name.includes(searchString)){
        filteredArray.push(v)
      }
    })
    //additional search filtering?
    return filteredArray
  }

  return(
    <div className='Client'>
      <form>
        <input
          type='text'
          placeholder='search class'
          name='search'
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </form>
      {isInstructor ? <div><Link to='/create-class'>Add your class</Link></div> : null}
      {searchFilter(classesArray).map(v => <ClassCard classData={v} />)}
    </div>
  )
}

export default Client