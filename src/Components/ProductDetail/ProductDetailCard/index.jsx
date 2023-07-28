import "./ProductDetailCard.css"
import { AuthContext } from "../../../index"
import { useContext } from "react"
import { Link } from "react-router-dom"

const ProductDetailCard = ({ productImage, title, ratings, reviewedBy, price, availability, categoryName, description, weight, _id, wishlist_btn_handler, cart_btn_handler, remove_cart_btn_handler, id }) => {
    const { cartData } = useContext(AuthContext)
    const soldout = !availability
    const existing_id = id
    const { logged_user, removeWishlistHandler } = useContext(AuthContext)
    const is_Wishlisted = logged_user?.wishlist?.length > 0 ? logged_user?.wishlist?.find(({ id }) => id === existing_id) : false
    const in_cart = cartData.length > 0 ? cartData.find(({ id }) => id === existing_id) : false

    return (
        <main className="product-detail-main-container">
            <div className="product-detail">
                <div className="product-detail-image-container">
                    <img className="product-detail-image" src={productImage} />
                </div>

                <div className="product-detail-right-container">
                    <h1>{title}</h1>
                    <small className="product-detail-review-container">★{ratings} | {(reviewedBy / 1000).toFixed(2)}k reviews</small>
                    <h1 className="product-detail-price">${price}</h1>
                    <hr />
                    <p><span className="font-wt-bold">Availability :</span> {availability ? "in-stock" : "out of stock"}</p>
                    <p><span className="font-wt-bold">Category :</span> {categoryName}</p>
                    <p><span className="font-wt-bold">Description :</span> {description}</p>
                    <p><span className="font-wt-bold">Weight :</span> {weight}Kg</p>
                    <div className="product-detail-button-container">
                        {in_cart ?
                            <Link to="/cart">
                                <button className="product-detail-button-remove product-detail-button-dimension">Go to Cart</button>
                            </Link>
                            :
                            <button onClick={cart_btn_handler} disabled={soldout} style={{ opacity: soldout ? "0.3" : "1" }} className="product-detail-button-cart product-detail-button-dimension">Add to Cart</button>}

                        {is_Wishlisted ? <button onClick={() => removeWishlistHandler(_id)} className="product-detail-button-wishlist remove_wishlist_btn product-detail-button-dimension">Remove</button> : <button disabled={soldout} style={{ opacity: soldout ? "0.3" : "1" }} className="product-detail-button-wishlist product-detail-button-dimension" onClick={wishlist_btn_handler}>Wishlist</button>}
                    </div>

                </div>
            </div>
        </main>
    )
}

export default ProductDetailCard