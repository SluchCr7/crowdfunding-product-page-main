import React from 'react'

type headerBarams = {
    numtxt: string
    text: string
    id?: string
}

const Number = (props : headerBarams) => {
  return (
    <div className='number' id={props.id}>
        <h1>{props.numtxt}</h1>
        <p>{props.text}</p>
    </div>
  )
}

export default Number