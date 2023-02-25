import axios from 'axios';
import React, { useState } from 'react'
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const [inputs, setInputs] = useState({
      email:'',
      password:''
    });

  const Navigate = useNavigate();

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
    console.log(inputs)
    
  const [error, setError] = useState('')
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post("http://localhost:8000/admin",inputs)
        .then(res => console.log(res))
        .then(() => Navigate("/admin/home"))
        .catch(err => {setError(err.response.data.message)
        })
      }
  return (
    <div>
        <div className="form--data"> 
      <h1 className='heading'>
      Admin login
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
          
      </form>
        </div>
     
     

    </div>

  )
}

export default AdminLogin
