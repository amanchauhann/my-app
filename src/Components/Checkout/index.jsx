import Addresses from "./Address"
import PriceDetails from "./PriceDetails"
import "./Checkout.css"
import { useContext, useState } from "react"
import { AuthContext } from "../../index"
import { errorToast } from "../../Extra"
import { Link, useNavigate } from "react-router-dom"
import CalculationCard from "../Cart/Calculation"
import AddressCard from "../Profile/Address/Card/AddressCard"

const CheckoutContainer = () => {
    const { logged_user, cartData } = useContext(AuthContext)
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [ifOrdered, setIfOrdered] = useState(false)
    const total = cartData.reduce((initial_price, { price, qty }) => {
        const price_for_item = price * qty
        return initial_price + price_for_item
    }, 0)
    console.log("from checkout", process.env.REACT_APP_RZP)
    const navigate = useNavigate()
    const loadScript = async (url) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = url;

            script.onload = () => {
                resolve(true);
            };

            script.onerror = () => {
                resolve(false);
            };

            document.body.appendChild(script);
        });
    };

    const displayRazorpay = async () => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            errorToast("Razorpay SDK failed to load, check you internet connection");
            return;
        }

        const options = {
            key: process.env.REACT_APP_RZP,
            amount: total.toFixed(2) * 100,
            currency: "INR",
            name: "CHARME",
            description: "Thank you for shopping with us",
            // image: "",
            handler: function (response) {
                console.log(response)
                setIfOrdered(response.razorpay_payment_id)
                // const orderData = {
                //     orderedItems: [...cart],
                //     amount: totalPrice(cart).toFixed(2),
                //     address: Object.values(checkoutInputs.addressInput).join(","),
                //     paymentId: response.razorpay_payment_id,
                // };
                // setOrders((prev) => [orderData, ...prev]);
                // dispatch({ type: "UPDATE_INDEX" });
                // clearAllCartItems();
                // navigate("/")

            },
            prefill: {
                name: logged_user?.name,
                email: logged_user?.email,
                contact: "9876543210",
            },
            theme: {
                color: "#140d07",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };
    console.log("poooooooooooooooooo", selectedAddress)

    return (
        <>
            <div className="checkout_main_container">
                {ifOrdered ? <div className="success_orders_container">
                    <h1>CONGRATULATIONS! YOUR ORDER IS SUCCESSFULLY PLACED.</h1>
                    <CalculationCard details_title={"Ordered Products Summary"} />
                    <div>
                        <p>Your order will be delivered to: </p>
                        {<AddressCard {...selectedAddress} />}
                    </div>

                    <Link to="/products">
                        <button className="logout_explore">Explore our products</button>
                    </Link>
                </div> : <>
                    <Addresses setSelectedAddress={setSelectedAddress} />
                    <div className="checkout_right_container">
                        <PriceDetails />
                        <button disabled={!selectedAddress} onClick={displayRazorpay} className="place_order_btn">Place order</button>
                    </div>
                </>}


            </div>
        </>

    )
}

export default CheckoutContainer;