import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from 'react-redux'
import Instructor from "./Instructor"
import AddClass from './AddClass'


function InstructorProfile (props) {

    const [ userClasses, setUserClasses ] = useState([])
        
    console.log(props)

    useEffect(() => {
        //  /api/client/classes/sessions -> for specific classes a user has signed up for
        //  /api/client/classes -> all available classes. can ad /:id for specific users/classes
                    
                   axiosWithAuth()
                    .get(`/api/client/classes `)
                    .then(res =>{
                        console.log(res.data)
                        setUserClasses(res.data.data)
                        console.log(userClasses)
                        console.log('i got new classes')})
                    .catch(err => console.log(err))
                }, [props.edit, props.delete, props.add])

    return (
      <div>  
          <div>
              <h2>Home Page</h2>
          </div>

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
    delete: state.deleteClassReducer.classes,
    add: state.addClassReducer.classes
    }
}



export default connect(mapStateToProps, {})(InstructorProfile)