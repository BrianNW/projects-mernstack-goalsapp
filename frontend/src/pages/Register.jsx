import React, { Component }  from 'react'
import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  // setup useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''

  })

  // Destructure form data fields
  const {name, email, password, password2} = formData;

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
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit="{onSubmit}">
          <div className="form-group">
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={name} 
              placeholder="Enter your name" onChange={onChange}
            />     
          </div>

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
          </div>

          <div className="form-group">
            <input 
              type="password" 
              className="form-control" 
              id="password2" 
              name="password2" 
              value={password} 
              placeholder="Confirm your password" onChange={onChange}
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

export default Register