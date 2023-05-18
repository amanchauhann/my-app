const WeightInput = ({minFilter, minimum_weight, weightHandler, maximum_weight, filter_weight_label}) => {
//     <label>
//     <input checked={min === "5"} type="radio" name="filter-weight" onClick={weightHandler} min={5} max={100} />
//     Above 5kg
// </label>
    return(
        <label>
        <input checked={minFilter === minimum_weight} type="radio" name="filter-weight" onClick={weightHandler} min={minimum_weight} max={maximum_weight} />
        {filter_weight_label}
    </label>
    )
}

export default WeightInput