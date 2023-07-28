import { useContext, useState } from "react"
import { AuthContext } from "../../../index"
import CheckoutAddressCard from "./Card"
import { Link } from "react-router-dom"

const Addresses = ({ setSelectedAddress }) => {
    const [selectedAddressIndex, setSelectedAddressIndex] = useState(null);
    const { logged_user, update_address } = useContext(AuthContext)

    const handleAddressSelection = (e, addressIndex) => {
        setSelectedAddressIndex(addressIndex);
        const selected_address = JSON.parse(e.target.value)
        setSelectedAddress(selected_address)
    };

    return (
        <div className="addresses_container">
            {logged_user.address.map((each_address, i) =>
                <div style={{ backgroundColor: selectedAddressIndex === i ? "rgba(49, 130, 206,0.3)" : null, border: "1px solid grey" }} className="checkout_address_item">
                    <input value={JSON.stringify(each_address)} type="radio" name="address" id={`address${i}`} onChange={(e) => handleAddressSelection(e, i)} />
                    <label for={`address${i}`}>
                        <CheckoutAddressCard {...each_address} />
                    </label>
                </div>
            )}
            <Link to="/profile/address">
                <button className="manage_address">Manage Address</button>
            </Link>

        </div>
    )
}

export default Addresses