const CategoryInput = ({ filterCategories, category, categoryHandler }) => {
    return (
        <label>
            <input checked={filterCategories.includes(category)} type="checkbox" name="filter-category" onClick={() => categoryHandler(category)} value={category} />
            {category}
        </label>
    )
}

export default CategoryInput

