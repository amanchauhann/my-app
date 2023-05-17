import { ChakraProvider } from "@chakra-ui/react"
import ProductCard from "../ProductListedCard"
import { useContext } from "react"
import { ContextData } from "../../../../index"
import { Link } from "react-router-dom"
import {getFilteredByPriceProducts} from "../../../../utils"

const AllProducts = () => {
    const {productsData, filteredPrice} = useContext(ContextData)
    console.log(filteredPrice)
    const filteredByPriceProducts = getFilteredByPriceProducts(productsData, filteredPrice)

    return (
        <>
        <ChakraProvider>
        {filteredByPriceProducts.length ? filteredByPriceProducts?.map(eachProduct => <Link to={`/products/${eachProduct._id}`}><ProductCard  {...eachProduct}/></Link> ) : <h2>No products found</h2>}
        </ChakraProvider>
        </>
    )
}

export default AllProducts;