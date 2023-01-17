import React,{useState} from 'react'
import {FaCheck} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useCartContext } from './context/CartContext'

const ColorChart = ({product, id}) => {
    const { addToCart } = useCartContext()
    const {colors, quantity} = product;
    const[color, setColor] = useState()
    const[productquantity, setProductQuantity] = useState()
  return (
    <>
        <div className='attribute__container my-4 py-4'>
            <div className='colors'>
                <p className='fw-bold fs-5'>
                    Colors :
                    {
                        colors.map((currColor)=>{
                            return(
                                <>
                                    <button key={currColor.id} style={{backgroundColor:currColor}} 
                                    className={color === currColor ? "colorbutton active" : "colorbutton"}
                                    onClick={()=>setColor(currColor)}

                                    >{color === currColor ? <FaCheck className='text-white'/> : null}</button>
                                </>
                            )
                        })
                    } 
                </p>
            </div>
            <div className='quantity'>
                <p className='fw-bold fs-5'>
                    Quantity :
                    {
                        quantity.map((currQuantity)=>{
                            return(
                                <>
                                    <button key={currQuantity.id}
                                    className={productquantity === currQuantity ? "quantity-button quantity-active" : "quantity-button"}
                                    onClick={()=>setProductQuantity(currQuantity)}
                                    >{currQuantity}</button>
                                </>
                            )
                        })
                    } 
                </p>
            </div>
            <div className='button-group p-1 mt-5' onClick={() => addToCart(id, color, product,productquantity)}>
                    <NavLink to='/cart' className='btn btn-dark text-white w-100 mb-2 border border-dark'>ADD TO CART</NavLink>
                    <button className='btn btn-light text-dark w-100 mb-2 border border-2 border-dark'>ADD TO WISHLIST</button>
            </div>
        </div>
    </>
  )
}

export default ColorChart