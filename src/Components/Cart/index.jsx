import { ChakraProvider } from "@chakra-ui/react"
import CartCard from "./Card"
import { useContext } from "react"
import { AuthContext } from "../../Contexts/auth-context"
import CalculationCard from "./Calculation"

const CartCardContainer = () => {
    const { cartData, qty_increment, qty_decrement, removeCartHandler, moveWishlistHandler } = useContext(AuthContext)
    console.log("opopop", cartData)
    return (
        <>
            {cartData.length > 0 ? <div className="cart_card_container">

                <div className="cart_item_cards_container">
                    <ChakraProvider>
                        {/* <div> */}
                        {cartData.map(eachCartData => <CartCard {...eachCartData} qty_increment_btn={() => qty_increment(eachCartData._id)} qty_decrement_btn={() => qty_decrement(eachCartData._id)} remove_cart_btn={(() => removeCartHandler(eachCartData._id))} move_wishlist_btn={() => moveWishlistHandler(eachCartData)} />)}

                        {/* </div> */}
                    </ChakraProvider>

                </div>

                <CalculationCard />

            </div> : <p>There's nothing here.</p>}
        </>
    )
}
export default CartCardContainer