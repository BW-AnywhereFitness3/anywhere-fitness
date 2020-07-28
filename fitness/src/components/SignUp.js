import React from 'react'
import { useForm } from 'react-hook-form'

function SignUp (){
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = regData => console.log(regData)

  return(
    <div className='signUp'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='text'
          placeholder='Username'
          name='username'
          ref={register({
            required: 'Username required'
          })}
        />
        <input
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
          <option value='instructor'>Instructor</option>
          <option value='student'>Student</option>
        </select>
        <button>Submit</button>
        {errors.username && <p id='usernameError'>{errors.username.message}</p>}
        {errors.password && <p id='passwordError'>{errors.password.message}</p>}
        {errors.email && <p id='emailError'>{errors.email.message}</p>}
        {errors.role && <p id='roleError'>{errors.role.message}</p>}
      </form>
    </div>
  )
} export default SignUp