import React, { useState } from 'react'

const initialFormData = {
  _: 'formData',
  username: '',
  password: '',
  email: '',
  role: 'Select a Role'
}

function SignUp (){
  const [formData, setFormData] = useState(initialFormData)

  const UpdateFormData = e => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})
  }

  return(
    <div className='signUp'>
      <label>
        username
        <input
          type='text'
          name='username'
          value={formData.username}
          onChange={UpdateFormData}
        ></input>
      </label>
      <label>
        password
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={UpdateFormData}
        ></input>
      </label>
      <label>
        email
        <input
          type='text'
          name='email'
          value={formData.email}
          onChange={UpdateFormData}
        ></input>
      </label>
      <label>
        role
        <select defaultValue='Select a Role'>
          <option disabled>Select a Role</option>
          <option value='instructor'>Instructor</option>
          <option value='student'>Student</option>
        </select>
      </label>
    </div>
  )
} export default SignUp