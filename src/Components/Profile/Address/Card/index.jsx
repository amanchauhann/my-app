import { useContext } from "react";
import "./card.css"
import { AuthContext } from "../../../../index";

const Card = ({ name, street, city, state, pincode, mobile, alternatemobile, id }) => {
    const { delete_handler } = useContext(AuthContext)
    return (
        <>
            <div className="profile_address_container">
                <h2 className="address_card_name">{name}</h2>
                <div className="address_card_content">
                    <div className="address_card_upper">
                        <p>{street}</p>
                        <p className="font_weight">{city}, {state}</p>
                        <p>Pin: <span className="font_weight">{pincode}</span></p>
                    </div>
                    <div className="address_card_lower">
                        <p>Mobile: {mobile}</p>
                        <p>Alternate: {alternatemobile}</p>
                    </div>
                </div>
                <button>Update</button>
                <button onClick={() => delete_handler(id)}>Delete</button>
            </div>
        </>
    )
}

export default Card;