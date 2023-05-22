import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { AuthContext, ContextData } from "../../index";
import NavList from "../Action/Nav/NavList";
import "./Nav.css";
import Home from "../../Pages/Home";

const Nav = () => {
    const location = useLocation();
    const { locationHandler, auth_token } = useContext(AuthContext);
    const [search_value, setSearch_value] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const { productsData } = useContext(ContextData);

    const search_value_handler = (e) => {
        setSearch_value(e.target.value);
        setSuggestions(
            productsData.filter(({ title }) =>
                title.toLowerCase().includes(e.target.value.toLowerCase().trim())
            )
        );
    };

    return (
        <>
            <nav className="navigation-bar">
                <Link to="/">
                    <h2>Rones</h2>
                </Link>

                <div className="input_container">
                    <input
                        className="search-bar"
                        type="search"
                        placeholder="search here..."
                        onChange={search_value_handler}
                        value={search_value}
                    />
                    {search_value.length > 0 && (
                        <div className="suggestion_container">
                            {suggestions.length > 0 ? (
                                suggestions.map(({ title, productImage, brand, price, _id }) => (

                                    <li className="suggestion_list">
                                        <Link to={`/products/${_id}`} onClick={() => setSearch_value("")}>
                                            <div className="each_suggestion">
                                                <div className="suggestion_img_container">
                                                    <img src={productImage} alt="Product" />
                                                </div>
                                                <div className="nav_right_container">
                                                    <div className="upper_nav_container">
                                                        <div className="nav_category">{brand}</div>
                                                        <div className="font_wt_semi_bold">${price}</div>
                                                    </div>
                                                    <div className="text_md">{title}</div>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>


                                ))
                            ) :
                                <p>No products found.</p>}
                        </div>
                    )}
                </div>

                <div className="right-container">
                    <ul className="ul-list">
                        {auth_token ? (
                            <Link to="/profile/details">
                                <NavList liText="👤" />
                            </Link>
                        ) : (
                            <Link to="/login" onClick={() => locationHandler(location)}>
                                <NavList liText="Login" />
                            </Link>
                        )}
                        <NavList liText="WishList" />
                        <NavList liText="Cart" />
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;