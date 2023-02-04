import React from 'react'

function PersonData(props: any) {
  return (
    <>
    {props.persons.map((person: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; number: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }, idx: React.Key | null | undefined) => (
        <p key={idx}>
          {person.name} : {person.number}
        </p>
      ))}
    </>
  )
}

export default PersonData