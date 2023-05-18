import { useContext } from "react"
import WeightInput from "../../../../Action/ListedProducts/inputs/WeightInput"
import { ContextData } from "../../../../../index"
import {weightFilterData} from "./Data"

export const Weight = () => {
    const {weightHandler, userFilters} = useContext(ContextData)
    const {weight: {min}} = userFilters

    // const weightFilterData = [
    //     {
    //         minimum_weight: "5",
    //         maximum_weight: "100",
    //         filter_weight_label: "Above 5 Kg"
    //     },
    //     {
    //         minimum_weight: "3",
    //         maximum_weight: "5",
    //         filter_weight_label: "3-5 Kg"
    //     },
    //     {
    //         minimum_weight: "1",
    //         maximum_weight: "3",
    //         filter_weight_label: "1-3 Kg"
    //     },
    //     {
    //         minimum_weight: "0",
    //         maximum_weight: "1",
    //         filter_weight_label: "Upto 1 Kg"
    //     },
    // ]
    return(
        <>
        {weightFilterData.map((eachFilterData)=> <WeightInput minFilter={min} weightHandler={weightHandler} {...eachFilterData} />)}
            {/* <WeightInput minFilter={min} minimum_weight={"5"} weightHandler={weightHandler} maximum_weight={"100"} filter_weight_label={"Above 5 Kg"} />
            <WeightInput minFilter={min} minimum_weight={"3"} weightHandler={weightHandler} maximum_weight={"5"} filter_weight_label={"3-5 Kg"} />
            <WeightInput minFilter={min} minimum_weight={"1"} weightHandler={weightHandler} maximum_weight={"3"} filter_weight_label={"1-3 Kg"} />
            <WeightInput minFilter={min} minimum_weight={"0"} weightHandler={weightHandler} maximum_weight={"1"} filter_weight_label={"upto 1 Kg"} /> */}
        </>
    )
}