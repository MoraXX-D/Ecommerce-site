import { useState, useEffect, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import SingleRelatedProduct from './singleRelatedProduct'
import { UserContext, CartContext } from '../context'

import '../App.css'


const ProductDetail = () => {
    const baseUrl = "http://127.0.0.1:8000/api";
    const [productData, setProductData] = useState([]);
    const [productImgs, setProductImgs] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);
    const { cartData, setCartData } = useContext(CartContext)

    let { product_id } = useParams()

    function checkProductInCart(product_id) {
        let previousCart = localStorage.getItem('cartData')
        let cartJson = JSON.parse(previousCart)
        if (cartJson != null) {
            cartJson.map((cart) => {
                if (cart != null && cart.product.id == product_id) {
                    setCartButtonClickStatus(true)
                }
            })
        }
    }


    const getData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setProductData(json);
            setProductImgs(json.product_imgs)
            // Use 'json.results' to correctly fetch paginated data
        } catch (error) {
            console.error(error.message);
        }
    };


    const getRelatedData = async (url) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setRelatedProducts(json.results)
            // Use 'json.results' to correctly fetch paginated data
        } catch (error) {
            console.error(error.message);
        }
    };

    // Fetch data once when the component mounts
    useEffect(() => {
        getData(baseUrl + '/product/' + product_id);
        getRelatedData(baseUrl + '/related-product/' + product_id)
        checkProductInCart(product_id)
    }, []);

    const cartAddButtonHandler = () => {
        let previousCartData = localStorage.getItem('cartData')
        let cartJson = JSON.parse(previousCartData)

        // if (!Array.isArray(cartJson)) {
        //     cartJson = [];
        // }

        const cartData = {
            'product': {
                'id': productData.id,
                'title': productData.title
            },
            'user': {
                'id': 1
            }
        }
        if (cartJson != null) {
            cartJson.push(cartData)
            let cartString = JSON.stringify(cartJson)
            localStorage.setItem('cartData', cartString)
            setCartData(cartJson)
        }
        else {
            let newCartList = []
            newCartList.push(cartData)
            let cartString = JSON.stringify(newCartList)
            localStorage.setItem('cartData', cartString)
        }
        setCartButtonClickStatus(true)
    }

    const cartRemoveButtonHandler = () => {
        let previousCart = localStorage.getItem('cartData')
        let cartJson = JSON.parse(previousCart)
        cartJson.map((cart, index) => {
            if (cart != null && cart.product.id == productData.id) {
                // delete cartJson[index]
                cartJson.splice(index, 1)
            }
        })
        let cartString = JSON.stringify(cartJson)
        localStorage.setItem('cartData', cartString);
        setCartButtonClickStatus(false)
        setCartData(cartJson)
    }

    // {/* Map through the productImgs array to display each image */ }
    // {
    //     productImgs.map((img, index) => (
    //         <img key={index} src={img.image} className="img-thumbnail" alt={`Product image ${index}`} />
    //     ))
    // }

    return (
        <>
            <section className="container mt-4">
                <div className="row">
                    <div className="col-4">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade">
                            <div className="carousel-inner">
                                {productImgs.map((img, index) => (
                                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                        <img src={img.image} className="d-block w-100" alt={`Product image ${index}`} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span className="carousel-control-next-icon " aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-8">
                        <h3>{productData.title}</h3>
                        <p>{productData.details}</p>
                        <h5 className="card-title">Price: {productData.price}</h5>
                        <p className="mt-3  ">
                            {!cartButtonClickStatus &&
                                <button title='Add to cart' className=" btn btn-secondary me-5" type='button' onClick={cartAddButtonHandler}>
                                    <i className="fa-solid fa-cart-plus fa-cart-plus me-2">
                                    </i>
                                    Add to Cart
                                </button>
                            }
                            {cartButtonClickStatus &&
                                <button title='Remove from cart' className=" btn btn-warning me-5" type='button' onClick={cartRemoveButtonHandler}>
                                    <i className="fa-solid fa-cart-plus fa-cart-plus me-2">
                                    </i>
                                    Remove from cart
                                </button>
                            }

                            <button title='Buy Now' className=" btn btn-primary  me-5"><i className="fa fa-cart-plus fa-bag-shopping  me-2"></i>Buy Now</button>
                            <button title='Add to wishlist' className=" btn btn-dark  me-5"><i className="fa fa-cart-plus fa-heart me-2"></i>Add to Wishlist</button>
                        </p>
                        {/* <div className="product-tags mt-3">
                            <hr />
                            <h5 className="mt-3">Tags</h5>
                            <p>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Poster</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Sticker</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Tshirt</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Bandana</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Bottle</Link>
                                <Link to="#" className='badge bg-primary text-white me-1 text-decoration-none'>Russian</Link>
                            </p>
                        </div> */}
                    </div>
                </div>

                {/* Related Product */}
                {/*   */}
                {/* End related Products */}
            </section>
        </>
    )
}

export default ProductDetail;