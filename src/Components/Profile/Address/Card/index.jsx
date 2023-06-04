import { useContext } from "react";
import "./card.css"
import { AuthContext } from "../../../../index";
import AddressCard from "./AddressCard";

const Card = ({ ...args }) => {
    const { name, street, city, state, pincode, mobile, alternatemobile, id, update_handler } = args
    const { delete_handler } = useContext(AuthContext)
    return (
        <>
            <div className="profile_address_container">
                <AddressCard {...args} />
                <button onClick={() => update_handler(id)}>Update</button>
                <button onClick={() => delete_handler(id)}>Delete</button>
            </div>
        </>
    )
}

export default Card;