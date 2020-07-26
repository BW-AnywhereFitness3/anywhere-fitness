import React, { useState } from 'react'
import { deleteClass }  from '../actions/deleteClass'
import { connect } from 'react-redux'

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';


const Delete = (props) => {

    
    const [ classDelete ] = useState(props.newClass)

    const deleteClass = () => {
        props.deleteClass(classDelete.id);
    }
    return (
   <IconButton onClick={() => { deleteClass() }}>
        <DeleteIcon/>
  </IconButton>
    )

}

export default connect(null, { deleteClass })(Delete);
