import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import xiao from '../assets/xiao.jpg'
import { Link } from 'react-router-dom'

const Categories = () => {
    return (
        <div className="container">
            {/*Popular categories */}
            <h3 className="mb-5">Polular Categories <a href="#" className="float-end btn  btn-secondary mt-2">View All Categories<i className="fa-solid fa-arrow-right-long"></i></a> </h3>
            <div className="row">
                {/*Product Box*/}
                <div className="col-12 col-md-12 mb-4  ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/category/poster/1">Posters</Link></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}

                {/*Product Box*/}
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Categories Title</a></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}

                {/*Product Box*/}
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Categories Title</a></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}

                {/*Product Box*/}
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Categories Title</a></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}
                {/*Product Box*/}
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Categories Title</a></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}{/*Product Box*/}
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Categories Title</a></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}{/*Product Box*/}
                <div className="col-12 col-md-6 mb-4 ">
                    <div className="card shadow">
                        <img src={xiao} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h4 className="card-title"><a href="#">Categories Title</a></h4>
                        </div>
                        <div className="card-footer d-flex justify-content-between ">
                            Total Orders: 2369
                        </div>
                    </div>
                </div>
                {/*Product Box End*/}



            </div>
            {/*End Popular categories*/}

            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item disabled">
                        <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                        <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default Categories;