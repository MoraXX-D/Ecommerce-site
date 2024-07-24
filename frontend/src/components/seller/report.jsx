import { Link } from "react-router-dom";
import SellerSidebar from "./seller_sidebar";

const Reports = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar/>
                <div className="col-md-9 col-12 mb-2">
                        <div className="row">
                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Daily Report</h4>
                                        <h4><Link to="#" className="btn btn-primary btn-sm">View</Link></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Monthly Report</h4>
                                        <h4><Link to="#" className="btn btn-primary btn-sm">View</Link></h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mb-2">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4>Yearly Report</h4>
                                        <h4><Link to="#" className="btn btn-primary btn-sm">View</Link></h4>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Reports;