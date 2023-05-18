import { useContext } from "react"
import { ContextData } from "../../../../../index"
import {RatingsInput} from "../../../../Action/ListedProducts/inputs"
import { ratingsFilterData } from "./Data"

export const Ratings = () => {
    const {ratingHandler, userFilters} = useContext(ContextData)
    const {ratings} = userFilters
    return (
        <>
        {ratingsFilterData.map((eachRatingData)=> <RatingsInput rating_in_filter={ratings} ratingHandler={ratingHandler} {...eachRatingData} />)}
        </>
    )
}