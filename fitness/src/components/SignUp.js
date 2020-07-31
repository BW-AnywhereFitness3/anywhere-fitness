import React, { useState } from 'react'
import axios from 'axios'
import { TextField, Button, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const initialFormData = {
 // _: 'formData',
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: 0,
}

const initialErrorState = {
  _: 'errorState',
  username: '',
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  role: '',
}

function SignUp (){
  const [ formData, setFormData ] = useState(initialFormData)
  const [ formErrors, setFormErrors ] = useState(initialErrorState)
  const history  = useHistory()
  const onSubmit = () => {
    
    console.log('submitting')
    if (validateFormData()){
      console.log(formData)
      console.log('submitted to api')
       axios.post('https://afitness.herokuapp.com/api/auth/register',formData)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      
      })
      .finally (()=>{
        history.push('/login')
      })
    }
  }

  const onChange = e => {
    const { name, value, checked } = e.target
    setFormData({...formData, [name]: name === 'role' ? Number(value) : value})
    if (formErrors[name]){
      validateFormData(name)
    }
  }

  const validateFormData = (specificIndex) => {
    console.log('validating')
    let passed = true
    const newErrorState = {...initialErrorState}
    if (!specificIndex || specificIndex === 'username'){
      if (!formData.username) {
        passed = false
        newErrorState.username = 'must include username'
      } else if (formData.username.length < 4) {
        passed = false
        newErrorState.username = 'must be at least 4 characters'
      }
    }
    if (!specificIndex || specificIndex === 'first_name'){
      if (!formData.first_name){
        passed = false
        newErrorState.first_name = 'must include first name'
      }
    }
    if (!specificIndex || specificIndex === 'last_name'){
      if (!formData.last_name){
        passed = false
        newErrorState.last_name = 'must include last name'
      }
    }
    if (!specificIndex || specificIndex === 'email'){
      if (!formData.email){
        passed = false
        newErrorState.email = 'must include email'
      }
    }
    if (!specificIndex || specificIndex === 'password'){
      if (!formData.password){
        passed = false
        newErrorState.password = 'must include password'
      } else if (formData.password.length < 8){
        passed = false
        newErrorState.password = 'must be at least 8 characters'
      }
    }
    if (!specificIndex || specificIndex === 'role'){
      if (!formData.role || formData.role === 0){
        passed = false
        newErrorState.role = 'must choose role'
      }
    }
    for (const [ i, v ] of Object.entries(formErrors)){
      if (v !== newErrorState[i]){
        setFormErrors(newErrorState)
        console.log('setFormErrors()')
        break
      }
    }
    return passed
  }

  return(
    <div className='signUp'>
      <form onSubmit={onSubmit}>
        <TextField
          type='text'
          label='USERNAME'
          variant='outlined'
          name='username'
          value={formData.username}
          onChange={onChange}
          error={formErrors.username}
          helperText={formErrors.username}
        />
        <TextField
          type='text'
          label='FIRST NAME'
          variant='outlined'
          name='first_name'
          value={formData.first_name}
          onChange={onChange}
          error={formErrors.first_name}
          helperText={formErrors.first_name}
        />
        <TextField
          type='text'
          label='LAST NAME'
          variant='outlined'
          name='last_name'
          value={formData.last_name}
          onChange={onChange}
          error={formErrors.last_name}
          helperText = {formErrors.last_name}
        />
        <TextField
          type='email'
          label='EMAIL'
          variant='outlined'
          name='email'
          value={formData.email}
          onChange={onChange}
          error={formErrors.email}
          helperText = {formErrors.email}
        />
        <TextField
          type='password'
          label='PASSWORD'
          variant='outlined'
          name='password'
          value={formData.password}
          onChange={onChange}
          error={formErrors.password}
          helperText = {formErrors.password}
        />
        <FormControl 
          component='fieldset'
          className='radioButtons'
          error={formErrors.role}
          helperText={formErrors.role}
        >
          <FormLabel component='legend'>ROLE</FormLabel>
          <RadioGroup 
            aria-label='ROLE'
            name='role'
            value={formData.role}
            onChange={onChange}
            error={true}
          >
            <FormControlLabel value={2} control={<Radio />} label='Member' />
            <FormControlLabel value={1} control={<Radio />} label='Instructor' />
          </RadioGroup>
        </FormControl>
        <Button variant='outlined' onClick={onSubmit}>Submit</Button>
        {/* <input
          type='password'
          placeholder='Password'
          name='password'
          ref={register({
            required: 'Password required',
            minLength: {value: 8, message: 'Password must be at least 8 characters'}
          })}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          ref={register({
            required: 'Email required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
        <select name='role' defaultValue='Select a Role' ref={register({
          required: 'Role required',
          validate: value => value !== 'Select a Role' || 'Role required'
        })}>
          <option disabled>Select a Role</option>
          <option value={1}>Instructor</option>
          <option value={2}>Student</option>
        </select>
      <button>Submit</button> 
        {errors.username && <p id='usernameError'>{errors.username.message}</p>}
        {errors.password && <p id='passwordError'>{errors.password.message}</p>}
        {errors.email && <p id='emailError'>{errors.email.message}</p>}
        {errors.role && <p id='roleError'>{errors.role.message}</p>} */}
      </form>
    </div>
  )
} export default SignUp