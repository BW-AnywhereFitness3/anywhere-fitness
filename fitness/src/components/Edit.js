import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editNewClass } from '../actions/editClass'

import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit'

const Edit = props => {
   const [ editing, setEditing ] = useState(false)
   const [ classEdit, setClassEdit ] = useState(props.newClass)

   const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    setClassEdit({
        ...classEdit,
        [name]: value 
    })
  }

  const edit = e => {
    e.preventDefault();
    setEditing(false);
    props.editClass(classEdit, classEdit.id);
}

    return (
      <div>
        <IconButton onClick={() => {setEditing(true)}}>
          <EditIcon/>
        </IconButton>
        { editing && (
                <form>
                  <input 
                    name='title'
                    value={classEdit.title}
                    onChange={onInputChange}/>
                    <input 
                    name='location'
                    value={classEdit.location}
                    onChange={onInputChange}/>
                    <input 
                    name='date'
                    value={classEdit.date}
                    onChange={onInputChange}/>
                    <input 
                    name='description'
                    value={classEdit.description}
                    onChange={onInputChange}/>
                    <input 
                    name='storyImage'
                    value={classEdit.storyImage}
                    onChange={onInputChange}/>
                  
                  <button onClick={edit} 
                  className="button">Save Edits</button>
              </form>
        )
        }
        
        
      </div>
    );
  };

  export default connect(null, { editNewClass })(Edit);