import { useRef, useState } from 'react'

import './App.css'

function App() {

const emailRef = useRef(null)
const passwordRef = useRef(null)

const handleSubmit = async (e) => {
  e.preventDefault()
  const data = {
    email: emailRef.current.value,
    password: passwordRef.current.value,
  }
  try{
    await fetch('http://localhost:3001/user/register',{
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
    })

  } catch(error) {
    console.log(error)
  }
}

  return (
    <>
     <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="email">email:
      <input type="email" name="email" id="email" ref={emailRef}/>
      </label>
      <br />
        <label htmlFor="password">Password
        <input type="password" name="password" id="password"ref={passwordRef} />
        </label>
        <br />
        <button type="submit">Submit</button>
     </form>
    </>
  )
}

export default App
