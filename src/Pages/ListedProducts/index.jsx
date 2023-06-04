import { useEffect, useState } from "react";
import Aside from "../../Components/ListedProducts/Aside";
import ProductListing from "../../Components/ListedProducts/ProductListing";
import "./ListedProducts.css";

const ListedProducts = () => {
    const [showfilters, setShowFilters] = useState(false)
    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth < 620) {
                setShowFilters(false);
            } else {
                setShowFilters(true);
            }
        };

        window.addEventListener("resize", handleWindowResize);
        handleWindowResize(); // Initial check on component mount

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleToggleFilters = () => {
        setShowFilters(!showfilters);
    };
    return (
        <div className="listed-products">
            {window.innerWidth < 620 && (
                <button className="show_filter_btn" onClick={handleToggleFilters}>
                    {showfilters ? "Hide filters" : "Show filters"}
                </button>
            )}
            {showfilters && <Aside />}
            <ProductListing />
        </div>
    )
}

export default ListedProducts
