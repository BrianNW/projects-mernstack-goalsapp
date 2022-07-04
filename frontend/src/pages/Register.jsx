import {useState, useEffect} from 'react'

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

  return (
    <section className="heading">
      <h1>
        
      </h1>
       </section>
  )
}

export default Register