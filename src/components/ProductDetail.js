import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../DATA'
import {MdScreenshot} from 'react-icons/md'
import {BsGlobe} from 'react-icons/bs'
import {BsFillSdCardFill} from 'react-icons/bs'
import {FaDatabase} from 'react-icons/fa'
import {BsFillCameraFill} from 'react-icons/bs'
import {BsBatteryFull} from 'react-icons/bs'
import {MdCameraFront} from 'react-icons/md'
import ColorChart from './ColorChart'


const ProductDetail = () => {
  const proid = useParams()
  // eslint-disable-next-line
  const proDetail = DATA.filter((x) => x.id == proid.id)
  const product = proDetail[0];

  return (
    <>
      <div className='container my-4 py-4'>
        <div className='row'>
          <div className='col-12'>
            <div className='card product__card border border-4 border-primary rounded-5' key={product.id}>
              <div className='row  d-flex justify-content-center align-items-center'>
                <div className='col-md-6 col-sm-6'>
                  <h4 className='product__price text-center display-5 fw-bold'>Rs {product.price}</h4>
                  <div className='text-center m-4'>
                    <img src={product.image} height='500px' alt="Laptop" />
                  </div>
                </div>
                <div className='product__description col-md-6 p-4'>
                  <h2 className='product__title mb-4'>{product.title}</h2>
                  <ColorChart product={product} id={product.id}/>
                
                  <div className='feature my-4 py-4 d-flex flex-column'>
                    <h4>Key Features</h4>
                    <ul className='p-1 my-2'>
                      <li><span className='me-2'><MdScreenshot size={28}/></span>{product.screen} inch Super Retina XDR display that's sharp, vibrant and bright</li>
                      <li><span className='me-2'><BsGlobe size={28}/></span>{product.os}</li>
                      <li><span className='me-2'><BsFillSdCardFill size={28}/></span>{product.ram} RAM</li>
                      <li><span className='me-2'><FaDatabase size={28}/></span>{product.storage} storage</li>
                      <li><span className='me-2'><MdCameraFront size={28}/></span>{product.frontcamera} front camera</li>
                      <li><span className='me-2'><BsFillCameraFill size={28}/></span>{product.rearcamera} rear camera</li>
                      <li><span className='me-2'><BsBatteryFull size={28}/></span>{product.battery} full battery life</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail