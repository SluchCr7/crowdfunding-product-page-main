'use client'
import React, { useEffect, useState } from 'react'
type headerBarams = {
  title: string
  quantity: number
  p: string
  pledge?: string
  id?: string
  idcheck?: string
  SalesId? : string
}

type elements  = {
  value: string
  id: string
}

const MenuCard = (props : headerBarams) => {
  const [check, setCheck] = useState(false);
  useEffect(() => {
    let checkBox = document.querySelectorAll(".checkBox") as NodeListOf<HTMLInputElement>
    let MenuCard = document.querySelectorAll(".MenuCard") as NodeListOf<HTMLInputElement>
    checkBox.forEach((item) => {
      item.addEventListener("click", (e) => {
        // console.log(item.parentElement?.children[0])
        if (item.checked) {
          checkBox.forEach((item) => {
            item.parentElement?.children[1]?.children[2].classList.add("none")
            item.parentElement?.parentElement?.classList.remove("greenBorder")
            item.checked = false;
          })
          item.parentElement?.children[1]?.children[2].classList.remove("none")
          item.parentElement?.parentElement?.classList.add("greenBorder")
          item.checked = true;
        }
        else {
          item.parentElement?.children[1].children[2].classList.add("none")
          item.parentElement?.parentElement?.classList.remove("greenBorder")
          // item.parentElement?.classList.remove("greenBorder")
        }
        // console.log(item.parentElement?.children[1].children[2].children[1].children[1].children[1])
      })
      let menuSale = document.getElementById("menuSale")
      let button = item.parentElement?.children[1].children[2].children[1].children[1].children[1]
      let title = item.parentElement?.children[1].children[0].children[0].children[0]
      let quantity = item.parentElement?.children[1].children[0].children[1].children[0]
      let input = item.parentElement?.children[1].children[2].children[1].children[1].children[0] as HTMLInputElement
      let Thanks = document.getElementById("Thanks")

      button?.addEventListener("click" , () => {
        // console.log(item.parentElement?.children[1].children[0].children[1].children[0].textContent)
        if (title?.textContent === "Black Edition Stand") {
          if (parseInt(input?.value) < 75) {
            console.log("Please enter a valid amount")
          }
          else {
            console.log(input?.value)
            menuSale?.classList.add("none")
            Thanks?.classList.remove("none")
          }
        }
        else if (title?.textContent === "Mahogany Special Edition") {
          if (parseInt(input?.value) < 200) {
            console.log("Please enter a valid amount")
          }
          else {
            console.log(input?.value)
            menuSale?.classList.add("none")
            Thanks?.classList.remove("none")
          }
        }
        else if (title?.textContent === "Pledge with no reward") {
          console.log(input?.value)
          menuSale?.classList.add("none")
          Thanks?.classList.remove("none")
        }
        else {
          if (parseInt(input?.value) < 25) {
            // menuSale?.classList.add("none")
            console.log("Please enter a valid amount")
          }
          else {
            console.log(input?.value)
            menuSale?.classList.add("none")
            Thanks?.classList.remove("none")
          }
        }
      })
    })
  }, [])
  return (
    <div className='MenuCard' id={props.id}>
        <div className='TopCardMenu'>
        <input type="checkbox" name="" id={props.idcheck} className='checkBox'/>
              <div className='card_details'>
                <div className='row_text'>
                    <div className="Titles">
                      <span className='titleCard'>{props.title}</span>
                      <span className='Pledge'>{props.pledge}</span>
                    </div>
                    <span className='Quantity'><span className='quantity_num' id='quantityNum'>{props.quantity}</span> left</span>
                </div>
                <p>{props.p}</p>
                <div className='Sales_menu none' id={props.SalesId}> 
                <hr />
                <div className='Sale'>
                  <span>Enter your pledge</span>
                  <div className='input'>
                    <input type="text" placeholder='$0.00' />
                    <button>Continue</button>
                  </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuCard