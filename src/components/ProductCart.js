
import React from 'react'
import { useCartContext } from './context/CartContext'
import { NavLink } from 'react-router-dom'
import {FaTrash} from 'react-icons/fa'

const ProductCart = () => {
  const { cart } = useCartContext()
  const { removeItem } = useCartContext()
  return (
    <>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
            <div className='col-12'>
            {
              cart.map((item) => {
                return (
                  <>
                  <div className='container'>
                      <div key={item.id}>
                          <FaTrash className="close-icon"  onClick={() => removeItem(item.id)}/>
                      </div>
                  </div>
                    <div className='card product__cart mb-5 border border-3 border-dark rounded-4'>
                      <div className='card-body p-4'>
                        <div className='row align-items-center'>
                          <div className='col-md-2'>
                            <img src={item.image} alt='' className='img-fluid' />
                          </div>
                          <div class="col-md-2 d-flex justify-content-center">
                            <div>
                              <p class="small text-muted mb-4 pb-2">Name</p>
                              <p class="lead fw-normal mb-0">{item.title}</p>
                            </div>
                          </div>
                          <div class="col-md-2 d-flex justify-content-center">
                            <div>
                              <p class="small text-muted mb-4 pb-2">Color</p>
                              <p class="lead fw-normal mb-0"><i class="fa fa-circle me-2" style={{ color: `${item.color}` }}></i>
                                {item.color}</p>
                            </div>
                          </div>
                          <div class="col-md-2 d-flex justify-content-center">
                            <div>
                              <p class="small text-muted mb-4 pb-2">Quantity</p>
                              <p class="lead fw-normal mb-0">{item.productquantity}</p>
                            </div>
                          </div>
                          <div class="col-md-2 d-flex justify-content-center">
                            <div>
                              <p class="small text-muted mb-4 pb-2">Price</p>
                              <p class="lead fw-normal mb-0">Rs {item.price}</p>
                            </div>
                          </div>
                          <div class="col-md-2 d-flex justify-content-center">
                            <div>
                              <p class="small text-muted mb-4 pb-2">Total</p>
                              <p class="lead fw-normal mb-0">Rs {item.rate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr/>
                  </>
                )
              })
            }
            </div>
        </div>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-12 text-center'>
                  <NavLink to='/checkout' className='btn btn-outline-primary'>Proceed To Checkout</NavLink>
              </div>
          </div>
      </div>
    </>
  )
}

export default ProductCart