import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from 'react-redux'

import Instructor from "./Instructor"
import AddClass from './AddClass'

import './Profile.css'
import Instructor from "./Instructor.js"




const InstructorProfile = (props) => {

    const [ userClasses, setUserClasses ] = useState([])
        
    useEffect(() => {
                    
                   axiosWithAuth()
                    .get(`https://anywhere-fitness-tan.vercel.app/api/${props.Instructor.id}/classes`)
                    .then(res =>
                        setUserClasses(res.data),
                        console.log('i got new classes'))
                    .catch(err => console.log(err))
                }, [props.edit, props.delete, props.add])

    return (
      <div>  
        <div>
            <AddClass />
        </div>
        <div className='class-list'>
            {userClasses.map(newClass => {
                return <Instructor key={newClass.id} newClass={newClass}/>})
            }
        </div>
    </div> 
        )
    }



const mapStateToProps = (state) => {
    return {
    edit: state.editClassReducer.classes,
    delete: state.deleteClassReducer.class,
    add: state.addClassReducer.class
    }
}



export default connect(mapStateToProps, {})(InstructorProfile)