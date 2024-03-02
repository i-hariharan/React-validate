import React, { useState } from "react";
import {Link} from "react-router-dom";
import avatar from "../assets/avatar.png"
import Styles from "../Styles/Username.module.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { registerValidate } from "../helper/Validate";
import converttobase64 from "../helper/Convert";



function Register(){

  const [file , setfile] = useState();


  const formik = useFormik({
    initialValues : {
      username : "",
      password : "",
      email : "",
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values : await Object.assign(values, { profile : file || ""}) 
      console.log(values);
      
    }
  }
  )

  const onupload = async e => {
    const base64 = await converttobase64(e.target.files[0]) ;
    setfile(base64);
  } 

    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vw-100 vh-100">
          <div className="bg-white p-3 rounded w-25">
          <Toaster position="top-center" reverseOrder={false}></Toaster>
            <h2 className={Styles.header}>Hello</h2>
            <br></br>
            <br></br>
            <form  onSubmit={formik.handleSubmit} >
            
            <div className="mb-3">
              <label htmlFor="profile">
                <img src={file || avatar} alt="avatar" className={Styles.image}/>
              </label>
              <input onChange ={onupload} type = "file" id = "profile" name="profile"/>           
            </div>
            
            <div className="mb-3">
                <input {...formik.getFieldProps("username")}
                  type="text"
                  placeholder="username"
                  autoComplete="on"
                  className="form-control rounded-0"
                />
                <br></br>
                <input {...formik.getFieldProps("password")}
                  type="password"
                  placeholder="password"
                  autoComplete="on"
                  className="form-control rounded-0"
                  
                />
                <br></br>
                <input {...formik.getFieldProps("email")}
                  type="email"
                  placeholder="email"
                  autoComplete="on"
                  className="form-control rounded-0"
                />
            </div>
            <button type="submit" className="btn btn-primary w-100 rounded-0">Register</button>
            </form>
          </div>  
        </div>
    );
};

export default Register;