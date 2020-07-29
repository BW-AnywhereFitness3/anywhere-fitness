import { axiosWithAuth } from '../utils/axiosWithAuth';


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
    axiosWithAuth()
    .post('/api/classes', newClass)
    .then(res=>{
        console.log(res.data)
        dispatch({ type: 'ADD_CLASS',
        payload: res.data.newClass})
    })
    .catch(err=>{
        console.log(err)
    })
}