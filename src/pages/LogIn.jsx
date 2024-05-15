import { Button, TextField, Typography } from '@mui/material'
import React, { useRef } from 'react'
import useLogin from '../hooks/useLogin'
//nofunciona@gmail.com
//Abc123

const LogIn = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const { text, errors, authorized, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value
    const password = passwordRef.current.value

    login({ email, password })
  }
  return (
    <>
      <Typography>{text}</Typography>
      <form method="post" onSubmit={handleSubmit}>
        <TextField label="email" type="email" name="email" id="email" inputRef={emailRef} />
        <br />
        <TextField label='password' type="password" name="password" id="password" inputRef={passwordRef} />
        {errors ? errors.map((error, index) => { return <p key={index}>{error.msg}</p> }) : null}
        <br />
        <Button type='submit'>Submit</Button>
      </form>
    </>
  )
}

export default LogIn