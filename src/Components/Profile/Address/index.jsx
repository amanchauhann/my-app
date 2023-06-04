import { useContext, useState } from "react"
import { AuthContext } from "../../../Contexts/auth-context"
import "./address.css"
import Card from "./Card"
import AddressForm from "./AddressForm"
import { v4 as uuidv4 } from 'uuid';

const Address = () => {
    const [show_form, setShow_form] = useState(false)
    // {
    //     street: '8505 Christina Ridges',
    //     alternatemobile: 4878794411,
    //     city: 'West Cooper',
    //     id: '2364c34d-7645-49cb-8b74-4bc5cb09711d',
    //     mobile: 1293452481,
    //     name: 'Vicki McDermott',
    //     pincode: '820598',
    //     state: 'Arunachal Pradesh',
    // }

    const { logged_user, setAddress } = useContext(AuthContext)
    console.log("logged user", logged_user)
    const [existingAddress, setExistingAddress] = useState()

    const add_address_handler = () => {
        setShow_form(true)
        setExistingAddress(false)
    }

    const cancel_handler = () => {
        setShow_form(false)
    }

    const update_address = (address) => {
        // setShow_form(true)
        // setExistingAddress(address)
    }

    // console.log("aaaa", existingAddress)

    return (
        <div className="profile_address_main">
            {!show_form && <div className="add_address" onClick={add_address_handler}>Add new Address</div>}
            {show_form && <AddressForm closeForm={cancel_handler} />}
            <h3 className="address_title">My Addresses</h3>
            <div className="address_card_container">
                {logged_user.address.map(each_address => <Card update_handler={() => update_address(each_address)} {...each_address} />)}
            </div>

        </div>
    )
}

export default Address