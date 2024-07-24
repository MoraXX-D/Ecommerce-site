import SellerSidebar from "./seller_sidebar";

const AddProduct = () => {
    return (
        <div className="container mt-4">
            <div className="row">
                <SellerSidebar />
                <div className="col-md-9 col-12 mb-2 m-0 p-0">
                    <div className="row border p-5">
                            <div>
                                <h1 className="text-center mt-4 ">Add Product</h1>
                            </div>
                            <hr className=" mt-3"/>

                            <form className=" m-0 p-1">
                                
                                <div className="mb-3">
                                    <label htmlFor="addCategory" className="form-label">Category</label>
                                    <select className="form-control" id="addCategory">
                                        <option >Wearables</option>
                                        <option >Electronics</option>
                                        <option >Decorative</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="addProduct" className="form-label">Product Name</label>
                                    <input type="text" className="form-control" id="addProduct" />
                                </div> 
                                <div className="mb-3">
                                    <label htmlFor="addDescription" className="form-label">Product Description</label>
                                    <textarea type="text" className="form-control" id="addDescription" rows={8} />
                                </div> 
                                <div className="mb-3">
                                    <label htmlFor="addImage" className="form-label">Product Image</label>
                                    <input type="file" className="form-control" id="" name="image" accept="image/*"/>
                                </div>                               
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;