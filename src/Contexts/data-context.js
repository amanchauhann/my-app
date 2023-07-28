import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

export const DataContext = ({ children }) => {
    const [categoriesData, setCategoriesData] = useState([])
    const [productsData, setProductsData] = useState([])
    const [userFilters, setUserFilters] = useState({
        price: 0,
        categories: [],
        weight: { min: "", max: Infinity },
        ratings: null,
        sort: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchingData = async () => {
            try {
                setIsLoading(true)
                const getCategoriesRes = await fetch("/api/categories")
                const getCategoriesData = await getCategoriesRes.json()
                const getCategories = await getCategoriesData.categories
                setCategoriesData(getCategories)

                const res = await fetch("/api/products")
                const data = await res.json()
                setProductsData(data.products)
                if (res.status) setIsLoading(false)
            } catch (e) {
                console.log(e.target.value)
            }
        }
        fetchingData()
    }, [])

    const priceHandler = (e) => {
        setUserFilters(prev => ({ ...prev, price: e.target.value }))
    }

    const categoryHandler = (filter_category) => {
        setUserFilters(prev => {
            return (prev.categories).find(existingCategory => existingCategory === filter_category) ? { ...prev, categories: (prev.categories).filter(eachPrevExistingCategory => eachPrevExistingCategory !== filter_category) } : { ...prev, categories: [...prev.categories, filter_category] }
        })
    }

    const weightHandler = (e) => {
        setUserFilters(prev => ({ ...prev, weight: { min: e.target.min, max: e.target.max } }))
    }

    const ratingHandler = (e) => {
        setUserFilters(prev => ({ ...prev, ratings: e.target.value }))
    }

    const resetFilters = () => {
        setUserFilters({
            price: 0,
            categories: [],
            weight: { min: 0, max: Infinity },
            ratings: 0,
            sort: ""
        })
    }

    const sortHandler = (e) => {
        setUserFilters(prev => ({ ...prev, sort: e.target.value }))
    }

    return (
        <ContextData.Provider value={{ 
            categoriesData, 
            productsData, 
            priceHandler, 
            categoryHandler, 
            weightHandler, 
            ratingHandler, 
            sortHandler, 
            resetFilters, 
            userFilters, 
            isLoading 
        }}>
            {children}
        </ContextData.Provider>
    )
}
