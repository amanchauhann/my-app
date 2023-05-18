const WeightInput = ({minFilter, minimum_weight, weightHandler, maximum_weight, filter_weight_label}) => {

    return(
        <label>
        <input checked={minFilter === minimum_weight} type="radio" name="filter-weight" onClick={weightHandler} min={minimum_weight} max={maximum_weight} />
        {filter_weight_label}
    </label>
    )
}

export default WeightInput