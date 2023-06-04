import Aside from "../../Components/ListedProducts/Aside";
import ProductListing from "../../Components/ListedProducts/ProductListing";
import "./ListedProducts.css";

const ListedProducts = () => {
    return (
        <div className="listed-products">
            <Aside />
            <ProductListing />
        </div>
    )
}

export default ListedProducts
