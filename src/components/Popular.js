import React from 'react'
import Phonesell from './Phonesell'

const Popular = () => {
    return (
        <>
            <div className='container'>
                <div className='row gy-3 '>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className="card my-4 py-4">
                            <div className="d-flex justify-content-between p-3">
                                <p className="lead mb-0">Today's Combo Offer</p>
                                <div
                                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                    style={{ width: "35px", height: "35px" }}>
                                    <p className="text-white mb-0 small">x4</p>
                                </div>
                            </div>
                            <img src="/images/oppo/oppo7.png" 
                                className="card-img-top" alt="Laptop" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">OPPO A76</h5>
                                    <h5 className="text-dark mb-0 fw-bolder">Rs 16490</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className="card my-4 py-4">
                            <div className="d-flex justify-content-between p-3">
                                <p className="lead mb-0">Today's Combo Offer</p>
                                <div
                                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                    style={{ width: "35px", height: "35px" }}>
                                    <p className="text-white mb-0 small">x4</p>
                                </div>
                            </div>
                            <img src="/images/samsung/samsung9.webp" 
                                className="card-img-top" alt="Laptop" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">Samsung Galaxy53</h5>
                                    <h5 className="text-dark mb-0 fw-bolder">Rs 31999</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className="card my-4 py-4">
                            <div className="d-flex justify-content-between p-3">
                                <p className="lead mb-0">Today's Combo Offer</p>
                                <div
                                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                    style={{ width: "35px", height: "35px" }}>
                                    <p className="text-white mb-0 small">x4</p>
                                </div>
                            </div>
                            <img src="images/apple/iphone4.png" 
                                className="card-img-top" alt="Laptop" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0">iPhone 14 Pro</h5>
                                    <h5 className="text-dark mb-0 fw-bolder">Rs 139900</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <div className="card my-4 py-4">
                            <div className="d-flex justify-content-between p-3">
                                <p className="lead mb-0">Today's Combo Offer</p>
                                <div
                                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                                    style={{ width: "35px", height: "35px" }}>
                                    <p className="text-white mb-0 small">x2</p>
                                </div>
                            </div>
                            <img src="images/vivo/vivo7.png" 
                                className="card-img-top" alt="Laptop" />
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3">
                                    <h5 className="mb-0 ">VIVO Y25 Pro</h5>
                                    <h5 className="text-dark mb-0 fw-bolder">Rs999</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='line'/>
            <Phonesell/>
        </>
    )
}

export default Popular