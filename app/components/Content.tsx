'use client'
import React, { useEffect, useState } from 'react'
import Number from './Number'
import Image from 'next/image'
import Card from './Card'
const Content = () => {

    const [bookMarked, setBookMarked] = useState(false)
    const [Menu, setMenu] = useState(false)
    
    
    let menuSale = document.getElementById("menuSale")
    let Mode = document.getElementById("Mode")
    let One = (document.getElementById("CheckOne") as HTMLInputElement)?.checked;
    let two = (document.getElementById("CheckTwo") as HTMLInputElement)?.checked;
    useEffect(() => {
        let bookmark = document.getElementById("bookmark")
        let imgBook = document.getElementById("imgBook")
        if (bookMarked) {
            bookmark?.classList.add("grrencolor")
            imgBook?.classList.add("colorGreen")
        }
        else {
            bookmark?.classList.remove("grrencolor")
            imgBook?.classList.remove("colorGreen")
        }
        bookmark?.addEventListener('click', () => {
            setBookMarked(!bookMarked)
        })
        let btn = document.querySelector(".btn")
        let iconClose = document.getElementById("iconClose")
        let checkBox = document.querySelectorAll(".checkBox")
        if (Menu) {
            menuSale?.classList.remove("none")
            Mode?.classList.add("Mode")
        }
        btn?.addEventListener("click", () => {
            setMenu(!Menu)
        })
        if (!Menu) {
            menuSale?.classList.add("none")
            Mode?.classList.remove("Mode")
        }
        iconClose?.addEventListener("click", () => {
            setMenu(!Menu)
            checkBox.forEach((item) => {
                item.parentElement?.children[1].children[2].classList.add("none")
                item.parentElement?.parentElement?.classList.remove("greenBorder")
                item.checked = false
            })
        })
    })
    useEffect(() => {
        let btnOne = document.getElementById("btnOne")
        let btnTwo = document.getElementById("btnTwo")
        if (Menu) {
            menuSale?.classList.remove("none")
        }
        btnOne?.addEventListener("click", () => {
            setMenu(!Menu)
            document.getElementById("cardTwo")?.classList.add("greenBorder")
            One = true
            document.getElementById("SaleOne")?.classList.remove("none")
        })
        btnTwo?.addEventListener("click", () => {
            setMenu(!Menu)
            document.getElementById("cardThree")?.classList.add("greenBorder")
            two = true
            document.getElementById("SaleTwo")?.classList.remove("none")
            
        })
    })

return (
    <div className='content'>
        <div className='sectionIntro'>
            <Image
                src="/logo-mastercraft.svg"
                width={50}
                height={50}
                alt="Picture of the author"
                className='icon_master'
                />
            <h1>Mastercraft Bamboo Monitor Riser</h1>
            <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            <div className='buttons'>
                <button className='btn'>Back this project</button>
                <div className='button' id='bookmark'>
                        
                    <svg width="56" height="56" >
                        <g fill="none" fill-rule="evenodd">
                            <circle fill="hsl(0, 0%, 10%)" id='imgBook' cx="28" cy="28" r="28"></circle>
                            <path fill="hsl(0, 0%, 100%)" d="M23 19v18l5-5.058L33 37V19z"></path>
                        </g>
                    </svg>
                    <button>Bookmark</button>
                </div>
            </div>
        </div>
        <div className='sectionNumOne'>
            <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-[3rem]'>
                <Number numtxt={'$89,914'} text={'of $100,000 backed'} />
                <Number numtxt={'5.007'} text={'total backers'} />
                <Number numtxt={'56'} text={'days left'}  id='noneborder'/>
            </div>
            <div className='range'>
                <div className='progress'><div className='progress-bar'></div></div>
            </div>
        </div>
        <div className='sectionNumTwo'>
            <span className='tit'>About this project</span>
            <p> The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen 
                to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
            </p>
            <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to place your monitor, office chair, and close friends. </p>
            <Card idbtn='btnOne' name={'Bamboo Stand'} num={25} para={'You get an ergonomic stand made of natural bamboo. You have helped us launch our promotional campaign and you’ll be added to a special Backer member list.'} quantity={101} />
            <Card idbtn='btnTwo' name={'Black Edition Stand'} num={75} para={'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list Shipping is included.'} quantity={64} />
            <Card idbtn='btnThree' id='opacity' name={'Mahogany Special Edition'} num={200} para={'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'} quantity={0} />
        </div>
    </div>
  )
}

export default Content