const RatingsInput = ({rating_in_filter, ratingValue, ratingHandler, ratingLabel}) => {
    return(
        <label>
            <input checked={rating_in_filter === ratingValue} type="radio" name="filter-rating" onClick={ratingHandler} value={ratingValue} />
                {ratingLabel}
        </label>
    )
}

export default RatingsInput