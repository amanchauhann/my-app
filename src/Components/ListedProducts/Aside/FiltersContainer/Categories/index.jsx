import { useContext } from "react"
import CategoryInput from "../../../../Action/ListedProducts/inputs/CategoryInput"
import { ContextData } from "../../../../../index"

export const Categories = () => {
    const {categoriesData, categoryHandler, userFilters} = useContext(ContextData)
    const {categories} = userFilters
    return(
        <>
            {categoriesData.map(({categoryName})=> <CategoryInput filterCategories={categories} category={categoryName} categoryHandler={categoryHandler} />)}
        </>
    )
}