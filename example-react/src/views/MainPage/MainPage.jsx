import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MainPage = () => {
  const { isAuth } = useSelector(state => state.auth);

  if (isAuth) {
    return (
      <Navigate to='/dashboard' />
    )
  }

  return (
    <div>MainPage</div>
  )
}

export default MainPage