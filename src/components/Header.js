import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import Wishlist from './Wishlist'
// import Cart from './Cart'

const Header = () => {
    return (
        <>
            {/* <!--Main Navigation--> */}
            <header>
                {/* <!-- Jumbotron --> */}
                <div className="p-3 text-center bg-white border-bottom">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left elements --> */}
                            <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
                                <a href="#!" className="ms-md-2">
                                    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="35" alt='' />
                                </a>
                            </div>
                            {/* <!-- Left elements --> */}

                            {/* <!-- Center elements --> */}
                            <div className="col-md-4">
                                <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
                                    <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" />
                                    <span className="input-group-text border-0 d-none d-lg-flex"><i className="fa fa-search"></i></span>
                                </form>
                            </div>
                            {/* <!-- Center elements --> */}

                            {/* <!-- Right elements --> */}
                            <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
                                <div className="d-flex">
                                    {/* <!-- Cart --> */}
                                    <Cart />
                                    <Wishlist/>

                                </div>
                            </div>
                            {/* <!-- Right elements --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- Jumbotron --> */}

                {/* <!-- Navbar --> */}
                <nav className="navbar navbar-expand-lg bg-white">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto py-2">
        <li className="nav-item px-4 my-2">
          <Link to='/' className="nav-link fw-bold fs-4 text-dark" aria-current="page">Home</Link>
        </li>
        <li className="nav-item px-4 my-2">
          <Link to='/product' className="nav-link fw-bold fs-4 text-dark" aria-current="page">Product</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<hr/>
                {/* <!-- Navbar --> */}


            </header>
            {/* <!--Main Navigation--> */}


        </>
    )
}

export default Header