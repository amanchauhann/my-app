import { ChakraProvider } from "@chakra-ui/react"
import ProductCard from "../ProductListedCard"
import { useContext } from "react"
import { ContextData } from "../../../../Contexts/data-context"

const AllProducts = () => {
    const {productsData} = useContext(ContextData)
    return (
        <>
        <ChakraProvider>
        {productsData.map(eachProduct => <ProductCard  {...eachProduct}/>)}
        </ChakraProvider>
        </>
    )
}

export default AllProducts;