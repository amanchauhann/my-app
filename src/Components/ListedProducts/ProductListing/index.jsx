import "./ProductListing.css";
import AllProducts from "./AllProducts";
import { useContext } from "react";
import { ContextData } from "../../../Contexts/data-context";

const ProductListing = () => {
  const {sortHandler, userFilters} = useContext(ContextData)
  console.log("sort", userFilters.sort)

    return(
        <div className="ProductListing">
        <h2 className="headingtwo">All Products</h2>
        <div style={{textAlign: "right", margin: "10px"}}>
        <label for="cars">sort:</label>

<select onChange={sortHandler} id="cars" name="cars">
<option disabled selected>sort by price</option>
  <option value="low-to-high">low-to-high</option>
  <option value="high-to-low">high-to-low</option>
</select>
        </div>
        
        <div className="products-listed-card-container">
        <AllProducts />
        </div>
        </div>
    )
}

export default ProductListing