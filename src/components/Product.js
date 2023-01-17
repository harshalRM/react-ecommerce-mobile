import React, { useState } from 'react'
import DATA from '../DATA'
import { NavLink } from 'react-router-dom';


const Product = () => {

    const [data, setData] = useState(DATA);
    const filterResult = (catItem) => {
        const result = DATA.filter((currData)=>{
            return currData.category === catItem;
        });
        setData(result)
    }


    return (
        <>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2>PRODUCTS</h2>
                    </div>
                </div>
            </div>
            <div className='container-fluid mx-2' >
                <div className='row mt-5 mx-2'>
                    <div className='col-md-3  py-4 px-4'>
                        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 border border-2 border-dark" style={{ width: "280px" }}>
                             <button className='btn btn-outline-dark  mt-5 w-100 ' onClick={() => filterResult("Oppo")}><img src='images/oppologo.png' height='120px' width='150px' alt=''/> </button>
                        </div>
                        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 border border-2 border-dark" style={{ width: "280px" }}>
                             <button className='btn btn-outline-dark  mt-5 w-100 ' onClick={() => filterResult("Vivo")}><img src='images/vivologo.png' height='120px' width='150px' alt=''/> </button>
                        </div>
                        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 border border-2 border-dark" style={{ width: "280px" }}>
                             <button className='btn btn-outline-primary mt-5 w-100 ' onClick={() => filterResult("Apple")}><img src='images/applelogo.png' height='120px' width='150px' alt=''/> </button>
                        </div>
                        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 border border-2 border-dark" style={{ width: "280px" }}>
                             <button className='btn btn-outline-danger  mt-5 w-100 ' onClick={() => filterResult("Motorola")}><img src='images/motorolalogo.png' height='120px' width='150px' alt=''/> </button>
                        </div>
                        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 border border-2 border-dark" style={{ width: "280px" }}>
                             <button className='btn btn-outline-success  mt-5 w-100 ' onClick={() => filterResult("Samsung")}><img src='images/samsunglogo.png' height='120px' width='150px' alt=''/> </button>
                        </div>
                        <button className='btn btn-outline-dark  mt-5 w-100 ' onClick={() => setData(DATA)}>CLEAR FILTER</button>
                    </div>
                    <div className='col-md-9'>
                        <div className='row'>
                            {
                                data.map((value) => {
                                    const { id, title, image} = value
                                    return (
                                        <>
                                            <div className='col-md-4 mb-4'>
                                                <div className="card different__product__card py-4 my-4 text-black" key={id}>
                                                    <img src={image}
                                                        className="card-img-top" alt="iPhone" />
                                                    <div className="card-body">
                                                        <div className="text-center mt-1">
                                                            <h4 className="card-title mb-4">{title}</h4>
                                                           
                                                            <NavLink to={`/product/${id}`} className='btn btn-primary mx-2 p-2 fw-bold'>BUY NOW</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product