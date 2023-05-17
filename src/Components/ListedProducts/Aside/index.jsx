import { useContext, useState } from "react";
import "./Aside.css";
import { ContextData } from "../../../index";

const Aside = () => {
    const {priceHandler, filteredPrice} = useContext(ContextData)
    
    return (
        <div className="aside">
            <p className="filter-heading-bold p-aside">Filters</p>
            <div className="price-filter">
                <p className="filter-heading-bold p-aside">Price</p>
                <input className="price-slider" onChange={priceHandler} type="range" min="0" max="10000" />
            </div>
            <div className="categories-filter">
                <p className="filter-heading-bold p-aside">Categories</p>
                <div className="filter-category-container filter-container">
                <label>
                <input type="checkbox" name="filter-category-check" />
                Camera
                </label>
                <label>
                <input type="checkbox" name="filter-category-check" />
                Mini
                </label>
                <label>
                <input type="checkbox" name="filter-category-check" />
                Agriculture
                </label>
                </div>
            </div>
            <div className="weight-filter">
                <p className="filter-heading-bold p-aside">Weight</p>
                <div className="filter-weight-container filter-container">
                    <label>
                        <input type="radio" name="filter-weight-select" />
                        Above 5kg
                    </label>
                    <label>
                        <input type="radio" name="filter-weight-select" />
                        3-5kg
                    </label>
                    <label>
                        <input type="radio" name="filter-weight-select" />
                        1-3kg
                    </label>
                    <label>
                        <input type="radio" name="filter-weight-select" />
                        upto 1kg
                    </label>
                    

                </div>
            </div>

            <div className="rating-filter">
                <p className="filter-heading-bold p-aside">Ratings</p>
                <div className="filter-rating-container filter-container">
                    <label>
                        <input type="radio" name="filter-rating-select" />
                        4 star & above
                    </label>
                    <label>
                        <input type="radio" name="filter-rating-select" />
                        3 star & above
                    </label>
                    <label>
                        <input type="radio" name="filter-rating-select" />
                        2 star & above
                    </label>
                    <label>
                        <input type="radio" name="filter-weight-select" />
                        1 star & above
                    </label>
                    

                </div>
            </div>
        
        </div>
    )
}

export default Aside