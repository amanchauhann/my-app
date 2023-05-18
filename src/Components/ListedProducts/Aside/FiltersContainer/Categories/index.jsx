import { useContext } from "react"
import CategoryInput from "../../../../Action/ListedProducts/inputs/CategoryInput"
import { ContextData } from "../../../../../index"

export const CategoriesContainer = () => {
    const {categoriesData,priceHandler, categoryHandler, weightHandler, ratingHandler, resetFilters, userFilters, filteredPrice} = useContext(ContextData)
    const {price, categories, weight: {min, max}, ratings} = userFilters
    return(
        <>
            {categoriesData.map(({categoryName})=> <CategoryInput filterCategories={categories} category={categoryName} categoryHandler={categoryHandler} />)}
        </>
    )
}