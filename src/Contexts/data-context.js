import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

export const DataContext = ({children}) => {
    const [categoriesData, setCategoriesData] = useState([])
    const [productsData,setProductsData] = useState([])

    useEffect(()=>{
        const fetchingData = async () =>{
            try{
                const getCategoriesRes = await fetch("/api/categories")
                const getCategoriesData = await getCategoriesRes.json()
                const getCategories = await getCategoriesData.categories
                setCategoriesData(getCategories)
            }catch(e){
                console.log(e)
            }
        }
        fetchingData()
    },[])
    return(
        <ContextData.Provider value={{categoriesData}}>
            {children}
        </ContextData.Provider>
    )
}
