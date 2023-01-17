import React from 'react'
import { IconButton, Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useCartContext } from './context/CartContext'

const Cart = () => {
  const { cart } = useCartContext()
  return (
    <>
      <IconButton aria-label="cart">
        <Badge badgeContent={cart.length} color="primary">
          <NavLink to="/cart"><ShoppingCart className='text-dark fw-bolder' /></NavLink>
        </Badge>
      </IconButton>
    </>
  )
}

export default Cart