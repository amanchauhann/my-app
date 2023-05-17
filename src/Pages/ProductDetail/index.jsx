import { useParams } from "react-router-dom";
import ProductDetailCard from "../../Components/ProductDetail/ProductDetailCard";
import mini2 from "../../assets/Products/Mini/mini2.jpg"
import "./ProductDetail.css";
import { useEffect, useState } from "react";


const ProductDetail = () => {
    const [selectedProduct, setSelectedProduct] = useState()
    const {ProductID} = useParams();
    useEffect(()=>{
        const fetchingData = async () =>{
            try{
                const getProductDetails = await fetch(`/api/products/${ProductID}`)
                const getProductDetailsData = await getProductDetails?.json()
                const getSelectedProduct = await getProductDetailsData?.product
                setSelectedProduct(getSelectedProduct)
                console.log("fetching", getProductDetailsData)
            }catch(e){
                console.log(e)
            }
        }
        fetchingData()
    },[])
    return (
        <ProductDetailCard {...selectedProduct} />
    )
}

export default ProductDetail