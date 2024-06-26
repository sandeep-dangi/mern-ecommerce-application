import React, { useEffect, useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStarts from "react-rating-stars-component";

import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';

import watch from "../images/watch.jpg";
import Container from '../components/Container';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [productData,setproductData] = useState();
  

  const props = {width: 400, height: 600, zoomWidth: 600, img: "http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg"};
  const [orderedProduct, setorderedProduct] = useState(true);
  const { id } = useParams();
  console.log(id);

  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  //  if it is false it will not come , if it is true Write a review option is come on right sid
  
  const fun1=async()=>{
    try{
    const res = await fetch(`http://localhost:5000/api/product/${id}`,
    {method:"GET"} 
    // {header:{"Access-Control-Allow-Origin":"*"}}
  );
    // console.log(res);
    const data = await res.json();
    console.log(data);
    setproductData(data);

    }
    catch(error)
    {
      console.log(error);
    }
  }
  

  useEffect(()=> {
    fun1();
  },[id]);
  return (
    <>
       <Meta title={"Product Name"} />
       <BreadCrumb title="Product Name" />
       {/* we make it dynamic product name  */}

       <Container class1="main-product-wrapper py-5 home-wrapper-2">
          
                <div className="row">
                    <div className="col-6">
                      <div className="main-product-image">
                        <div>
                        <ReactImageZoom {...props} />
                        </div>
                      </div>

                      <div className="other-product-images d-flex flex-wrap gap-15">
                         <div><img src="http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg" className="img-fluid" alt="" /></div>
                         <div><img src="http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg" className="img-fluid" alt="" /></div>
                         <div><img src="http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg" className="img-fluid" alt="" /></div>
                         <div><img src="http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg" className="img-fluid" alt="" /></div>
                      </div>
                    </div>

                    <div className="col-6">

                       <div className="main-product-details">
                            <div className="border-bottom">   
                                <h3 className="title">
                                   Kids Headphones Bulk 10 pack Multi Colored For Students
                                   {/* {productData?.title} */}
                                </h3>
                            </div>
                            
                            <div className="border-bottom py-3">
                              <p className="price">$ 100</p>
                              <div className="d-flex align-items-center gap-10">
                                  <ReactStarts count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                   <p className="mb-0 t-review">( 2 Reviews )</p>
                              </div>
                              <a className="review-btn" href="#review">Write a Review</a>

                            </div>
                            {/* here className="border-bottom" below */}
                            <div className=" py-3">
                              <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Type :</h3>
                                 <p className="product-data">Watch</p>
                              </div>
                              <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Brand :</h3>
                                 <p className="product-data">Havels</p>
                              </div>
                              <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Category :</h3>
                                 <p className="product-data">Watch</p>
                              </div>
                              <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Tags :</h3>
                                 <p className="product-data">Watch</p>
                              </div>
                              <div className="d-flex gap-10 align-items-center my-2">
                                <h3 className="product-heading">Availability :</h3>
                                 <p className="product-data">In Stock</p>
                              </div>
                              <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                <h3 className="product-heading">Size :</h3>
                                 <div className="d-flex flex-wrap gap-15">
                                  <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                                  <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                                  <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                                  <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                                 </div>
                              </div>
                              <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                <h3 className="product-heading">Color :</h3>
                                 <Color />
                              </div>
                              <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                <h3 className="product-heading">Quantity :</h3>
                                 <div className="">
                                     <input type="number" name="" min={1} max={10} className="form-control" style={{ width: "70px" }} id="" />
                                 </div>
                                 <div className="d-flex align-items-center gap-30 ms-5">
                                      <button className="button border-0" type="submit">Add to Cart</button>
                                      <button className="button signup">Buy It Now</button>
                                
                                 </div>
                              </div>

                              <div className="d-flex align-items-center gap-15">
                                  <div>
                                    <a href="">
                                      <TbGitCompare className="fs-5 me-2" />Add to Compare</a>
                                  </div>
                                  <div>
                                    <a href="">
                                      <AiOutlineHeart className="fs-5 me-2" />Add to Wishlist</a>
                                  </div>
                              </div>


                              <div className="d-flex gap-10 flex-column my-3">
                                <h3 className="product-heading">Shipping & Returns :</h3>
                                 <p className="product-data">
                                     Free shipping and returns available on all orders!<br /> We shipping
                                     all US domestic orders within <b>5-10 bussiness days!</b>
                                 </p>
                              </div>
                              <div className="d-flex gap-10 align-items-center my-3">
                                <h3 className="product-heading">Product Link:</h3>
                                <a href="javascript:void(0);" onClick={()=> {copyToClipboard("http://www.zastavki.com/pictures/originals/2014/Brands____Beautiful_watches_065807_.jpg"
                                );
                                }}>
                                 Copy Product Link
                                </a>
                              </div>


                            </div>

                       </div>

                    </div>
                </div>
            
        </Container>

        <Container class1="description-wrapper py-5 home-wrapper-2">
          
            <div className="row">
              <div className="col-12"> 
                  <h4>Description</h4>
                  <div className="bg-white p-3">
                      
                      <p>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Expedita perferendis 
                        doloribus laudantium cum consequuntur possimus? Veritatis 
                        soluta cupiditate voluptatibus recusandae?
                      </p>
                  </div>
              </div>
            </div>
          
        </Container>

        <Container class1="reviews-wrapper home-wrapper-2">
          
            <div className="row">
              <div className="col-12">
                <h3 id="review">Reviews</h3>
                <div className="review-inner-wrapper">
                
                <div className="review-head d-flex justify-content-between align-items-end">

                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                        <ReactStarts count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                        <p className="mb-0">Based on 2 Reviews</p>
                    </div>

                  </div>

                  {
                    orderedProduct && (
                      <div>
                        <a className="text-dark text-decoration-underline" href="">Write a Review</a>
                      </div>
                  )}

                </div>

                <div className="review-form py-4">
                  {/* copy form from Contact.js here  */}
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                         <ReactStarts count={5} size={24} value={4} edit={true} activeColor="#ffd700" />
                      </div>
                      <div>
                        <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Comments"></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">Submit Review</button>
                      </div>

                    </form>

                </div>

                <div className="reviews mt-4">
                  <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Navdeep</h6>
                        <ReactStarts count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                      </div>
                  
                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing
                         elit. Consequatur dolorem, assumenda expedita
                         adipisci magni quo quisquam enim nostrum iure 
                         voluptate vitae a iste! Iste repellendus magnam 
                          praesentium minus quidem ullam.
                    </p>
                  </div>
                </div>
                  
                </div>

              </div>
            </div>
          
        </Container>

            {/* copy popular-wrapper from Home.js here */}
        <Container class1="popular-wrapper py-5 home-wrapper-2">
          
            <div className="row">

                <div className="col-12">
                     <h3 className="section-heading">Our Popular Products</h3>
                </div>

            </div>

               <div className="row">
                    <ProductCard />
                </div>
          
         
        </Container>

       


      
    </>
  );
};

export default SingleProduct;
