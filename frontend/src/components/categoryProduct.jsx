import SingleProduct from "./singleProduct";
const CategoryProducts = () => {
  return (
    <>
      <div className="container">
        {/*Latest Product*/}
        <h3 className=" mb-5">Posters </h3>
        
        <div className="row mb-4">
        <SingleProduct title = "Xiao"/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        </div>

        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
              <span class="page-link">Previous</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">2</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default CategoryProducts;
