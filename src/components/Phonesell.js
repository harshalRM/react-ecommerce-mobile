import React from 'react'

const Phonesell = () => {
    return (
        <>
            <div className=' sell container my-4 py-4  border border-2 border-dark rounded-4' style={{backgroundColor: "#eee"}}>
            <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
                <div class="d-flex flex-column align-items-start gap-2">
                    <img src='images/sell.jpg' className='img-fluid' alt='' />
                </div>
                <div class="row row-cols-2 row-cols-sm-2 g-4">
                    <div class="d-flex flex-column gap-2 w-100">
                        <h1 class="fw-bold mb-2">WANT TO SELL YOUR PHONE?</h1>
                        <p class="lead fw-semibold text-justify mb-5">Have you got bored by using the same mobile for years and wants a new phone but budget bro doesn't allow you , and you feel like to destroy your phone. <b className='text-danger'>HANG ONNNNNNN!!</b>. You can sell your phone to us and get a  good deal for it.If you want to sell your phone, click the below button to fill the form and read all instructions carefully.</p>
                        <button className='btn btn-outline-danger mb-5'>READ MORE</button>
                    </div>
                </div>
            </div>
            </div>
            <hr className='line'/>
        </>
    )
}

export default Phonesell