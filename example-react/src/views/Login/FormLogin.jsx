import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginAsync } from '../../store/authSlice';

const FormLogin = () => {
    const dispatch = useDispatch();
    const [data,setData] = useState({
        email:'',
        password: ''
    }); 
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(loginAsync(data));
    };
    const handleChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value });
    };
  return (
    <form onSubmit={handleSubmit}>
        <label>email:</label>
        <input type='text' name='email' value={data.email} onChange={handleChange}/>
        <br/>
        <label>password:</label>
        <input type='password' name='password' value={data.password} onChange={handleChange}/>
        <br/>
        <button type='submit'>Login</button>
    </form>
  )
}

export default FormLogin;