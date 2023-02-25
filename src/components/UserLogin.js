import React, { useState } from 'react'
import axios from 'axios'
import './UserLogin.css';
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import  {addUser}  from '../store/index'


function UserLogin() {

  const dispatch = useDispatch();

  const Navigate = useNavigate();


    const [inputs, setInputs] = useState({
      email:'',
      password:''
    });
  const [error, setError] = useState('')
    
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    console.log(inputs)
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8000/', inputs)
        .then(res =>{ console.log(res)
          const data ={
            ...res.data.data,
          token: res.data.token,

          };
          localStorage.setItem("currentUser", JSON.stringify(data));
          dispatch(addUser(data));
        })
        .then(() => Navigate("/home"))
        .catch(err => {setError(err.response.data.message)})
        setInputs({
          email:'',
          password:''
      })
      
    }
    
  return (
    <div>
        <div className="form--data"> 
      <h1 className='heading'>
      User login
        </h1>
      <form onSubmit={handleSubmit}>
          <div className='form--element'>
            <label>Email</label>
            <input type="email" name="email"  value={inputs.email} onChange={handleChange}/>
          </div>
          <div className='form--element'>
            <label>Password</label>
            <input type="password" name="password"  value={inputs.password} onChange={handleChange} />
          </div>
          {error && <span>{error}</span>}

          <div className='form--button'>
            <button type="submit">Login</button>
          </div>
          <div className='form--link'>
            <Link to="/signup"> signup </Link>
          </div>
      </form>
        </div>
     
     

    </div>
  )
}

export default UserLogin
