import { useContext } from "react"
import CalculationCard from "../../Cart/Calculation"
import { AuthContext } from "../../../index"

const PriceDetails = () => {
    const { cartData } = useContext(AuthContext)
    const total = cartData.reduce((initial_price, { price, qty }) => {
        const price_for_item = price * qty
        return initial_price + price_for_item
    }, 0)
    return (
        <>
            <CalculationCard cartData={cartData} details_title={"Cart Price Details"} />
        </>
    )
}

export default PriceDetails