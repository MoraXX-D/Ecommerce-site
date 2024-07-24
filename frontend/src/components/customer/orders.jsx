import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
import xiao from "../../assets/xiao.jpg"
import '../../App.css'


const Orders = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
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
                                        <th scope="col" className="w-20 text-center">Track</th>
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
                                        <td className="text-center"><button className="btn btn-xm border bg-primary text-white">Track</button></td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">3</td>
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
                                        <td className="text-center"><p><span><i class="fa-solid fa-spinner fa-spin"></i></span>Processing</p></td>
                                        <td className="text-center"><button className="btn btn-xm border bg-primary text-white disabled">Track</button></td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">3</td>
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
                                        <td className="text-center"><button className="btn btn-xm border bg-primary text-white">Track</button></td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">4</td>
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
                                        <td className="text-center"><p className="text-danger"><span><i class="fa-regular fa-circle-xmark"></i></span>Canceled</p></td>
                                        <td className="text-center"><button className="btn btn-xm border bg-primary text-white disabled">Track</button></td>
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

export default Orders;