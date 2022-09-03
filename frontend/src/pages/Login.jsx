import React, { Component }  from 'react'
import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  // setup useState
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  // Destructure form data fields
  const {email, password} = formData;

  // Add onChange function for input below
  // This allows you to type into the text fields
  const onChange = (e) => {
    // set form data to an object
    setFormData((prevState) => ({
      // spread operator across the previous state, as we want the other fields
      ...prevState,
      //get the key by whatever the name value is
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className="form">
        <form onSubmit="{onSubmit}">          

          <div className="form-group">
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={email} 
              placeholder="Enter your email" onChange={onChange}
            />     
          </div>

          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password" 
              value={password} 
              placeholder="Enter your password" onChange={onChange}
            />
            <div className="form-group">
              <button type="submit" class="btn btn-block">Submit</button>
            </div>        
          </div>
            
        </form>
      </section>
    </>
  )
}

export default Login