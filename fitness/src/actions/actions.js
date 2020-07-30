import { axiosWithAuth } from '../utils/axiosWithAuth';

export const ADD_CLASS_START = 'ADD_CLASS_START';
export const ADD_CLASS_SUCCESS = 'ADD_CLASS_SUCCESS';
export const ADD_CLASS_FAIL = 'ADD_CLASS_FAIL';


export const fetchUser = (userid) => dispatch => {
    axiosWithAuth()
        .get(`api/users/${userid}`)
        .then(res => {
            dispatch({type: 'FETCH_USER', payload: {...res.data}})
        })
        .catch(err => {
            console.log(err)
        })
}

export const fetchClasses = () => dispatch => {
    axiosWithAuth()
    .get('api/classes')
    .then(res=>{
        dispatch({ type: 'FETCH_CLASSES', payload: res.data.classes})
    })
    .catch(err=> {
        console.log(err)
    })
}

export const addClass = ( newClass ) => dispatch => {
    dispatch({type:ADD_CLASS_START})
   
   
    axiosWithAuth()
    .post('api/instructor/classes', newClass)
    .then(res=>{
        console.log(res.data)
       dispatch({type:ADD_CLASS_SUCCESS, payload:res.data})
    })

    .catch(err=>{
     dispatch({type: ADD_CLASS_FAIL, payload: err})
    })
}