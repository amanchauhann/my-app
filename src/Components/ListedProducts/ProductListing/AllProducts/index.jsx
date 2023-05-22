import { ChakraProvider } from "@chakra-ui/react"
import ProductCard from "../ProductListedCard"
import { useContext } from "react"
import { ContextData } from "../../../../index"
import { getFilteredByCategoriesProducts, getFilteredByPriceProducts, getFilteredByRatingProducts, getFilteredByWeightProducts } from "../../../../utils"

const AllProducts = () => {
    const { productsData, userFilters } = useContext(ContextData)

    const filteredByPriceProducts = getFilteredByPriceProducts(productsData, userFilters.price)
    const filteredByCategoryProducts = getFilteredByCategoriesProducts(filteredByPriceProducts, userFilters.categories)
    const filteredByWeightProducts = getFilteredByWeightProducts(filteredByCategoryProducts, userFilters.weight)
    const filteredByRatingsProducts = getFilteredByRatingProducts(filteredByWeightProducts, userFilters.ratings)
    console.log(filteredByWeightProducts)

    const sortedAndFilteredData = userFilters.sort ? userFilters.sort === "low-to-high" ? filteredByRatingsProducts.sort(function (a, b) { return a.price - b.price }) : filteredByRatingsProducts.sort(function (a, b) { return b.price - a.price }) : filteredByRatingsProducts

    return (
        <>
            <ChakraProvider>
                {sortedAndFilteredData.length ? sortedAndFilteredData?.map(eachProduct => <ProductCard  {...eachProduct} />) : <h2>No products found</h2>}
            </ChakraProvider>
        </>
    )
}

export default AllProducts;