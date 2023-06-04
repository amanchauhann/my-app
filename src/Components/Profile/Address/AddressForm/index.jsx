import { useContext, useState } from "react"
import { AuthContext } from "../../../../index"
import "./AddressForm.css"
import { v4 as uuidv4 } from 'uuid';


const AddressForm = ({ closeForm, cancel_handler }) => {
    const { setAddress } = useContext(AuthContext)

    const [new_address_form, setNew_address_form] = useState({
        street: "",
        alternatemobile: "",
        city: "",
        id: "",
        mobile: "",
        name: "",
        pincode: "",
        state: ""
    })
    const submit_address_handler = (e) => {
        e.preventDefault()
        const newAddress = {
            ...new_address_form,
            id: uuidv4()
        }
        setAddress(prev => [...prev, newAddress])
        cancel_handler()
        resetForm(e)

    }
    const resetForm = (e) => {
        e.preventDefault()
        setNew_address_form({
            street: "",
            alternatemobile: "",
            city: "",
            id: uuidv4(),
            mobile: "",
            name: "",
            pincode: "",
            state: ""
        })
    }
    return (
        <>
            <div className="add_address_form">
                <form onSubmit={submit_address_handler}>
                    <div className="form_upper_container">
                        <input required value={new_address_form.name} onChange={(e) => setNew_address_form(prev => ({ ...prev, name: e.target.value }))} className="form_input" type="text" placeholder="your name" />

                        <input required value={new_address_form.mobile} onChange={(e) => setNew_address_form(prev => ({ ...prev, mobile: e.target.value }))} className="form_input" type="number" placeholder="mobile no." />

                        <input required value={new_address_form.pincode} onChange={(e) => setNew_address_form(prev => ({ ...prev, pincode: e.target.value }))} className="form_input" type="text" placeholder="pin code" />

                        <input required value={new_address_form.city} onChange={(e) => setNew_address_form(prev => ({ ...prev, city: e.target.value }))} className="form_input" type="text" placeholder="city" />

                        <input required value={new_address_form.street} onChange={(e) => setNew_address_form(prev => ({ ...prev, street: e.target.value }))} className="form_input form_input_street" type="text" placeholder="street" />

                        <input required value={new_address_form.alternatemobile} onChange={(e) => setNew_address_form(prev => ({ ...prev, alternatemobile: e.target.value }))} className="form_input" type="number" placeholder="alternate no." />

                        <input required value={new_address_form.state} onChange={(e) => setNew_address_form(prev => ({ ...prev, state: e.target.value }))} className="form_input" type="text" placeholder="state" />
                    </div>
                    <div className="add_address_btn_container">
                        <button type="submit" className="address_form_btn address_add">Add</button>
                        <button className="address_form_btn address_reset" onClick={resetForm}>Reset</button>
                        <button className="address_form_btn address_cancel" onClick={closeForm}>Cancel</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default AddressForm