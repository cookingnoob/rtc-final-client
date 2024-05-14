import React, { useEffect, useRef, useState } from 'react'

const SignUp = () => {
  const emailRef = useRef(null);
  const nameRef = useRef(null)
  const passwordRef = useRef(null);
  const [text, setText] = useState(null);
  const [errors, setErrors] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const response = await fetch("http://localhost:3001/user/register", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data),
      });

      const result = await response.json()
      if (response.ok) {
        localStorage.setItem("token", result.token)
        console.log(result.data)
        setText(result.data)
      } else {
        setText(result.errorMessage);
        if (result.errors) {
          setErrors(result.errors)
        }
      }
    } catch (error) {
      console.error(error);
      setText('Failed to communicate with the server.');
    }
  };
  return (
    <>
      {text === null ? <></> : <p>{text}</p>}
      <form method="post" onSubmit={handleSubmit}>
        <label htmlFor="email">
          email:
          <input type="email" name="email" id="email" ref={emailRef} />
        </label>
        <br />
        <label htmlFor="name">
          name:
          <input type="name" name="name" id="name" ref={nameRef} />
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

export default SignUp