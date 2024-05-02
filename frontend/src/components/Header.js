import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

import compare from "../images/compare.svg";
import wishlist from "../images/wishlist.svg";
import user from "../images/user.svg";
import cart from "../images/cart.svg";
import menu from "../images/menu.svg";

const Header = () => {
  return (
    <>
        {/* header.header-top-strip
            .container-xxl    
             .row
             padding py-3 */}
        <header className="header-top-strip py-3">
          <div className="container-xxl">
            <div className="row">
              <div className="col-6">
                 <p className="text-white mb-0">
                 Free Shipping Over 1000 & Free Returns
                 </p>
              </div>
              <div className="col-6">
                <p className="text-end text-white">    
                  Hotline: <a className="text-white" href="tel:+91 9993705500">+91 9993705500</a> 
                </p>
              </div>
            </div>
          </div>
        </header>

        <header className="header-upper py-3">
            <div className="container-xxl">
             <div className="row align-items-center">
              <div className="col-2">     
                  <h2>
                    <Link className="text-white">Dev Corner</Link>
                    {/* this link means a tag..... and a tag donot take color from our parents */}
                  </h2>
              </div>
              

              <div className="col-5">

                <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2" 
                  placeholder="Search Product Here..." 
                  aria-label="Search Product Here..." 
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                {/* @example.com */}
                  <BsSearch className="fs-6" />
                </span>
                </div>
                
              </div>

              <div className="col-5">
                  <div className="header-upper-links d-flex align-items-center justify-content-between">
                        
                        <div>
                          <Link to="/compare-product" className="d-flex align-items-center gap-10 text-white">
                            <img src={compare} alt="compare" />
                            <p className="mb-0">
                              Compare <br /> Products 
                            </p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/wishlist" className="d-flex align-items-center gap-10 text-white">
                              <img src={wishlist} alt="wishlist" />
                              <p className="mb-0">
                                  Favourite <br /> wishlist 
                              </p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/login" className="d-flex align-items-center gap-10 text-white">
                          <img src={user} alt="user" />
                            <p className="mb-0">
                              Login <br /> My Account
                            </p>
                          </Link >
                        </div>
                        <div>
                          <Link to="/cart" className="d-flex align-items-center gap-10 text-white">
                             <img src={cart} alt="cart" />
                              <div className="d-flex flex-column gap-10">
                                    <span className="badge bg-white text-dark">0</span>
                                    <p className="mb-0">$ 500</p>
                              </div>
                          </Link>
                        </div>

                  </div>
              </div>


              </div>
            </div>
        </header>

        <header className="header-bottom py-3">
             <div className="container-xxl">
                  <div className="row">
                      <div className="col-12">
                          <div className="menu-bottom d-flex align-items-center gap-30">

                              {/* i am going to create 2nd part now */}
                               <div>
                                  {/* this is dropdown code */}
                                  <div className="dropdown">
                                  <button
                                       className="btn btn-secondary dropdown-toggle  bg-transparent border-0  gap-15  d-flex align-items-center"
                                       type="button"
                                       id="dropdownMenuButton1"
                                       data-bs-toggle="dropdown" 
                                       aria-expanded="false"
                                      >
                                     <img src={menu} alt="" />
                                     <span className="me-5 d-inline-block">Shop Categories</span>
                                  </button>
                                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                       <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                       <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                       <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                   </ul>
                                </div>

                               </div>
                               <div className="menu-links">
                                <div className="d-flex align-items-center gap-15">
                                  <NavLink to="/">Home</NavLink>
                                  <NavLink to="/product">Our Store</NavLink>
                                  <NavLink to="/blogs">Blogs</NavLink>
                                  <NavLink to="/contact">Contact</NavLink>
                                </div>
                               </div>

                          </div>
                      </div>
                  </div>
             </div>
        </header>
    </>
  )
}

export default Header;


// className
// text-end - to text align  right
// text-start - used  for text align left
// py     - padding from top & bottom
// px     - padding from left & right
// ps     - padding from left
// pe     - padding from end

// mb     - margin bottom
// pb     - padding bottom
// pd     - padding top
// md     - margin top

//col-2   for logo
//col-5   for search bar
//col-5   for our links

// p-3     padding from top bottom left right
// fs      font-size    ex- fs-4 kr denge to search wala size bda ho jayega...isliye fs-6