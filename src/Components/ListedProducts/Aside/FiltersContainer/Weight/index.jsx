import { useContext } from "react"
import WeightInput from "../../../../Action/ListedProducts/inputs/WeightInput"
import { ContextData } from "../../../../../index"
import {weightFilterData} from "./Data"

export const Weight = () => {
    const {weightHandler, userFilters} = useContext(ContextData)
    const {weight: {min}} = userFilters

    return(
        <>
        {weightFilterData.map((eachFilterData)=> <WeightInput minFilter={min} weightHandler={weightHandler} {...eachFilterData} />)}
        </>
    )
}