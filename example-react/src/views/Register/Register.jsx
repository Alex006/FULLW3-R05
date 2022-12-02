import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//subcomponents
import FormRegister from './FormRegister';

const Register = () => {
  const { isAuth } = useSelector(state => state.auth);

  if (isAuth) {
    return (
      <Navigate to='/' />
    )
  }
  
  return (
    <div>
      <h1>Register</h1>
      <FormRegister/>
    </div>
  )
}

export default Register;