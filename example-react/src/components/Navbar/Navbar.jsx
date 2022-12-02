import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './../../store/authSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.auth);
  const handleLogOut = ()=>{
    dispatch(logOut());
  }
  return (
    <div style={{
      background:'#00000020',
      display:'flex',
      flexDirection:'row',
      justifyContent: 'space-around',
      
    }}>
      <Link to='/'>Home</Link>
      {isAuth && <Link to='/dashboard'>Dashboard</Link>}
      {isAuth && <Link to='/category'>categories</Link>}
      {!isAuth && <Link to='/register'>Register</Link>}
      {!isAuth ?<Link to='/login'>Login</Link> : <button onClick={handleLogOut} >Log Out</button>}
    </div>
  )
}

export default Navbar