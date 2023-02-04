import React from 'react'

function PersonForm(props: any) {
  return (
    <form onSubmit={props.onSubmit}>
        <div>
          Name:{" "}
          <input value={props.newName} onChange={(e) => props.setNewName(e.target.value)} />
        </div>
        <div>
          Number:{" "}
          <input
            type="number"
            value={props.newNumber}
            onChange={(e) => props.setNewNumber(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm