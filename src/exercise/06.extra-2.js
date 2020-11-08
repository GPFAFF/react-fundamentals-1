// Dynamic Forms
// 💯 Validate lower-case
// http://localhost:3000/isolated/final/06.extra-2.js

import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(event.target.elements.username.value)
  }

  const [errors, setErrors] = useState(null);

  const handleChange = (event) => {
    const { value } = event.target;
    const isLowerCase = value === value.toLowerCase();
    setErrors(isLowerCase ? null : 'Username must be lower case and not include spaces')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        {errors && <p role="alert">{errors}</p>}
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          name="username"
          id="username"
          type="text"
        />
      </div>
      <button disabled={Boolean(errors)} type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return (
    <div style={{ minWidth: 400 }}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}

export default App
