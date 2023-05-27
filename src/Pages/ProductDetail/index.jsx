import { useParams } from "react-router-dom";
import ProductDetailCard from "../../Components/ProductDetail/ProductDetailCard";
import mini2 from "../../assets/Products/Mini/mini2.jpg"
import "./ProductDetail.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../index";


const ProductDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState()
    const { ProductID } = useParams();
    const { wishListHandler, addToCartHandler, removeCartHandler } = useContext(AuthContext)
    useEffect(() => {
        const fetchingData = async () => {
            try {
                const getProductDetails = await fetch(`/api/products/${ProductID}`)
                const getProductDetailsData = await getProductDetails?.json()
                const getSelectedProduct = await getProductDetailsData?.product
                setSelectedProduct(getSelectedProduct)
                console.log("fetching", getProductDetailsData)
            } catch (e) {
                console.log(e)
            }
        }
        fetchingData()
    }, [])
    return (
        <ProductDetailCard wishlist_btn_handler={() => wishListHandler({ ...selectedProduct })} cart_btn_handler={() => addToCartHandler(selectedProduct)} remove_cart_btn_handler={(() => removeCartHandler(selectedProduct._id))} {...selectedProduct} />
    )
}

export default ProductDetail