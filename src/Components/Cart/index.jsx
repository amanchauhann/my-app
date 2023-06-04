import { ChakraProvider } from "@chakra-ui/react"
import CartCard from "./Card"
import { useContext } from "react"
import { AuthContext } from "../../Contexts/auth-context"
import CalculationCard from "./Calculation"
import "./Cart.css"
import { Link } from "react-router-dom"

const CartCardContainer = () => {
    const { cartData, qty_increment, qty_decrement, removeCartHandler, moveWishlistHandler } = useContext(AuthContext)
    console.log("opopop", cartData)
    return (
        <div className="cart_cards_container">
            {cartData.length > 0 ? <div className="cart_card_container">

                <div className="cart_item_cards_container">
                    <ChakraProvider>
                        {/* <div> */}
                        {cartData.map(eachCartData => <CartCard {...eachCartData} qty_increment_btn={() => qty_increment(eachCartData._id)} qty_decrement_btn={() => qty_decrement(eachCartData._id)} remove_cart_btn={(() => removeCartHandler(eachCartData._id))} move_wishlist_btn={() => moveWishlistHandler(eachCartData)} />)}

                        {/* </div> */}
                    </ChakraProvider>

                </div>
                <div className="cart_right_container">
                    <CalculationCard details_title={"Cart Price Details"} />
                    <div>
                        <Link to="/checkout">
                            <button className="checkout_btn">Checkout</button>
                        </Link>

                    </div>
                </div>


            </div> : <h1 style={{ padding: "3rem" }}>There's nothing here!</h1>}
        </div>
    )
}
export default CartCardContainer