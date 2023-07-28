import WishlistCardContainer from "../../Components/Wishlist"
import "./wishlist.css"

const Wishlist = () => {
    return (
        <div className="wishlist_container">
            <h1 className="wishlist_heading">My Wishlist</h1>
            <WishlistCardContainer />
        </div>
    )
}

export default Wishlist