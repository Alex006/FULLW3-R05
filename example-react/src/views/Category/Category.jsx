import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Category = () => {
  const { isAuth } = useSelector(state => state.auth);

  if (!isAuth) {
    return (
      <Navigate to='/' />
    )
  }
  
  return (
    <div>Category</div>
  )
}

export default Category