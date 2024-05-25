import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { createUser } from '../services/UserService' 

const UserComponent = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const {id} = useParams();
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  })

  const navigator = useNavigate();

  function saveUser(e){
    e.preventDefault();
      if (validateForm()) {
        const user = {firstName, lastName, email, phoneNumber}
        console.log(user)
    
        createUser(user).then((response) => {
          console.log(response.data);
          navigator('/users')
        })
      }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = {... errors}

    if(firstName.trim()) {
      errorsCopy.firstName = '';
    } else {
      errorsCopy.firstName = 'First name is required';
      valid = false;
    }

    if(lastName.trim()) {
      errorsCopy.lastName = '';
    } else {
      errorsCopy.lastName = 'Last name is required';
      valid = false;
    }

    if(email.trim()) {
      errorsCopy.email = '';
    } else {
      errorsCopy.email = 'Email is required';
      valid = false;
    }

    if(phoneNumber.trim()) {
      errorsCopy.phoneNumber = '';
    } else {
      errorsCopy.phoneNumber = 'Phone number is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className='text-center'>Update User</h2>
    } else {
      return <h2 className='text-center'>Add User</h2>
    }
  }
  return (
    <div className='container'>
      <br /> <br />
      <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
          {pageTitle()}
          <div className='card-body'>
            <form>
              <div className='form-group mb-2'>
                <label className='form-label'>First Name:</label>
                <input 
                  type='text'
                  placeholder='Enter User First Name'
                  name='firstName'
                  value={firstName}
                  className={`form-control ${ errors.firstName ? 'is-invalid': ''}`}
                  onChange={(e) => setFirstName(e.target.value)}
                >
                </input>
                { errors.firstName && <div className='invalid-feedback'>{ errors.firstName} </div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Last Name:</label>
                <input 
                  type='text'
                  placeholder='Enter User Last Name'
                  name='lastName'
                  value={lastName}
                  className={`form-control ${ errors.lastName ? 'is-invalid': ''}`}
                  onChange={(e) => setLastName(e.target.value)}
                >
                </input>
                { errors.lastName && <div className='invalid-feedback'>{ errors.lastName} </div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Email:</label>
                <input 
                  type='text'
                  placeholder='Enter User Email'
                  name='email'
                  value={email}
                  className={`form-control ${ errors.email ? 'is-invalid': ''}`}
                  onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                { errors.email && <div className='invalid-feedback'>{ errors.email} </div>}
              </div>
              <div className='form-group mb-2'>
                <label className='form-label'>Phone Number:</label>
                <input 
                  type='text'
                  placeholder='Enter User Phone Number'
                  name='phoneNumber'
                  value={phoneNumber}
                  className={`form-control ${ errors.phoneNumber ? 'is-invalid': ''}`}
                  onChange={ (e) => setPhoneNumber(e.target.value)}
                >
                </input>
                { errors.phoneNumber && <div className='invalid-feedback'>{ errors.phoneNumber} </div>}
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