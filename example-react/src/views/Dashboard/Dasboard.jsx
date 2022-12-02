import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Dasboard = () => {
  const { isAuth } = useSelector(state => state.auth);

  if (!isAuth) {
    return (
      <Navigate to='/' />
    )
  }
  
  return (
    <div>
      dashboard
    </div>
  )
}

export default Dasboard