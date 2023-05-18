import { useContext, useState } from "react";
import "./Aside.css";
import { ContextData } from "../../../index";

const Aside = () => {
    const {priceHandler, categoryHandler, weightHandler, ratingHandler, resetFilters, userFilters, filteredPrice} = useContext(ContextData)
    const {price, categories, weight: {min, max}, ratings} = userFilters

    
    return (
        <div className="aside">
            <div className="aside-filters-upper-container">
            <p className="filter-heading-bold p-aside">Filters</p>
            <p className="clear-filters" onClick={resetFilters}>Clear</p>
            </div>
            

            <div className="price-filter">
                <p className="filter-heading-bold p-aside">Price</p>
                <input value={price} className="price-slider" onChange={priceHandler} type="range" min="0" max="10000" name="filter-price" />
            </div>

            <div className="categories-filter">
                <p className="filter-heading-bold p-aside">Categories</p>
                <div className="filter-category-container filter-container">
                <label>
                <input checked={categories.includes("camera")} type="checkbox" name="filter-category" onClick={categoryHandler} value="camera"  />
                Camera
                </label>
                <label>
                <input checked={categories.includes("mini")} type="checkbox" name="filter-category" onClick={categoryHandler} value="mini"  />
                Mini
                </label>
                <label>
                <input checked={categories.includes("agriculture")} type="checkbox" name="filter-category" onClick={categoryHandler} value="agriculture"  />
                Agriculture
                </label>
                </div>
            </div>
            
            <div className="weight-filter">
                <p className="filter-heading-bold p-aside">Weight</p>
                <div className="filter-weight-container filter-container">
                    <label>
                        <input checked={min === "5"} type="radio" name="filter-weight" onClick={weightHandler} min={5} max={100} />
                        Above 5kg
                    </label>
                    <label>
                        <input checked={min === "3"} type="radio" name="filter-weight" onClick={weightHandler} min={3} max={5} />
                        3-5kg
                    </label>
                    <label>
                        <input checked={min === "1"} type="radio" name="filter-weight" onClick={weightHandler} min={1} max={3} />
                        1-3kg
                    </label>
                    <label>
                        <input checked={min === "0"} type="radio" name="filter-weight" onClick={weightHandler} min={0} max={1} />
                        upto 1kg
                    </label>
                    

                </div>
            </div>

            <div className="rating-filter">
                <p className="filter-heading-bold p-aside">Ratings</p>
                <div className="filter-rating-container filter-container">
                    <label>
                        <input checked={ratings === "4"} type="radio" name="filter-rating" onClick={ratingHandler} value={4} />
                        4 star & above
                    </label>
                    <label>
                        <input checked={ratings === "3"} type="radio" name="filter-rating" onClick={ratingHandler} value={3} />
                        3 star & above
                    </label>
                    <label>
                        <input checked={ratings === "2"} type="radio" name="filter-rating" onClick={ratingHandler} value={2} />
                        2 star & above
                    </label>
                    <label>
                        <input checked={ratings === "1"} type="radio" name="filter-rating" onClick={ratingHandler} value={1} />
                        1 star & above
                    </label>
                    

                </div>
            </div>
        
        </div>
    )
}

export default Aside