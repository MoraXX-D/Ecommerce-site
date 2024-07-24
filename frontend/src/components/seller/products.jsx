import { Link } from "react-router-dom";
import SellerSidebar from "./seller_sidebar";

const SellerProducts = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar />
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div className="col-12">
                            <Link to="/seller/add-product" className="btn btn-small float-end border-primary mb-4 float-end text-primary"><span><i className="fa fa-circle-plus"></i></span> Add Product</Link>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-bordered ">
                            <thead>
                                <tr className="text-center">
                                    <th>#</th>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className=" text-center align-item-center">
                                <tr>
                                    <td>1</td>
                                    <td>Xiao Poster</td>
                                    <td>500</td>
                                    <td>Published</td>
                                    <td>
                                        <a className="btn btn-sm btn-primary me-1" href="#">View</a>
                                        <a className="btn btn-sm btn-secondary me-1" href="#">Edit</a>
                                        <a className="btn btn-sm btn-danger" href="#">Delete</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerProducts;