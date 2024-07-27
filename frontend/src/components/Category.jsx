import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import xiao from '../assets/xiao.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";

const Categories = () => {

    const baseUrl = "http://127.0.0.1:8000/api"
    const [Categories, setCategories] = useState([]);
    const [totalResult, setTotalResult] = useState(0);

    const getData = async (url = baseUrl + '/categories') => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setCategories(json.data);
            setTotalResult(json.count);
        } catch (error) {
            console.error(error.message);
        }
    };

    // Call getData once when the component mounts
    useEffect(() => {
        getData();
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    const changeUrl = (baseUrl) => {
        getData(baseUrl)
    }


    let links = [];
    let limit = 1
    let totalLinks = totalResult/limit
    for (let i = 1; i <= totalLinks; i++) {
        links.push(<li key={i} className="page-item"><Link className="page-link" onClick={() => changeUrl(baseUrl + `/categories/?page=${i}`)}
            to={`/categories/?page=${i}`}>{i}</Link></li>)
    }


    return (
        <div>
            {/*Popular categories */}
            <h3 className="mb-5">Polular Categories <Link to="#" className="float-end btn  btn-secondary mt-2">View All Categories<i className="fa-solid fa-arrow-right-long"></i></Link> </h3>
            <div className="row">
                {
                    Categories.map((category) =>
                        <div className="col-12 col-md-4 mb-4 ">
                            <div className="card shadow">
                                <img src={xiao} className="card-img-top" alt="..." />
                                <div className="card-body pb-1">
                                    <h4 className="card-title"><Link to={`/category/${category.title}/${category.id}`}>{category.title}</Link></h4>
                                </div>
                                <div className='card-body border pt-1 pb-1'>
                                    <h5>Description:</h5>
                                    <p><span>{category.details}</span></p>
                                </div>
                                <div className="card-footer d-flex justify-content-between pt-1">
                                    Total Orders: 2369
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {/*End Popular categories*/}

            <nav aria-label="...">
                <ul className="pagination pagination-lg">
                    {links}
                </ul>
            </nav>
        </div>
    )
};

export default Categories;