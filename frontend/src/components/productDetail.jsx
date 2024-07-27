import xiao from '../assets/xiao.jpg'
import { Link } from 'react-router-dom'
import SingleProduct from './singleProduct'
import { useEffect, useState } from 'react'


const ProductDetail = (props) => {

    const [Products, setProducts] = useState([]);
    const[totalResult,setTotalResult] = useState(0);

    useEffect(() => {
        async function getData() {
            const url = "http://127.0.0.1:8000/api/products/";
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }
                const json = await response.json();
                setProducts(json.data);
                setTotalResult(json.count)
            } catch (error) {
                console.error(error.message);
            }
        }

        getData();
    },[]);

    return (
        <>
            <section className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <img src={xiao} className="img-thumbnail" alt="" />
                    </div>
                    <div className="col-8">
                        <h3>Xiao Poster</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus expedita officia, illum libero quo similique est, saepe repudiandae esse minus quia soluta, maxime facere consequatur! Error ipsam ea dignissimos similique.</p>
                        <h5 className="card-title">Price: 500</h5>
                        <p className="mt-3  ">
                            <button title='Add to cart' className=" btn btn-secondary me-5"><i className="fa-solid fa-cart-plus fa-cart-plus me-2"></i>Add to Cart</button>
                            <button title='Buy Now' className=" btn btn-primary  me-5"><i className="fa fa-cart-plus fa-bag-shopping  me-2"></i>Buy Now</button>
                            <button title='Add to wishlist' className=" btn btn-dark  me-5"><i className="fa fa-cart-plus fa-heart me-2"></i>Add to Wishlist</button>
                        </p>
                        <div className="producttags mt-3">
                            <hr />
                            <h5 className="mt-3">Tags</h5>
                            <p>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Poster</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Sticker</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Tshirt</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Bandana</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Bottle</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Smart Phone</Link>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Related Product */}
                <div>
                    <h3 className="mt-5 mb-3">Related Products</h3>
                    <div id="relatedProductSlider" className="carousel slide carousel-dark bg-light  mt-4">
                        <div className="carousel-indicators ">
                            <button type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="0" className="active bg-dark border rounded wid" aria-current="true" aria-label="Slide 1" ></button>
                            <button className="bg-dark border rounded" type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button className="bg-dark border rounded" type="button" data-bs-target="#relatedProductSlider" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row mb-5">
                                    {
                                        Products.map((product) => <SingleProduct product={product} />)
                                    }
                                </div>
                            </div>
                            <div className="carousel-item mb-5">
                                <div className="row">
                                    {
                                        Products.map((product) => <SingleProduct product={product} />)
                                    }
                                </div>
                            </div>
                            <div className="carousel-item mb-5">
                                <div className="row">
                                    {
                                        Products.map((product) => <SingleProduct product={product} />)
                                    }
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev " type="button" data-bs-target="#relatedProductSlider" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon border rounded bg-dark " aria-hidden="true"></span>
                            <span className="visually-hidden ">Previous</span>
                        </button>
                        <button className="carousel-control-next " type="button" data-bs-target="#relatedProductSlider" data-bs-slide="next">
                            <span className="carousel-control-next-icon border rounded bg-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* End related Products */}
            </section>
        </>
    )
}

export default ProductDetail;