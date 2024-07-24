import Sidebar from "./sidebar";

const ChangePassword = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 col-12 mb-2 m-0 p-0">
                    <div className="row border p-5">
                            <div>
                                <h1 className="text-center mt-4 ">Change Password</h1>
                            </div>
                            <hr className=" mt-3"/>

                            <form className=" m-0 p-1">
                                
                                <div className="mb-3">
                                    <label htmlFor="newPassword" className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="newPassword" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>

                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;