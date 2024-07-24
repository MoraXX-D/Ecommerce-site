import Sidebar from "./sidebar";

const UpdateProfile = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 col-12 mb-2 m-0 p-0">
                    <div className="row border p-5">
                            <div>
                                <h1 className="text-center mt-4 ">Update Profile</h1>
                            </div>
                            <hr className=" mt-3"/>

                            <form className=" m-0 p-1">
                                <div className="d-flex justify-content-between">
                                    <div className="mb-3 w-45">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input type="text" className="form-control" id="firstName" />
                                    </div>
                                    <div className="mb-3 w-45">
                                        <label htmlFor="lastname" className="form-label">Last Name</label>
                                        <input type="text" className="form-control" id="lastname" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="userName" className="form-label">User Name</label>
                                    <input type="text" className="form-control" id="userName" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="emailId" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="emailId" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="imageUpload" className="form-label">Image</label>
                                    <input type="file" className="form-control" id="imageUpload" name="image" accept="image/*"/>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateProfile;