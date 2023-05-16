import { ChakraProvider } from "@chakra-ui/react"
import ProductCard from "../ProductListedCard"
import { useContext } from "react"
import { ContextData } from "../../../../Contexts/data-context"
import { Link } from "react-router-dom"

const AllProducts = () => {
    const {productsData} = useContext(ContextData)
    return (
        <>
        <ChakraProvider>
        {productsData.map(eachProduct => <Link to={`/products/${eachProduct._id}`}><ProductCard  {...eachProduct}/></Link> )}
        </ChakraProvider>
        </>
    )
}

export default AllProducts;