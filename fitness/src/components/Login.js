import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {TextField,Button} from '@material-ui/core'

const initalCredentials = {
    username: '',
    password: ''
  }




const Login = () =>{
    const [ credentials, setCredentials ] = useState(initalCredentials)
const history = useHistory();

const onInputChange = evt => {
        const name = evt.target.name
        const value = evt.target.value

        setCredentials({
            ...credentials,
            [name]: value 
        })
    }

    const login = () => {
        axiosWithAuth()
            .post('/api/login ', credentials)
            .then((res) => {
                window.localStorage.setItem('username', credentials.username);
                window.localStorage.setItem('token', res.data.token);
            
            })
            .catch(err => console.log(err))
        }    

    return (
        <div className='login-container' style={{marginTop:'5rem', display:'flex', justifyCont:'center',alignItems:'center', width:'30%', }}>
          <form className='login' >
          <TextField 
                id='outlined-basic' 
                label='USERNAME' 
                variant='outlined'
                name='username'
                value={credentials.username}
                onChange={onInputChange}/>
                
                <TextField 
                id='outlined-basic' 
                label='PASSWORD' 
                type="password"
                variant='outlined'
                name='password'
                value={credentials.password}
                onChange={onInputChange}/>
                <Button onClick={login} variant='contained'>
                        Login    
                </Button>
          </form>
        </div>
    )

}

export default Login