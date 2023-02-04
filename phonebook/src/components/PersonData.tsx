import React from 'react'

function PersonData(props: any) {
  console.log("AllPerson", props.persons)
  return (
    <>
    {props.persons.map((person: any, idx: React.Key | null | undefined) => (
      
        <p key={person.id}>
          {person.name} : {person.number} <button onClick= {()=> props.onClickDeleteData(person.id)}>delete</button>
        </p>
      ))}
    </>
  )
}

export default PersonData