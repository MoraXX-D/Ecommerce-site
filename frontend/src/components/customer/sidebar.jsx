import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="col-md-3 col-12 mb-2 ">
                    <div className="col-md-8 col-12 mb-2">
                        <div className="list-group">
                            <Link to="/customer/dashboard" className="list-group-item list-group-item-action " aria-current="true">
                                Dashboard
                            </Link>
                            <Link to="/customer/orders" className="list-group-item list-group-item-action ">Orders</Link>
                            <Link to="/customer/wishlist" className="list-group-item list-group-item-action">Wishlist</Link>
                            <Link to= "/customer/profile"className="list-group-item list-group-item-action " >Profile</Link>
                            <Link to= "/customer/profile/password"className="list-group-item list-group-item-action " >Change Password</Link>
                            <Link to="/customer/address" className="list-group-item list-group-item-action">Addresses</Link>
                            <Link to="#" className="list-group-item list-group-item-action text-danger">Log Out</Link>
                        </div>
                    </div>
                    
                </div>
    )
}

export default Sidebar;