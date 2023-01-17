import React from 'react'
import { IconButton, Badge } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
// import { useCartContext } from './context/CartContext'

const WishList = () => {
//   const { cart } = useCartContext()
  return (
    <>
      <IconButton aria-label="cart">
        <Badge badgeContent="2" color="primary">
          <NavLink to="/wishlist"><Favorite className='text-danger fw-bolder' /></NavLink>
        </Badge>
      </IconButton>
    </>
  )
}

export default WishList