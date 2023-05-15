import "./Categories.css";
import CategoryCard from "./CategoryCard";
import { categoriesData } from "./CategoriesData";


const Categories = () => {    
    return (
        <div className="categories-container">
        <h1 className="categories-container-title">Explore Products in Different Fields</h1>
        <div className="card-container">
        {categoriesData.map(eachCategoryData => <CategoryCard {...eachCategoryData} />)}
        </div>
        </div>
    )
}

export default Categories