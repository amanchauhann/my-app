import { useContext } from "react";
import "./Aside.css";
import { ContextData } from "../../../index";
import { FiltersContainer } from "./FiltersContainer";


const Aside = () => {
    const { resetFilters } = useContext(ContextData)

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