import Sidebar from "./sidebar";
import { Link } from "react-router-dom";

const AddressList = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 col-12">
                    <div className="row">
                    <div className="col-12">
                        <Link to = "/customer/add-address"className="btn btn-small float-end border-success mb-4 float-end text-success"><span><i className="fa fa-circle-plus"></i></span> Add Address</Link>
                        </div>
                    </div>
                    {/* Changed to row-cols-1 row-cols-md-3 g-3 to ensure 3 cards per row on medium screens and above */}
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        <div className="col">
                            {/* Added col class to handle column sizing within the row-cols system */}
                            <div className="card h-100 border p-3">
                                {/* Added h-100 to ensure all cards have the same height */}
                                <div className="card-body">
                                    <i className="fa-solid fa-check-circle fa-2x text-success mb-2"></i>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Porro fugit minus excepturi dolores corporis eius voluptate blanditiis qui quisquam.
                                        Earum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* Added col class to handle column sizing within the row-cols system */}
                            <div className="card h-100 border p-3">
                                {/* Added h-100 to ensure all cards have the same height */}
                                <div className="card-body">
                                    <Link className="badge bg-secondary text-decoration-none text-white">Mark as Default</Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Porro fugit minus excepturi dolores corporis eius voluptate blanditiis qui quisquam.
                                        Earum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* Added col class to handle column sizing within the row-cols system */}
                            <div className="card h-100 border p-3">
                                {/* Added h-100 to ensure all cards have the same height */}
                                <div className="card-body">
                                <Link className="badge bg-secondary text-decoration-none text-white">Mark as Default</Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Porro fugit minus excepturi dolores corporis eius voluptate blanditiis qui quisquam.
                                        Earum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* Added col class to handle column sizing within the row-cols system */}
                            <div className="card h-100 border p-3">
                                {/* Added h-100 to ensure all cards have the same height */}
                                <div className="card-body">
                                <Link className="badge bg-secondary text-decoration-none text-white">Mark as Default</Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Porro fugit minus excepturi dolores corporis eius voluptate blanditiis qui quisquam.
                                        Earum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* Added col class to handle column sizing within the row-cols system */}
                            <div className="card h-100 border p-3">
                                {/* Added h-100 to ensure all cards have the same height */}
                                <div className="card-body">
                                <Link className="badge bg-secondary text-decoration-none text-white">Mark as Default</Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Porro fugit minus excepturi dolores corporis eius voluptate blanditiis qui quisquam.
                                        Earum!</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            {/* Added col class to handle column sizing within the row-cols system */}
                            <div className="card h-100 border p-3">
                                {/* Added h-100 to ensure all cards have the same height */}
                                <div className="card-body">
                                <Link className="badge bg-secondary text-decoration-none text-white">Mark as Default</Link>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Porro fugit minus excepturi dolores corporis eius voluptate blanditiis qui quisquam.
                                        Earum!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default AddressList;