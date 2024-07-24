import Sidebar from "./sidebar";

const AddAddress = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <Sidebar />
                <div className="col-md-9 col-12 mb-2 m-0 p-0">
                    <div className="row border p-5">
                            <div>
                                <h1 className="text-center mt-4 ">Add Address</h1>
                            </div>
                            <hr className=" mt-3"/>

                            <form className=" m-0 p-1">
                                
                                <div className="mb-3">
                                    <label htmlFor="addAddress" className="form-label">New Address</label>
                                    <input type="text" className="form-control p-4" id="addAddress" />
                                </div>                                
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AddAddress;