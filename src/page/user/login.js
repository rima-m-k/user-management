// import React, { useState, useEffect } from "react";
import UserLogin from "../../components/UserLogin";

function Login() {
  // const [backendData, setBackendData] = useState([{}]);
  // useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);
  return (
    <div>
      <UserLogin />
     
      
    </div>
  );
}

export default Login;
