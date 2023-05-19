import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ContextData = createContext()

export const DataContext = ({children}) => {
    const [categoriesData, setCategoriesData] = useState([])
    const [productsData,setProductsData] = useState([])
    // const [filteredPrice, setFilteredPrice] = useState(0)
    const [userFilters, setUserFilters] = useState({
        price: 0,
        categories: [],
        weight: {min: "", max: Infinity},
        ratings: null,
        sort: ""
    })
    const [userFromLocation, setUserFromLocation] = useState()
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
        setUserFilters(prev=> ({...prev, price: e.target.value}))
        // console.log(e.target.name)
    }

    const categoryHandler = (e) =>{
        console.log("aaa", e.target.value)
        setUserFilters(prev=> {
            return (prev.categories).find(existingCategory => existingCategory === e.target.value) ? {...prev, categories: (prev.categories).filter(eachPrevExistingCategory => eachPrevExistingCategory !== e.target.value)} : {...prev, categories: [...prev.categories, e.target.value]}
        })
    }

    const weightHandler = (e) => {
        setUserFilters(prev => ({...prev, weight: {min: e.target.min, max: e.target.max}}))
    }

    const ratingHandler = (e) => {
        setUserFilters(prev => ({...prev, ratings: e.target.value}))
    }

    const resetFilters = () => {
        console.log("aman")
        setUserFilters({
            price: 0,
            categories: [],
            weight: {min: 0, max: Infinity},
            ratings: 0,
            sort: ""
        })
    }

    const sortHandler = (e) => {
        setUserFilters(prev => ({...prev, sort: e.target.value}))
    }

    const locationHandler = (currentLocation) =>{
        setUserFromLocation(currentLocation.pathname)
    }



    return(
        <ContextData.Provider value={{categoriesData, productsData, priceHandler, categoryHandler, weightHandler, ratingHandler, sortHandler, resetFilters, userFilters, locationHandler, userFromLocation}}>
            {children}
        </ContextData.Provider>
    )
}
