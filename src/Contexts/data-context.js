import { createContext, useEffect, useState } from "react";

export const ContextData = createContext()

export const DataContext = ({children}) => {
    const [productsData,setProductsData] = useState([])

    useEffect(()=>{
        const fetchingData = async () =>{
            try{
                const res = await fetch("/api/products")
                const data = await res.json()
                setProductsData(data)
            }catch(e){
                console.log(e)
            }
        }
        fetchingData()
    },[])
    return(
        <ContextData.Provider value={{productsData}}>
            {children}
        </ContextData.Provider>
    )
}
