import React, { useState } from 'react'

const UserComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  function saveUser(e){
    e.preventDefault();
    const user = {firstName, lastName, email, phoneNumber}
    console.log(user)
  }

  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          <h2 className='text-center'>Add User</h2>
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input 
                  type='text'
                  placeholder='Enter User First Name'
                  name='firstName'
                  value={firstName}
                  className='form-control'
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input 
                  type='text'
                  placeholder='Enter User Last Name'
                  name='lastName'
                  value={lastName}
                  className='form-control'
                  onChange={(e) => setLastName(e.target.value)}
                >
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input 
                  type='text'
                  placeholder='Enter User Email'
                  name='email'
                  value={email}
                  className='form-control'
                  onChange={(e) => setEmail(e.target.value)}
                >
                </input>
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Phone Number:</label>
                <input 
                  type='text'
                  placeholder='Enter User Phone Number'
                  name='phoneNumber'
                  value={phoneNumber}
                  className='form-control'
                  onChange={ (e) => setPhoneNumber(e.target.value)}
                >
                </input>
              </div>
              <button className='btn btn-success' onClick={saveUser}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserComponent