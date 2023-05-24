import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-text-container">
                <h2 className="one-line-title">Shop with Rone Store</h2>
                <p className="one-line-desc">Get 1% Credit Rewards, Free Shipping on Orders Over $149, 14-Day Returns, and other exclusive offers.</p>
                <Link to="/products">
                    <div className="store-btn">Shop Now</div>
                </Link>

            </div>
            <hr />
            <p className="made-with">Made while eating 🍓</p>
        </div>
    )
}

export default Footer