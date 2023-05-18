import { useContext, useState } from "react";
import "./Aside.css";
import { ContextData } from "../../../index";
import CategoryInput from "../../Action/ListedProducts/inputs/CategoryInput";
import WeightInput from "../../Action/ListedProducts/inputs/WeightInput";
import RatingsInput from "../../Action/ListedProducts/inputs/RatingsInput";


const Aside = () => {
    const {categoriesData,priceHandler, categoryHandler, weightHandler, ratingHandler, resetFilters, userFilters, filteredPrice} = useContext(ContextData)
    const {price, categories, weight: {min, max}, ratings} = userFilters
console.log(categoriesData)
    
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
                {categoriesData.map(({categoryName})=> <CategoryInput filterCategories={categories} category={categoryName} categoryHandler={categoryHandler} />)}
                </div>
            </div>
            
            <div className="weight-filter">
                <p className="filter-heading-bold p-aside">Weight</p>
                <div className="filter-weight-container filter-container">
                {/* <label>
        <input checked={minFilter === {minimum_weight}} type="radio" name="filter-weight" onClick={weightHandler} min={minimum_weight} max={maximum_weight} />
        {filter_weight_label}
    </label> */}
    <WeightInput minFilter={min} minimum_weight={"5"} weightHandler={weightHandler} maximum_weight={100} filter_weight_label={"Above 5Kg"} />
                    {/* <label>
                        <input checked={min === "5"} type="radio" name="filter-weight" onClick={weightHandler} min={5} max={100} />
                        Above 5kg
                    </label> */}
                    <WeightInput minFilter={min} minimum_weight={"3"} weightHandler={weightHandler} maximum_weight={5} filter_weight_label={"3-5 Kg"} />
                    {/* <label>
                        <input checked={min === "3"} type="radio" name="filter-weight" onClick={weightHandler} min={3} max={5} />
                        3-5kg
                    </label> */}
                    <WeightInput minFilter={min} minimum_weight={"1"} weightHandler={weightHandler} maximum_weight={3} filter_weight_label={"1-3 Kg"} />
                    {/* <label>
                        <input checked={min === "1"} type="radio" name="filter-weight" onClick={weightHandler} min={1} max={3} />
                        1-3kg
                    </label> */}
                    <WeightInput minFilter={min} minimum_weight={"0"} weightHandler={weightHandler} maximum_weight={1} filter_weight_label={"upto 1 Kg"} />
                    {/* <label>
                        <input checked={min === "0"} type="radio" name="filter-weight" onClick={weightHandler} min={0} max={1} />
                        upto 1kg
                    </label> */}
                    

                </div>
            </div>

            <div className="rating-filter">
                <p className="filter-heading-bold p-aside">Ratings</p>
                <div className="filter-rating-container filter-container">
                    {/* <label>
            <input checked={rating_in_filter === ratingValue} type="radio" name="filter-rating" onClick={ratingHandler} value={ratingValue} />
                {ratingLabel}
        </label> */}
        <RatingsInput  rating_in_filter={ratings} ratingValue={"4"} ratingHandler={ratingHandler} ratingLabel={"4 star & above"} />
                    {/* <label>
                        <input checked={ratings === "4"} type="radio" name="filter-rating" onClick={ratingHandler} value={4} />
                        4 star & above
                    </label> */}
                    <RatingsInput  rating_in_filter={ratings} ratingValue={"3"} ratingHandler={ratingHandler} ratingLabel={"3 star & above"} />
                    {/* <label>
                        <input checked={ratings === "3"} type="radio" name="filter-rating" onClick={ratingHandler} value={3} />
                        3 star & above
                    </label> */}
                    <RatingsInput  rating_in_filter={ratings} ratingValue={"2"} ratingHandler={ratingHandler} ratingLabel={"2 star & above"} />
                    {/* <label>
                        <input checked={ratings === "2"} type="radio" name="filter-rating" onClick={ratingHandler} value={2} />
                        2 star & above
                    </label> */}
                    <RatingsInput  rating_in_filter={ratings} ratingValue={"1"} ratingHandler={ratingHandler} ratingLabel={"1 star & above"} />
                    {/* <label>
                        <input checked={ratings === "1"} type="radio" name="filter-rating" onClick={ratingHandler} value={1} />
                        1 star & above
                    </label> */}
                    

                </div>
            </div>
        
        </div>
    )
}

export default Aside