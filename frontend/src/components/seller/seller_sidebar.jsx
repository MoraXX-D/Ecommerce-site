import { Link } from "react-router-dom";

const SellerSidebar = () => {
    return (
        <div className="col-md-3 col-12 mb-2 ">
                    <div className="col-md-8 col-12 mb-2">
                        <div className="list-group">
                            <Link to="/seller/dashboard" className="list-group-item list-group-item-action " aria-current="true">
                                Seller Dashboard
                            </Link>
                            <Link to="/seller/product" className="list-group-item list-group-item-action">Product</Link>
                            <Link to="/seller/orders" className="list-group-item list-group-item-action ">Orders</Link>
                            <Link to= "/seller/customers"className="list-group-item list-group-item-action " >Customer</Link>
                            <Link to= "/seller/reports"className="list-group-item list-group-item-action " >Report</Link>
                            <Link to= "/seller/profile/update"className="list-group-item list-group-item-action " >Profile</Link>
                            <Link to= "/seller/change-pass"className="list-group-item list-group-item-action " >Change Password</Link>
                            <Link to="#" className="list-group-item list-group-item-action text-danger">Log Out</Link>
                        </div>
                    </div>
                    
                </div>
    )
}

export default SellerSidebar;