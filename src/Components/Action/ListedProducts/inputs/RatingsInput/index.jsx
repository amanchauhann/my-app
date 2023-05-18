const RatingsInput = ({rating_in_filter, ratingValue, ratingHandler, ratingLabel}) => {
    // <label>
    //                     <input checked={ratings === "4"} type="radio" name="filter-rating" onClick={ratingHandler} value={4} />
    //                     4 star & above
    //                 </label>
    return(
        <label>
            <input checked={rating_in_filter === ratingValue} type="radio" name="filter-rating" onClick={ratingHandler} value={ratingValue} />
                {ratingLabel}
        </label>
    )
}

export default RatingsInput