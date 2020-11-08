// Controlled Forms
// 💯 Control the input value
// http://localhost:3000/isolated/final/06.extra-3.js

import React, { useState } from 'react'

function UsernameForm({ onSubmitUsername }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username)
  }

  const initialState = {
    username: ''
  };

  const [formData, setFormData] = useState(initialState);
  const { username } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...initialState, [name]: value.toLowerCase() });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          name="username"
          id="username"
          type="text"
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
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
