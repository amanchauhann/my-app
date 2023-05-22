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
    const {resetFilters} = useContext(ContextData)
    
    return (
        <div className="aside">
            <div className="aside-filters-upper-container">
            <p className="filter-heading-bold">Filters</p>
            <p className="clear-filters" onClick={resetFilters}>Clear</p>
            </div>
            <FiltersContainer />
        </div>
    )
}

export default Aside