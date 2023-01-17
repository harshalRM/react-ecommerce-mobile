import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark py-3 border border-2 border-light rounded-4">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3"><a className="text-white" href="/"><i className='fa fa-twitter'></i></a></li>
                        <li className="ms-3"><a className="text-white" href="/"><i className='fa fa-instagram'></i></a></li>
                        <li className="ms-3"><a className="text-white" href="/"><i className='fa fa-facebook'></i></a></li>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer