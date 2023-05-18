import { useContext } from "react"
import { ContextData } from "../../../../../index"
import RatingsInput from "../../../../Action/ListedProducts/inputs/RatingsInput"
import { ratingsFilterData } from "./Data"

export const Ratings = () => {
    const {ratingHandler, userFilters} = useContext(ContextData)
    const {ratings} = userFilters
    return (
        <>
        {ratingsFilterData.map((eachRatingData)=> <RatingsInput rating_in_filter={ratings} ratingHandler={ratingHandler} {...eachRatingData} />)}
                {/* <RatingsInput  rating_in_filter={ratings} ratingValue={"4"} ratingHandler={ratingHandler} ratingLabel={"4 star & above"} />
                <RatingsInput  rating_in_filter={ratings} ratingValue={"3"} ratingHandler={ratingHandler} ratingLabel={"3 star & above"} />
                <RatingsInput  rating_in_filter={ratings} ratingValue={"2"} ratingHandler={ratingHandler} ratingLabel={"2 star & above"} />
                <RatingsInput  rating_in_filter={ratings} ratingValue={"1"} ratingHandler={ratingHandler} ratingLabel={"1 star & above"} /> */}
        </>
    )
}