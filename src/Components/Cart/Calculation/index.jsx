import "../Cart.css"

const CalculationCard = ({ cartData, details_title }) => {
    const total = cartData.reduce((initial_price, { price, qty }) => {
        const price_for_item = price * qty
        return initial_price + price_for_item
    }, 0)
    return (
        <main className="calculation_main">
            <h1>{details_title}</h1>
            <hr className="hr" />
            <div className="calculate_item_container">
                {cartData.map(eachCartData => <div className="calculate_item"><p>{eachCartData.title}({eachCartData.qty})</p><p>${eachCartData.price * eachCartData.qty}</p></div>)}
            </div>
            <div className="calculation_footer">
                <p className="total_heading">Total:</p>
                <p className="calculation_total">${total}</p>
            </div>

        </main>
    )
}

export default CalculationCard