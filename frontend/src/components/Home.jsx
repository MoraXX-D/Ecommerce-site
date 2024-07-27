import {Link} from 'react-router-dom'

import xiao from '../assets/xiao.jpg'
import AllProducts from './allProduct';
import SingleProduct from './singleProduct';
import {} from './allProduct'
import { useEffect, useState } from "react";


const Home = () => {
    const products = [
        {
            'title' : 'H&M Hoodie',
            'price' : '799'
        },
        {
            'title' : 'Samsung Z-fold 6',
            'price' : '1,65,999'
        },
        {
            'title' : 'Vase',
            'price' : '1799'
        },
        {
            'title' : 'Nike Air Jordan Dior',
            'price' : '13,99,999'
        },
        {
            'title' : 'Samsung Galaxy tab s9',
            'price' : '55,999'
        },
        {
            'title' : 'Samsung Galaxy Book 4 Edge',
            'price' : '1,29,000'
        }
    ]
    return (

        <main className="mt-4 ">
            <div>
                {/*Latest Product*/}
                <h3 className="mb-5">New Arivals <Link to="products" className="float-end btn  btn-secondary mt-2">View All Products <i className="fa-solid fa-arrow-right-long"></i></Link> </h3>
                <div className="row mb-4">
                {
                    products.map((product) => <SingleProduct product={product} />)
                }
                </div>
                {/*End latest Product */}


                {/*Popular categories */}
                <h3 className="mb-5">Polular Categories <a href="#" className="float-end btn  btn-secondary mt-2">View All Categories<i className="fa-solid fa-arrow-right-long"></i></a> </h3>
                <div className="row">
                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                Total Orders: 2369
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                Total Orders: 2369
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                Total Orders: 2369
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                Total Orders: 2369
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}



                </div>
                {/*End Popular categories*/}

                {/*Latest Product*/}
                <h3 className="mb-5">Popular Products <a href="#" className="float-end btn  btn-secondary mt-2">View All Products <i className="fa-solid fa-arrow-right-long"></i></a> </h3>
                <div className="row mb-4">
                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">"Xiao" Genshin Impact</h4>
                                <h6 className="card-title text-muted" >Price: <span>Rs. 500</span></h6>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                <button title='Add to cart' className="btn btn-secondary btn-sm"><i className="fa-solid fa-cart-plus fa-cart-plus"></i></button>
                                <button title='Add to wishlist' className="btn btn-danger btn-sm"><i className="fa fa-cart-plus fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">"Xiao" Genshin Impact</h4>
                                <h6 className="card-title text-muted" >Price: <span>Rs. 500</span></h6>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                <button title='Add to cart' className="btn btn-secondary btn-sm"><i className="fa-solid fa-cart-plus fa-cart-plus"></i></button>
                                <button title='Add to wishlist' className="btn btn-danger btn-sm"><i className="fa fa-cart-plus fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">"Xiao" Genshin Impact</h4>
                                <h6 className="card-title text-muted" >Price: <span>Rs. 500</span></h6>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                <button title='Add to cart' className="btn btn-secondary btn-sm"><i className="fa-solid fa-cart-plus fa-cart-plus"></i></button>
                                <button title='Add to wishlist' className="btn btn-danger btn-sm"><i className="fa fa-cart-plus fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 d-flex">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">"Xiao" Genshin Impact</h4>
                                <h6 className="card-title text-muted" >Price: <span>Rs. 500</span></h6>
                            </div>
                            <div className="card-footer d-flex justify-content-between ">
                                <button title='Add to cart' className="btn btn-secondary btn-sm"><i className="fa-solid fa-cart-plus fa-cart-plus"></i></button>
                                <button title='Add to wishlist' className="btn btn-danger btn-sm"><i className="fa fa-cart-plus fa-heart"></i></button>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                </div>
                {/*End of popular product */}


                {/*Popular categories */}
                <h3 className="mb-5">Trusted Sellers <a href="#" className="float-end btn  btn-secondary mt-2">View All Sellers<i className="fa-solid fa-arrow-right-long"></i></a> </h3>
                <div className="row">
                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Ram Bilas Infotech</h4>
                            </div>
                            <div className="card-footer d-flex  ">
                                Categories: <a href="#"> Python</a>, <a href="#">php</a>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex  ">
                                Categories: <a href="#">ReactJs</a>,<a href="#">VueJs</a>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex  ">
                                Categories: <a href="#">flask</a>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}

                    {/*Product Box*/}
                    <div className="col-12 col-md-3 mb-4 ">
                        <div className="card shadow">
                            <img src={xiao} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h4 className="card-title">Poster</h4>
                            </div>
                            <div className="card-footer d-flex  ">
                                Categories:<a href="#"> niggeros</a>
                            </div>
                        </div>
                    </div>
                    {/*Product Box End*/}



                </div>
                {/*End Popular categories*/}

                {/*Rating and reviews */}

                <div id="carouselExampleIndicators" className="carousel slide my-5 border bg-dark text-white p-5" >
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className="fa fa-star text-warning">
                                    </i> <cite title="Source Title">Customer Name</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                        <div className="carousel-item">
                            <figure className="text-center">
                                <blockquote className="blockquote">
                                    <p>A well-known quote, contained in a blockquote element.</p>
                                </blockquote>
                                <figcaption className="blockquote-footer">
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star text-warning"></i>
                                    <i className="fa fa-star-half text-warning"></i> <cite title="Source Title">Source Title</cite>
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>





            </div>
        </main>
    )
}


export default Home;