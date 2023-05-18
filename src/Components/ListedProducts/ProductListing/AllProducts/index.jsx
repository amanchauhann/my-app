import { ChakraProvider } from "@chakra-ui/react"
import ProductCard from "../ProductListedCard"
import { useContext } from "react"
import { ContextData } from "../../../../index"
import { Link } from "react-router-dom"
import {getFilteredByCategoriesProducts, getFilteredByPriceProducts, getFilteredByRatingProducts, getFilteredByWeightProducts} from "../../../../utils"

const AllProducts = () => {
    const {productsData, userFilters} = useContext(ContextData)
    console.log(userFilters.weight.max)
    const filteredByPriceProducts = getFilteredByPriceProducts(productsData, userFilters.price)
    // const filteredByCategoryProducts = userFilters.categories.length ? filteredByPriceProducts.filter(({categoryName}) => userFilters.categories.includes(categoryName)) : filteredByPriceProducts
    const filteredByCategoryProducts = getFilteredByCategoriesProducts(filteredByPriceProducts, userFilters.categories)
    const filteredByWeightProducts = getFilteredByWeightProducts(filteredByCategoryProducts, userFilters.weight)
    const filteredByRatingsProducts = getFilteredByRatingProducts(filteredByWeightProducts, userFilters.ratings)
    console.log(filteredByWeightProducts)
    
    // const filteredByWeightProducts = filteredByCategoryProducts.filter(({weight})=> (userFilters.weight).min<weight && weight<(userFilters.weight).max)
    

    return (
        <>
        <ChakraProvider>
        {filteredByRatingsProducts.length ? filteredByRatingsProducts?.map(eachProduct => <ProductCard  {...eachProduct}/>) : <h2>No products found</h2>}
        </ChakraProvider>
        </>
    )
}

export default AllProducts;