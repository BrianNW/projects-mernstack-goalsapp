import {useState, useEffect} from 'react'

function Register() {
  // setup useState
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''

  })

  // Destructure form data
  const {name, email, password, password2} = formData;

  return (
    <div>Register</div>
  )
}

export default Register