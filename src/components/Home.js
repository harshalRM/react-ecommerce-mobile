import React from 'react'
import Features from './Features'

const Home = () => {
    return (
        <>
            <div className='container-fluid py-2'>
                <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className=""></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                            <img src="images/back5.jpg" className="d-block w-100" height='800px' alt="..." />
                            <div className="container">
                                <div className="carousel-caption text-start">
                                    <h1>Welcome To Mobile World</h1>
                                    <p>Shop with wide range of phones</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item active ">
                            {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                            <img src="images/back6.webp" className="d-block w-100" height='800px' alt="..." />
                            <div className="container">
                                <div className="carousel-caption">
                                    <h1>Different Brands</h1>
                                    <p>Explore with different brands of mobile phones according to your need.</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg> */}
                            <img src="images/back7.jpg" className="d-block w-100" height='800px' alt="..." />
                            <div className="container">
                                <div className="carousel-caption text-end">
                                    <h1>Happy New Year</h1>
                                    <p>Get 20% discount on all phones as a new year gift</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <hr className='line'/>
            <Features/>
        </>
    )
}

export default Home