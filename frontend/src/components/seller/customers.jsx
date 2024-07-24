import { Link } from "react-router-dom";
import SellerSidebar from "./seller_sidebar";
import xiao from "../../assets/xiao.jpg"
import '../../App.css'


const Customers = () => {
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
                                        <th scope="col" className="w-20 text-center align-middle">Name</th>
                                        <th scope="col" className="w-20 text-center">Email</th>
                                        <th scope="col" className="w-20 text-center">Phone No.</th>
                                        <th scope="col" className="w-20 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">1</td>
                                        <td className="text-center">
                                            John Doe
                                        </td>
                                        <td className="text-center">jhon@gmail.com</td>
                                        <td className="text-center">9965845236</td>
                                        <td className="text-center">
                                            <button className="btn btn-primary btn-sm me-1">All orders</button>
                                            <button className="btn btn-danger btn-sm">Decline</button>
                                        </td>
                                    </tr>
                                    <tr className="align-middle">
                                        <td scope="row" className="text-center">2</td>
                                        <td className="text-center">
                                            Zonghli
                                        </td>
                                        <td className="text-center">rex@gmail.com</td>
                                        <td className="text-center">862556558</td>
                                        <td className="text-center">
                                            <button className="btn btn-primary btn-sm me-1">All orders</button>
                                            <button className="btn btn-danger btn-sm">Decline</button>
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

export default Customers;