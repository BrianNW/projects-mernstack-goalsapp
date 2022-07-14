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
  const onChange = () => {}

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form>

        <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" onChange={onChange}/>
        
        </form>
      </section>
    </>
  )
}

export default Register