import React, { useState } from 'react'

const useLogin = () => {
  const [text, setText] = useState(null)
  const [errors, setErrors] = useState(null)
  const [authorized, setAuthorized] = useState(false);

  const login = async (data) => {
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
  }
  return { text, errors, authorized, login }
}

export default useLogin