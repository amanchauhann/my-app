import "./CategoryCard.css";

const CategoryCard = ({categoryImage, headline, description}) => {
    
    return(
        <>
        <div className="category-card">
            <div className="image-container" style={{ backgroundImage: `url(${categoryImage})` }}></div>
            <div className="text-container">
            <h2 className="category-headline">{headline}</h2>
            <p className="category-description">{description}</p>
            <a href="#" className="category-explore">Explore more  {">"}</a>
            </div>
            
        </div>
        </>
    )
}

export default CategoryCard;