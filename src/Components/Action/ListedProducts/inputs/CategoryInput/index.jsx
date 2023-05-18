const CategoryInput = ({filterCategories, category, categoryHandler}) => {
    // <label>
    //             <input checked={categories.includes(categoryName)} type="checkbox" name="filter-category" onClick={categoryHandler} value={categoryName}  />
    //             {categoryName}
    //             </label>
    return(
        <>
        <label>
                <input checked={filterCategories.includes(category)} type="checkbox" name="filter-category" onClick={categoryHandler} value={category}  />
                {category}
            </label>
        </>
    )
}

export default CategoryInput

