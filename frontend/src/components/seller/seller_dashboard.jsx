import { Link } from "react-router-dom";
import SellerSidebar from "./seller_sidebar";

const SellerDashboard = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Products</h4>
                                        <h4><a href="#">123</a></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total Order</h4>
                                        <h4><a href="#">123</a></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Total customer</h4>
                                        <h4><a href="#">5</a></h4>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SellerDashboard;