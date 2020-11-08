// Basic Forms
// 💯 using refs
// http://localhost:3000/isolated/final/06.extra-1.js

import React, { useRef } from 'react'

function UsernameForm({ onSubmitUsername }) {
  const inputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" ref={inputRef} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
