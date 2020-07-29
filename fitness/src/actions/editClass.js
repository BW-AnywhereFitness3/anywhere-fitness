import { axiosWithAuth } from '../utils/axiosWithAuth'

export const EDIT_CLASS_START = 'EDIT_CLASS_START'
export const EDIT_CLASS_SUCCESS = 'EDIT_CLASS_SUCCESS'
export const EDIT_CLASS_FAIL = 'EDIT_CLASS_FAIL'



export const editNewClass = (newClass, classID) => dispatch => {
    dispatch({ type: EDIT_CLASS_START, payload: newClass})
    axiosWithAuth()
    .put(`${classID}`, newClass)
    .then(res => {
        console.log(res)
        dispatch({type: EDIT_CLASS_SUCCESS, payload: res.data})
    })
    .catch(err => {
        dispatch({type: EDIT_CLASS_FAIL, payload: err})
    })

}