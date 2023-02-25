import React, { useState } from "react";
import "./UserLogin.css";
import { Link,useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
import FormValidation from "../validation/FormValidation";
import axios from "axios";

function UserSignup() {
  //   const validate = values =>{

  //     let errors ={}
  //     if(!values.email) {
  //       errors.email = 'Required'

  //     } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
  //       errors.email ='Invalid email format'
  //   }
  //     if(!values.password) {
  //       errors.password = 'Required'
  //     }
  //     if(!values.confirmpassword) {
  //       errors.confirmpassword = 'Required'
  //     }
  //     return errors
  //   }
  //   const initialValues ={
  //     email:'',
  //     password:'',
  //     confirmpassword:''

  //   }
  //   const onSubmit = values =>{
  //     console.log('Form data' , values)
  //   }
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     validate
  //   })
  // console.log('form errors',formik.errors)

  const [signupDetails, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/signup", signupDetails)
      .then((res) => console.log(res))
      .then(() => Navigate("/"))
      .catch((err) => {
        setError(err.response.data.message);
      });
    setDetails({
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => ({ ...prevValue, [name]: value }));
  };

  return (
    <div>
      <div className="form--data">
        <h1 className="heading"> User Signup </h1>
        <form onSubmit={handleSubmit}>
          <div className="form--element">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={signupDetails.name}
              onChange={handleChange}
            />
            {/* {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null } */}
          </div>
          <div className="form--element">
            <label>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={signupDetails.email}
              onChange={handleChange}
            />
            {/* {formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null } */}
          </div>
          <div className="form--element">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={signupDetails.password}
              onChange={handleChange}
            />
            {/* {formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null } */}
          </div>

          {/* <div className="form--element">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              value={signupDetails.confirmpassword}
              onChange={handleChange}
            />
           {formik.errors.confirmpassword ? <div >{formik.errors.confirmpassword}</div> : null }
          </div> */}
          {error && <span>{error}</span>}
          <div className="form--button">
            <button>Create </button>
          </div>
          <div className="form--link">
            <Link to="/"> Login </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserSignup;
