import { Categories } from "../Categories"
import { Price } from "../Price"
import { Weight } from "../Weight"
import {Ratings} from "../Ratings"

export const filtersData = [
    {
        type: "Category",
        element: <Categories />
    },
    {
        type: "Price",
        element: <Price />
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