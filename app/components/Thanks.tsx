'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
const Thanks = () => {
  const [close, setClose] = useState(false)
  
  useEffect(() => {
    let btn = document.getElementById("btn")
    let Thanks = document.getElementById("Thanks")
    if (close) {
      Thanks?.classList.add("none")
      document.getElementById("Mode")?.classList.remove("Mode")
    }
    btn?.addEventListener("click" , () => {
      setClose(!close)
      console.log(close)
    })
  } , [close])
  return (
    <div className='thanksCont none' id="Thanks">
        <Image
                src="/icon-check.svg"
                width={65}
                height={65}
                alt="Picture of the author"
                className='icon_check'
            />
        <h1>Thanks for your support!</h1>
        <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed. Got it!</p>
        <button id="btn">Got it</button>
    </div>
  )
}

export default Thanks