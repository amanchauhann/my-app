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
    const [is_suggestion_visible, setIs_Suggestion_visible] = useState(false);
    const [is_input_focussed, setIs_Input_Focussed] = useState(false)
    const suggestionContainerRef = useRef(null);

    const { productsData } = useContext(ContextData);

    useEffect(() => {
        // Attach click event listener to the document
        document.addEventListener("click", handleClickOutside);

        return () => {
            // Cleanup: remove the event listener
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        // Check if the click event occurred outside the suggestion container
        if (
            suggestionContainerRef.current &&
            !suggestionContainerRef.current.contains(event.target)
        ) {
            // Hide the suggestion container
            setIs_Suggestion_visible(false);
        }
    };

    const search_value_handler = (e) => {
        setSearch_value(e.target.value);
        setSuggestions(
            productsData.filter(({ title }) =>
                title.toLowerCase().includes(e.target.value.toLowerCase().trim())
            )
        );

        // Show or hide the suggestion container based on the search value
        setIs_Suggestion_visible(e.target.value.length > 0);
    };

    const handle_focus = () => {
        setIs_Input_Focussed(true)
    }

    const handle_blur = () => {
        setIs_Input_Focussed(false)
    }

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
                        onFocus={handle_focus}
                        onBlur={handle_blur}
                    />
                    {is_input_focussed && search_value && (
                        <div className="suggestion_container" ref={suggestionContainerRef}>
                            {suggestions.length > 0 ? (
                                suggestions.map(({ title, productImage, brand, price, id }) => (
                                    <Link to={`/products/${id}`}>
                                        <li className="suggestion_list">
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
                                        </li>
                                    </Link>

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