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
    const [productsData, setProductsData] = useState([])
    // const { productsData } = useContext(ContextData);
    // const dummysuggestion = [...suggestions]

    const fetchingData = async () => {
        try {
            const res = await fetch("/api/products")
            const data = await res.json()
            setProductsData(data.products)
        } catch (e) {
            console.log(e.target.value)
        }
    }

    const timeoutIDRef = useRef(null);
    // const [isDisable, setIsDisable] = useState(false)
    const search_value_handler = (e) => {
        // if (isDisable) {
        //     return;
        // }
        // setIsDisable(true)
        setSuggestions([])
        clearTimeout(timeoutIDRef.current);
        setSearch_value(e.target.value);
        timeoutIDRef.current = setTimeout(async () => {
            const res = await fetch("/api/products")
            const data = await res.json()
            setProductsData(data.products)
            setSuggestions((prev) =>
                [...prev, ...data.products.filter(({ title }) =>
                    title.toLowerCase().includes(e.target.value.toLowerCase().trim())
                )]
            );
            console.log("tyttytytyt", suggestions)
            // setIsDisable(false)
        }, 500);

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
                                                        <div className="nav_category hidden_sm_screen">{brand}</div>
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
                                <NavList liText={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                                </svg>} />
                            </Link>
                        ) : (
                            <Link to="/login" >
                                <NavList liText="Login" />
                            </Link>
                        )}
                        <Link to="/cart">
                            <NavList liText={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>} />
                        </Link>

                        <Link to="/wishlist">
                            <NavList liText={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg>} />
                        </Link>

                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Nav;