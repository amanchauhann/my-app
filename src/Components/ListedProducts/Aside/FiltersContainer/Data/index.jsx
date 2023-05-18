import { Categories } from "../Categories"
import { Price } from "../Price"
import { Weight } from "../Weight"
import {Ratings} from "../Ratings"

export const filtersData = [
    {
        type: "Price",
        element: <Price />
    },
    {
        type: "Category",
        element: <Categories />
    },
    {
        type: "Weight",
        element: <Weight />
    },
    {
        type: "Ratings",
        element: <Ratings />
    },
]