//Packages
import {Link} from 'react-router-dom'
//Assets

import xiao from '../assets/xiao.jpg'
const SingleProduct = (props) => {
    return (
        <>
            <div className="col-12 col-md-4 mb-4 d-flex">
                <div className="card shadow">
                    <Link to="/product/poster-xiao/123"><img src={xiao} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <h6 className="card-title text-muted" >Price: <span>Rs. 500</span></h6>
                    </div>
                    <div className="card-footer d-flex justify-content-between ">
                        <button title='Add to cart' className="btn btn-secondary btn-sm"><i className="fa-solid fa-cart-plus fa-cart-plus"></i></button>
                        <button title='Add to wishlist' className="btn btn-danger btn-sm"><i className="fa fa-cart-plus fa-heart"></i></button>
                    </div>
                </div>
            </div>
        </>
    )
}



export default SingleProduct;
