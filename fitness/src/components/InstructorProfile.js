import React, { useEffect, useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { connect } from 'react-redux'

import Instructor from "./Instructor"
import AddStory from './AddStory'

import './Profile.css'
import Instructor from "./Instructor.js"




const Profile = (props) => {

    const [ userClasses, setUserClasses ] = useState([])
        
    useEffect(() => {
                    axiosWithAuth()
                    .get(`https://bw-expatjournal.herokuapp.com/api/stories/${props.user.id}/my-stories`)
                    .then(res =>
                        setUserClasses(res.data),
                        console.log('i got new stories'))
                    .catch(err => console.log(err))
                }, [props.edit, props.delete, props.add])

    return (
      <div>  
        <div className='addStoryToolBar'>
            <AddStory />
        </div>
        <div className='feed'>
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
    add:
    }
}



export default connect(mapStateToProps, {})(Profile)