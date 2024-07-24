import { Link } from "react-router-dom";
import SellerSidebar from "./seller_sidebar";
import xiao from "../../assets/xiao.jpg"
import '../../App.css'


const SellerOrders = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar />
                <div className="col-md-9 col-12 mb-2">
                    <div className="row">
                        <div
                            className="table-responsive"
                        >
                            <table
                                className="table  table-bordered"
                            >
                                <thead>
                                    <tr>
                                        <th scope="col" className="w-20 text-center">#</th>
                                        <th scope="col" className="w-20 text-center align-middle">Products</th>
                                        <th scope="col" className="w-20 text-center">Price</th>
                                        <th scope="col" className="w-20 text-center">Status</th>
                                        <th scope="col" className="w-20 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">1</td>
                                        <td className="text-center">
                                            <Link to="#">
                                                <img
                                                    src={xiao}
                                                    alt="Img not found"
                                                    className="img-thumbnail w-25 d-block mx-auto"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <p>Xiao-Genshin-impact poster</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">500</td>
                                        <td className="text-center"><p className="text-success"><span><i class="fa-regular fa-circle-check"></i></span>Confirmed</p></td>
                                        <td className="text-center">
                                            <div class="dropdown">
                                                <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Approve</a></li>
                                                    <li><a class="dropdown-item" href="#">Sent</a></li>
                                                    <li><a class="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">1</td>
                                        <td className="text-center">
                                            <Link to="#">
                                                <img
                                                    src={xiao}
                                                    alt="Img not found"
                                                    className="img-thumbnail w-25 d-block mx-auto"
                                                />
                                            </Link>
                                            <Link to="#">
                                                <p>Xiao-Genshin-impact poster</p>
                                            </Link>
                                        </td>
                                        <td className="text-center">500</td>
                                        <td className="text-center"><p className="text-success"><span><i class="fa-regular fa-circle-check"></i></span>Confirmed</p></td>
                                        <td className="text-center">
                                            <div class="dropdown">
                                                <button class="btn btn-primary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Change Status
                                                </button>
                                                <ul class="dropdown-menu">
                                                    <li><a class="dropdown-item" href="#">Approve</a></li>
                                                    <li><a class="dropdown-item" href="#">Sent</a></li>
                                                    <li><a class="dropdown-item" href="#">Complete</a></li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>

                                    
                                    

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerOrders;