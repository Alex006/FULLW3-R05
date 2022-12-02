import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerAsync } from '../../store/authSlice';

const FormRegister = () => {
    const dispatch = useDispatch(); 
    const [data,setData] = useState({
        email:'',
        password: '',
        first_name:'',
        last_name:''
    }); 
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(registerAsync(data));
    };
    const handleChange = (e)=>{
        setData({...data, [e.target.name]:e.target.value });
    };
  return (
    <form onSubmit={handleSubmit}>
        <label>email:</label>
        <input  name='email' value={data.email} onChange={handleChange}/>
        <br/>
        <label>password:</label>
        <input type='password' name='password' value={data.password} onChange={handleChange}/>
        <br/>
        <label>first name:</label>
        <input  name='first_name' value={data.first_name} onChange={handleChange}/>
        <br/>
        <label>last name:</label>
        <input  name='last_name' value={data.last_name} onChange={handleChange}/>
        <br/>
        <button type='submit'>Register</button>
    </form>
  )
}

export default FormRegister;