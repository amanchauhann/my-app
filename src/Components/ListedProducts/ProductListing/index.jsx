import "./ProductListing.css";
import AllProducts from "./AllProducts";

const ProductListing = () => {
    return(
        <div className="ProductListing">
        <h2 className="headingtwo">All Products</h2>
        <div className="products-listed-card-container">
        <AllProducts />
        </div>
        </div>
    )
}

export default ProductListing