import { useParams } from "react-router-dom";
import ProductDetailCard from "../../Components/ProductDetail/ProductDetailCard";
import "./ProductDetail.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../index";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};


const ProductDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const { ProductID } = useParams();
    const { wishListHandler, addToCartHandler, removeCartHandler } = useContext(AuthContext)


    useEffect(() => {
        const fetchingData = async () => {
            try {
                setIsLoading(true)
                setTimeout(async () => {
                    const getProductDetails = await fetch(`/api/products/${ProductID}`)
                    const getProductDetailsData = await getProductDetails?.json()
                    const getSelectedProduct = await getProductDetailsData?.product
                    setSelectedProduct(getSelectedProduct)
                    setIsLoading(false)
                }, 1000);

            } catch (e) {
                setIsError(e)
            }
        }
        fetchingData()
    }, [ProductID])


    return (
        <div className="product_detail_main">
            {isLoading ? <SyncLoader
                color={"blue"}
                loading={isLoading}
                cssOverride={override}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : isError ? <p>Error: {isError}</p> : <ProductDetailCard wishlist_btn_handler={() => wishListHandler({ ...selectedProduct })} cart_btn_handler={() => addToCartHandler(selectedProduct)} remove_cart_btn_handler={(() => removeCartHandler(selectedProduct._id))} {...selectedProduct} />}
        </div>

    )
}

export default ProductDetail