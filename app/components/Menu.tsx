import React from 'react'
import MenuCard from './MenuCard'
import CloseIcon from '@mui/icons-material/Close';

const Menu = () => {
  return (
    <div className="Menu none" id='menuSale'>
        <span className='title'>Back this project</span>
        <p className='paragraph'>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        <MenuCard  id='cardOne' title={'Pledge with no reward'} quantity={101} p={'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.'} />
        <MenuCard SalesId='SaleOne' idcheck='CheckOne' id='cardTwo' title={'Bamboo Stand'} pledge='Pledge $25 or more' quantity={101} p={'You get an ergonomic stand made of natural bamboo. You have helped us launch our promotional campaign, and you’ll be added to a special Backer member list.'} />
        <MenuCard SalesId='SaleTwo' idcheck='CheckTwo' id='cardThree' title={'Black Edition Stand'} pledge='Pledge $75 or more' quantity={65} p={'You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backermember list. Shipping is included.'} />
        <MenuCard idcheck='checkEvent' id='opacity' title={'Mahogany Special Edition'} pledge='Pledge $200 or more' quantity={0} p={'You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'} />
        <span className='icon' id='iconClose'><CloseIcon/></span>
    </div>
  )
}

export default Menu