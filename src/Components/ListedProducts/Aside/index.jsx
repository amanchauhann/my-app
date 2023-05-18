import { useContext, useState } from "react";
import "./Aside.css";
import { ContextData } from "../../../index";
import CategoryInput from "../../Action/ListedProducts/inputs/CategoryInput";
import WeightInput from "../../Action/ListedProducts/inputs/WeightInput";
import RatingsInput from "../../Action/ListedProducts/inputs/RatingsInput";
import { Price } from "./FiltersContainer/Price";
import { Categories } from "./FiltersContainer/Categories";
import { Weight } from "./FiltersContainer/Weight";
import { Ratings } from "./FiltersContainer/Ratings";
import { FiltersContainer } from "./FiltersContainer";


const Aside = () => {
    const {categoriesData,priceHandler, categoryHandler, weightHandler, ratingHandler, resetFilters, userFilters, filteredPrice} = useContext(ContextData)
    const {price, categories, weight: {min, max}, ratings} = userFilters
console.log(categoriesData)
    
    return (
        <div className="aside">
            <div className="aside-filters-upper-container">
            <p className="filter-heading-bold">Filters</p>
            <p className="clear-filters" onClick={resetFilters}>Clear</p>
            </div>

            <FiltersContainer />

            {/* <div className="filter-container">
            <p className="filter-heading-bold">Categories</p>
            <div className="filter-container"></div>
            </div> */}

            {/* ===Price=== */}
            {/* <div className="price-filter">
                <p className="filter-heading-bold">Price</p>
                <Price />
            </div> */}

            {/* ===CATEGORIES=== */}
            {/* <div className="categories-filter">
                <p className="filter-heading-bold">Categories</p>
                <div className="filter-category-container filter-container">
                <Categories />
                </div>
            </div> */}
            
            {/* ===WEIGHT=== */}
            {/* <div className="weight-filter">
                <p className="filter-heading-bold">Weight</p>
                <div className="filter-weight-container filter-container">
                    <Weight />
                </div>
            </div> */}

            {/* ===RATINGS=== */}
            {/* <div className="rating-filter">
                <p className="filter-heading-bold">Ratings</p>
                <div className="filter-rating-container filter-container">
                    <Ratings />
                </div>
            </div> */}
        
        </div>
    )
}

export default Aside