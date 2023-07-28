import { useContext, useState } from "react"
import { AuthContext } from "../../../Contexts/auth-context"
import "./address.css"
import Card from "./Card"
import AddressForm from "./AddressForm"
import UpdateAddressForm from "./UpdateAddressForm"

const Address = () => {
    const [show_form, setShow_form] = useState(false)
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const [update_address_form, setUpdate_address_form] = useState({
        street: "",
        alternatemobile: "",
        city: "",
        id: "",
        mobile: "",
        name: "",
        pincode: "",
        state: ""
    })

    const { logged_user } = useContext(AuthContext)

    const add_address_handler = () => {
        setShow_form(true)
    }

    const cancel_handler = () => {
        setShow_form(false)
    }
    const update_cancel_handler = () => {
        setShowUpdateForm(false)
    }

    const update_address_handler = (address) => {
        cancel_handler()
        setShowUpdateForm(true)
        setUpdate_address_form(address)
    }

    return (
        <div className="profile_address_main">
            {!show_form && !showUpdateForm && <div className="add_address" onClick={add_address_handler}>Add new Address</div>}
            {show_form && !showUpdateForm && <AddressForm closeForm={cancel_handler} cancel_handler={cancel_handler} />}
            {showUpdateForm && !show_form && <UpdateAddressForm closeForm={update_cancel_handler} setUpdate_address_form={setUpdate_address_form} update_address_form={update_address_form} update_cancel_handler={update_cancel_handler} />}
            <h3 className="address_title">My Addresses</h3>
            <div className="address_card_container">
                {logged_user.address.map(each_address => <Card update_handler={() => update_address_handler(each_address)} {...each_address} />)}
            </div>

        </div>
    )
}

export default Address