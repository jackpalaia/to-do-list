import React from 'react'

const Input = ({ submit, inputValue, inputChange }) => (
  <div>
    <form onSubmit={submit}>
      <div>
        <input placeholder='add new task' value={inputValue} onChange={inputChange}></input>
        <button type='submit'>add</button>
      </div>
    </form>
  </div>
)

export default Input