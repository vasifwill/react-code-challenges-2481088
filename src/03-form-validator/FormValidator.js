import { useState } from 'react'

export default function FormValidator () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [valid, setValid] = useState([])

const handleForm  = (e) => {
  e.preventDefault()
  if( email.indexOf("@") == -1){
    setValid("email is not valid")
  } else if (password.length < 8){
    setValid([...valid, "pasword is less than 8 character"])
  }else if(passwordConfirm !== password){
    setValid([...valid, "pasword is not matching"])
  }else {
    setValid("Form created")
  }
}

  return (
    <>
    <form onSubmit={handleForm}>
      <h2>Sign Up!</h2>
      <label htmlFor='email'>Email</label>
      <input
        type='text' name='email'
        onChange={e => setEmail(e.target.value)} />
      <label htmlFor='password'>Password</label>
      <input
        type='password' name='password'
        onChange={e => setPassword(e.target.value)} />
      <label htmlFor='password-confirm'>Confirm Password </label>
      <input
        type='password' name='password-confirm'
        onChange={e => setPasswordConfirm(e.target.value)} />
      <input type='submit' value='Submit' />
      <ul>
        {valid.map((item, index) => <li key={index}>{item}</li> )}
      </ul>
    </form>
   
    </>
  )
}
