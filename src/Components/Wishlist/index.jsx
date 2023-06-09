import { ChakraProvider } from "@chakra-ui/react"
import WishlistCard from "./Card"
import { useContext } from "react"
import { AuthContext } from "../../index"
import "./wishlist.css"

const WishlistCardContainer = () => {
    const { logged_user, wishListHandler, removeWishlistHandler, moveToCartHandler, addToCartHandler } = useContext(AuthContext)
    return (
        <div className="wishlist_cards_container">
            <ChakraProvider>
                {logged_user.wishlist.length > 0 ? logged_user.wishlist.map(eachProduct => <WishlistCard wishlist_btn_handler={() => wishListHandler(eachProduct)} remove_wishlist_btn_handler={() => removeWishlistHandler(eachProduct._id)} move_to_cart_btn_handler={() => moveToCartHandler(eachProduct)} {...eachProduct} cart_btn_handler={() => moveToCartHandler(eachProduct)} />) : <h1>No Products to display</h1>}
            </ChakraProvider>
        </div>
    )
}

export default WishlistCardContainer