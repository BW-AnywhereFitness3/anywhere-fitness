import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from 'react-redux'
import Instructor from "./Instructor"
import AddClass from './AddClass'







const InstructorProfile = (props) => {

    const [ userClasses, setUserClasses ] = useState([])
        
    useEffect(() => {
                    
                   axiosWithAuth()
                    .get(`https://anywhere-fitness-tan.vercel.app/api/${props.role}/classes`)
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
    edit: state.editClassReducer.edit,
    delete: state.deleteClassReducer.delete,
    add: state.addClassReducer.add
    }
}



export default connect(mapStateToProps, {})(InstructorProfile)