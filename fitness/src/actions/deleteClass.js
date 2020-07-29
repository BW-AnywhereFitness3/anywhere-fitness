import { axiosWithAuth } from '../utils/axiosWithAuth'

export const DELETE_CLASS_START = 'DELETE_CLASS_START'
export const DELETE_CLASS_SUCCESS = 'DELETE_CLASS_SUCCESS'
export const DELETE_CLASS_FAIL = 'DELETE_CLASS_FAIL'



export const deleteClass = (classID) => dispatch => {
    dispatch({ type: DELETE_CLASS_START, payload: classID})
    axiosWithAuth()
    .delete(`${classID}`)
    .then(res => {
        console.log('i deleted the story!')
        dispatch({type: DELETE_CLASS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: DELETE_CLASS_FAIL, payload: err})
    })

}
