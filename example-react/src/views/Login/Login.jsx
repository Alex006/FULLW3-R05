import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
//subcomponent
import FormLogin from './FormLogin';

const Login = () => {
  const { isAuth } = useSelector(state => state.auth);

  if (isAuth) {
    return (
      <Navigate to='/' />
    )
  }
  
  return (
    <div>
      <h1>Login</h1>
      <FormLogin/>
    </div>
  )
}

export default Login;