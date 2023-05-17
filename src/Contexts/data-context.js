import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ContextData = createContext()

export const DataContext = ({children}) => {
    const [categoriesData, setCategoriesData] = useState([])
    const [productsData,setProductsData] = useState([])
    const [filteredPrice, setFilteredPrice] = useState(0)
    const [selectedProduct, setSelectedProduct] = useState([])
    const {ProductID} = useParams()
    // console.log(ProductID)

    useEffect(()=>{
        const fetchingData = async () =>{
            try{
                const getCategoriesRes = await fetch("/api/categories")
                const getCategoriesData = await getCategoriesRes.json()
                const getCategories = await getCategoriesData.categories
                setCategoriesData(getCategories)

                const res = await fetch("/api/products")
                const data = await res.json()
                setProductsData(data.products)
            }catch(e){
                console.log(e.target.value)
            }
        }
        fetchingData()
    },[])

    const priceHandler = (e) => {
        setFilteredPrice(e.target.value)
    }
    return(
        <ContextData.Provider value={{categoriesData, productsData, priceHandler, filteredPrice}}>
            {children}
        </ContextData.Provider>
    )
}
