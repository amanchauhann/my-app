import { useConst } from "@chakra-ui/hooks";
import "./CategoryCard.css";
import { useContext } from "react";
import { ContextData } from "../../../../index";
import { useNavigate } from "react-router";

const CategoryCard = ({ categoryImage, categoryName, description }) => {
    const { categoryHandler, resetFilters } = useContext(ContextData)
    const navigate = useNavigate()
    const home_category_handler = () => {
        resetFilters()
        categoryHandler(categoryName)
        navigate("/products")
    }
    return (
        <>
            <div className="category-card">
                <div className="image-container" style={{ backgroundImage: `url(${categoryImage})` }}></div>
                <div className="text-container">
                    <h2 className="category-headline">{categoryName}</h2>
                    <p className="category-description">{description}</p>
                    <div onClick={home_category_handler} className="category-explore">Explore more  {">"}</div>
                </div>

            </div>
        </>
    )
}

export default CategoryCard;