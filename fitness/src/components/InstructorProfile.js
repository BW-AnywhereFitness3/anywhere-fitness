import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from 'react-redux'
import Instructor from "./Instructor"
import AddClass from './AddClass'


const InstructorProfile = (props) => {

    const [ userClasses, setUserClasses ] = useState([])
        
    useEffect(() => {
                    
                   axiosWithAuth()
                    .get(`api/${props.role}/classes`)
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
    edit: state.editClassReducer.newClass,
    delete: state.deleteClassReducer.newClass,
    add: state.addClassReducer.newClass
    }
}



export default connect(mapStateToProps, {})(InstructorProfile)