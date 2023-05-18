import { useContext } from "react"
import { ContextData } from "../../../../../index"

export const PriceContainer = () => {
    const {categoriesData,priceHandler, categoryHandler, weightHandler, ratingHandler, resetFilters, userFilters, filteredPrice} = useContext(ContextData)
    const {price, categories, weight: {min, max}, ratings} = userFilters
    return (
        <input value={price} className="price-slider" onChange={priceHandler} type="range" min="0" max="10000" name="filter-price" />
    )
}