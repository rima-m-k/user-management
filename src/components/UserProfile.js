import axios from 'axios';
import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import './UserProfile.css'
import {addProfileImg} from '../store/index'

function UserProfile() {

  const dispatch = useDispatch();
  const [file, setFile] = useState();


  const user = useSelector((state) =>  state.currentUser)
  // -------------sending data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(); 
    formData.append("ProfileImg", file);
    formData.append("email", user.email);
    await axios.post("http://localhost:8000/addImg", formData)
    .then(res => {
     dispatch(addProfileImg(res.data.image))
    })
    .catch(err => console.error(err));
    
    }
    // ----------storing image in useState file
  const handleChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    //---------------

  };

  const [info,setInfo] = useState({
    name:user.name,
    email:user.email,
    isUpdating:false
  })


  return (

    <div>
     <h1> Profile </h1> 
     <div>
      
     <form
            onSubmit={handleSubmit}
          >
           
            
             
           
            {user.image ? (
              <div className='profileImage' >
              <img
              src={`http://localhost:8000/profileImage/${user.image}`}
              alt=""
              name="displayImg"
              style={{
                objectFit: "contain",
                width: "-webkit-fill-available",
              }}
            />
            </div>
            ) : (
              <>
                <label htmlFor="ProfileImg">
                  <input
                    name="ProfileImg"
                    type="file"
                    alt=""
                    accept=".jpg,.jpeg,.JPEG,.JPG"
                    onChange={handleChange}
                  />
                </label>


               <button className='profileBtn' >add profile pic</button>

              </>
            )}
          </form>

       <h3> Name: {user.name} </h3>
       <h3> email: {user.email} </h3>
       

     </div>
    

    </div>
  )
}

export default UserProfile
