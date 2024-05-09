import React from 'react'

type headerBarams = {
  name: string,
  num: number,
  para: string,
  quantity: number,
  id?: string
  idbtn?: string
}

const Card = (props : headerBarams) => {
  return (
    <div className='card' id={props.id}>
        <div className='top_card'>
            <span className='title'>{props.name}</span>
        <span className='price'>Pledge {props.num}$ or More</span>
        </div>
        <p>{props.para}</p>
        <div className='bottom_card'>
        <span className='quantity'>{props.quantity} <span className='left'>left</span></span>
            <button id={props.idbtn}>Select Reward</button>
        </div>
    </div>
  )
}

export default Card