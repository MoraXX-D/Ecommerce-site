import SingleProduct from "./singleProduct";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const baseUrl = "http://127.0.0.1:8000/api";
  const [products, setProducts] = useState([]); // Initialize with an empty array
  const [totalResult, setTotalResult] = useState(0);

  const getData = async (url = baseUrl + '/products') => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setProducts(json.results); // Use 'json.results' to correctly fetch paginated data
      setTotalResult(json.count); // Correctly set the total number of results
    } catch (error) {
      console.error(error.message);
    }
  };

  // Fetch data once when the component mounts
  useEffect(() => {
    getData();
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  const changeUrl = (url) => {
    getData(url); // Correctly use the URL passed to the function
  };

  let links = [];
  const itemsPerPage = 1; // Match the backend pagination setup
  const totalPages = Math.ceil(totalResult / itemsPerPage); // Calculate total pages

  for (let i = 1; i <= totalPages; i++) {
    links.push(
      <li key={i} className="page-item">
        <Link
          className="page-link"
          onClick={() => changeUrl(baseUrl + `/products/?page=${i}`)}
          to={`/products/?page=${i}`}
        >
          {i}
        </Link>
      </li>
    );
  }

  return (
    <div>
      {/*Latest Product*/}
      <h3 className="mb-4 mt-4">All Products</h3>

      <div className="row mb-4">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>

      <nav aria-label="...">
        <ul className="pagination pagination-lg">{links}</ul>
      </nav>
    </div>
  );
};

export default AllProducts;
