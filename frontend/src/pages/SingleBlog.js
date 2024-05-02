import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi';

import blog from "../images/blog-1.jpg";
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title="Dynamic Blog Name" />
    
        {/* copy blog-wrapper from Blog.js  */}
        <Container class1="blog-wrapper home-wrapper-2 py-5">
        
          <div className="row">
              <div className="col-12">
                  <div className="single-blog-card">
                    <Link to="/blogs" className="d-flex align-items-center gap-10">
                        <HiOutlineArrowLeft className="fs=4" /> Go back to Blogs
                    </Link>
                    <h3 className="title">
                        A Beautiful Sunday Morning Renaissance
                    </h3>
                    <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                    <p>
                        A serene Sunday morning
                        ushers in a rebirth of joy and tranquility,
                        welcoming a new day's embrace.
                        Experience the serene awakening of
                        a new day with our Sunday Morning Renaissance collection.
                        Embrace the tranquility of dawn with elegant designs and vibrant hues.
                        Let each piece evoke the essence of a fresh start,
                        infusing your day with beauty and vitality.
                        Explore now and embrace the enchantment!
                    </p>
                   </div>
              </div>

          </div>
       
      </Container>

    </>
  );
};

export default SingleBlog;
