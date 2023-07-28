import { ChakraProvider } from "@chakra-ui/react"
import ProductCard from "../ProductListedCard"
import { useContext, useState } from "react"
import { AuthContext, ContextData } from "../../../../index"
import { getFilteredByCategoriesProducts, getFilteredByPriceProducts, getFilteredByRatingProducts, getFilteredByWeightProducts, getSortedAndFilteredData } from "../../../../utils"
import SyncLoader from "react-spinners/SyncLoader";

const AllProducts = () => {
    const { productsData, userFilters, isLoading } = useContext(ContextData)
    const [page, setPage] = useState(1)

    const filteredByPriceProducts = getFilteredByPriceProducts(productsData, userFilters.price)
    const filteredByCategoryProducts = getFilteredByCategoriesProducts(filteredByPriceProducts, userFilters.categories)
    const filteredByWeightProducts = getFilteredByWeightProducts(filteredByCategoryProducts, userFilters.weight)
    const filteredByRatingsProducts = getFilteredByRatingProducts(filteredByWeightProducts, userFilters.ratings)

    const sortedAndFilteredData = getSortedAndFilteredData(filteredByRatingsProducts, userFilters)

    const { addToCartHandler, removeCartHandler, wishListHandler, removeWishlistHandler } = useContext(AuthContext)

    const select_page_handler = (selected_page) => {
        setPage(selected_page)
    }
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    return (
        <>
            {isLoading ? <SyncLoader
                color={"#3182ce"}
                loading={isLoading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> :
                <>
                    <div className="products-listed-card-container">
                        <ChakraProvider>
                            {sortedAndFilteredData.length ?
                                sortedAndFilteredData?.slice(page * 5 - 5, page * 5).map(eachProduct =>
                                    <ProductCard
                                        cart_btn_handler={() => addToCartHandler(eachProduct)}
                                        remove_cart_btn_handler={(() => removeCartHandler(eachProduct._id))}
                                        wishlist_btn_handler={() => wishListHandler(eachProduct)}
                                        remove_wishlist_btn_handler={() => removeWishlistHandler(eachProduct._id)}
                                        {...eachProduct}
                                    />
                                )
                                :
                                <h2>No products found</h2>}
                        </ChakraProvider>
                    </div>
                    <div className="pages_container">
                        {[...Array(Math.floor(sortedAndFilteredData.length / 5))].map((_, i) => <div onClick={() => select_page_handler(i + 1)} className={page === i + 1 ? "pages page_selected" : "pages"}>{i + 1}</div>)}
                    </div>
                </>
            }

        </>
    )
}

export default AllProducts;