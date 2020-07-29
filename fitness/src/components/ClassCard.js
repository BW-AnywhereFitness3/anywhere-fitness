import React from 'react'

const ClassCard = props => {

  return(
    <div className='classCard'>
      <h2>{props.classData.name}</h2>
      <h3>{props.classData.type}</h3>
      <p>start: {props.classData.start_time}</p>
      <p>duration: {props.classData.duration}</p>
      <p>intensity level: {props.classData.intensity_level}</p>
      <p>address: {props.classData.address}, {props.classData.city}, {props.classData.postal}</p>
      <p>attendees: {props.classData.current_attendees}</p>
      <p>max capacity: {props.classData.max_class}</p>
    </div>
  )
}

export default ClassCard