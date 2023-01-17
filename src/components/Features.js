import React from 'react'
import {MdLocalShipping} from 'react-icons/md'
import {RiSecurePaymentLine} from 'react-icons/ri'
import Popular from './Popular'

const Features = () => {
    return (
        <>
            <div className="container px-4 py-5">
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                    <div className="d-flex flex-column align-items-start gap-2">
                        <h3 className="fw-bold">Why use Mobile World</h3>
                        <p className="text-muted">Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                     
                    </div>
                    <div className="row row-cols-1 row-cols-sm-2 g-4">
                        <div className="d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-start text-dark  bg-gradient fs-4 rounded-3">
                                <MdLocalShipping/>
                            </div>
                            <h4 className="fw-semibold mb-0">FAST SHIPPING</h4>
                            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                        <div className="feature-icon-small d-inline-flex align-items-center justify-content-start text-dark  bg-gradient fs-4 rounded-3">
                                <RiSecurePaymentLine/>
                            </div>
                            <h4 className="fw-semibold mb-0">SECURE PAYMENTS</h4>
                            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-start text-dark bg-gradient fs-4 rounded-3">
                            <MdLocalShipping/>
                            </div>
                            <h4 className="fw-semibold mb-0">QUALITY PRODUCTS</h4>
                            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>

                        <div className="d-flex flex-column gap-2">
                            <div className="feature-icon-small d-inline-flex align-items-center justify-content-start text-dark bg-gradient fs-4 rounded-3">
                            <MdLocalShipping/>
                            </div>
                            <h4 className="fw-semibold mb-0">GOOD SERVICES</h4>
                            <p className="text-muted">Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='line'/>
            <Popular/>
        </>
    )
}

export default Features