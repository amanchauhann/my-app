import "../FiltersContainer.css"
import { useContext } from "react"
import { ContextData } from "../../../../../index"

export const Price = () => {
    const { priceHandler, userFilters } = useContext(ContextData)
    const { price } = userFilters
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>0</p><p>10,000</p>
            </div>

            <input value={price} className="price-slider" onChange={priceHandler} type="range" min="0" max="10000" name="filter-price" />

        </>

    )
}
