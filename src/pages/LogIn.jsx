import React, { useState, useRef } from 'react'

const LogIn = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const [text, setText] = useState(null)
  const [errors, setErrors] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      Password: passwordRef.current.value
    }

    try {
      const response = await fetch('http://localhost:3001/user/login', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const result = await response.json()
      if (response.ok) {
        localStorage.setItem("token", result.token)
        console.log(result.data)
        setText(result.data)
      } else {
        setText(result.errorMessage)
        if (result.errors) {
          setErrors(result.errors)
        }
      }
    } catch (error) {
      console.error(error)
      setErrors('error al comunicarse con el servidor')
    }
  }
  return (
    <>
      {text === null ? <></> : <p>{text}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">
          email:
          <input type="email" name="email" id="email" ref={emailRef} />
        </label>
        <br />
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
          {errors ? errors.map((error, index) => { return <p key={index}>{error.msg}</p> }) : null}
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default LogIn

