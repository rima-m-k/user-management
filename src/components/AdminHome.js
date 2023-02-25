import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleUser from "../components/SingleUser";
import Swal from "sweetalert2";
import './UserLogin.css'

function AdminHome() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [addUserButtonClick, setButton] = useState(false);

  ////////////////////////////// state for controlled input component /////////////

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  ////////////////////////////// fetching the value from backend at initial render ///////////////////////

  useEffect(() => {
    axios
      .get("http://localhost:8000/admin/home")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          text: "fetching data failed",
          showConfirmButton: false,
          timer: 1200,
          width: "300px",
        })
      );
  }, []);

  //////////////////////////// onchange search term ///////////////////////////

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  ////////////////////////// refreshing with newly fetched data from the backend after crud operation///////////////////

  function refreshUsers() {
    axios
      .get("http://localhost:8000/admin/userDetails")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          text: "fetching user failed in the backend",
          showConfirmButton: false,
          timer: 1200,
          width: "300px",
        })
      );
  }

  ////////////////////////////// filtering the user in search box /////////////////////////////

  const filteredUsers = users.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const renderedUsers = filteredUsers.map((item) => {
    return (
      <SingleUser key={item._id} item={item} refreshUsers={refreshUsers} />
    );
  });

  ////////////////////////////// toggle for add user button //////////////////////////////

  const handleClick = () => {
    setButton(!addUserButtonClick);
  };

  ////////////////////////////////// controlled onchange for input element in the form

  const handleNameChange = (e) => {
    if (e.target.name === "name") {
      setNewUser((prevdata) => {
        return {
          ...prevdata,
          name: e.target.value,
        };
      });
    } else if (e.target.name === "email") {
      setNewUser((prevdata) => {
        return {
          ...prevdata,
          email: e.target.value,
        };
      });
    } else if (e.target.name === "password") {
      setNewUser((prevdata) => {
        return {
          ...prevdata,
          password: e.target.value,
        };
      });
    }
  };

  /////////////////////////////// adding new user in the admin side ////////////////////////

  const handleAddUser = async (e) => {
    e.preventDefault();
   await axios
      .post("http://localhost:8000/admin/addUser", newUser)
      .then((res) => {
        Swal.fire({
          icon: "success",
          text: "User Added Successfully",
          showConfirmButton: false,
          timer: 1200,
          width: "300px",
        });
      })
      .then(() => {
        refreshUsers();
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          text: "User not Added",
          showConfirmButton: false,
          timer: 1200,
          width: "300px",
        })
      );
    ///////////////////// setting the controlled state back after the submission ////////////////////
    setNewUser({
      name: "",
      email: "",
      password: "",
    });
    setButton(!addUserButtonClick);
    refreshUsers();
  };

  return (
    <div style={{
      display:"flex",
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
      padding:'5px',
      margin:'0'
    }}>
      <h1 style={{
        textAlign:'center',
        marginTop:'3px'
      }}>USERS</h1>
      <div >
        <input
          type="text"
          style={{margin:"3px",height:'25px',marginBottom:'8px'}}

          className="form-control"
          onChange={handleChange}
          value={searchTerm}
          placeholder="Search User"
        />
      </div>
      {addUserButtonClick ? (
        <div className="col-4 shadow rounded p-5 mb-3 ">
          <form
            className="d-flex flex-column align-items-center justify-content-center"
            style={{margin:"3px",
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
        justifyContent:'center'}}

            onSubmit={handleAddUser}
          >
            <input
              placeholder="Name"
              name="name"
              type="text"
              value={newUser.name}
              className="form-control "
              style={{margin:"3px",height:'25px',border:'1px solid grey'}}

              onChange={handleNameChange}
            />
            <input
              placeholder="Email"
              name="email"
              type='email'
              value={newUser.email}
              className="form-control "
              style={{margin:"3px",height:'25px',border:'1px solid grey'}}

              onChange={handleNameChange}
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={newUser.password}
              className="form-control "
              style={{margin:"3px",height:'25px',border:'1px solid grey'}}
              onChange={handleNameChange}
            />
            <div style={{display:'flex'}}>
              <button style={{margin:"5px",backgroundColor:'grey'}} >
                Add User
              </button>
              <button  style={{margin:"5px",backgroundColor:'tomato'}} onClick={handleClick}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className='Add--User'>
          <button onClick={handleClick} secondary>
            Add User
          </button>
        </div>
      )}
      <div className="User--table">
        <table>
          <tbody>{users.length>0 ? renderedUsers : <h1>No Users</h1>}</tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminHome;
