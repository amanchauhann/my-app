import {filtersData} from "./Data"
export const FiltersContainer = () => {
    return (
        <>
        {filtersData.map((each)=> <div className="filter-container">
            <p className="filter-heading-bold">{each.type}</p>
            <div className="filter-container">
                {each.element}
            </div>
            </div>)}
        
        </>
    )
}