// const {productsData, filteredPrice} = useContext(ContextData)
//     console.log(filteredPrice)
//     const filteredByPriceProducts = (productsData.filter(({price})=> +price>filteredPrice))
export const getFilteredByPriceProducts = (givenData, thresholdPrice) => givenData.filter(({ price }) => +price > thresholdPrice)
// userFilters.categories.length ? filteredByPriceProducts.filter(({categoryName}) => userFilters.categories.includes(categoryName)) : filteredByPriceProducts
export const getFilteredByCategoriesProducts = (givenFilteredByPriceData, arrOfCategories) => arrOfCategories.length ? givenFilteredByPriceData.filter(({ categoryName }) => arrOfCategories.includes(categoryName)) : givenFilteredByPriceData
// filteredByCategoryProducts.filter(({weight})=> (userFilters.weight).min<weight && weight<(userFilters.weight).max)
export const getFilteredByWeightProducts = (givenFilteredByCategoriesData, arrOfWeight) => {
    return givenFilteredByCategoriesData.filter(({ weight }) => arrOfWeight.min < weight && weight < arrOfWeight.max)
}
// filteredByWeightProducts.filter(({ratings})=> ratings>userFilters.ratings)
export const getFilteredByRatingProducts = (givenFilteredByWeightData, thresholdRating) => givenFilteredByWeightData.filter(({ ratings }) => ratings > thresholdRating)

// const sortedAndFilteredData = userFilters.sort ? userFilters.sort === "low-to-high" ? filteredByRatingsProducts.sort(function (a, b) { return a.price - b.price }) : filteredByRatingsProducts.sort(function (a, b) { return b.price - a.price }) : filteredByRatingsProducts

export const getSortedAndFilteredData = (givenFilteredByRatingProducts, user_sort_filter) => {
    return user_sort_filter.sort ? user_sort_filter.sort === "low-to-high" ? givenFilteredByRatingProducts.sort(function (a, b) { return a.price - b.price }) : givenFilteredByRatingProducts.sort(function (a, b) { return b.price - a.price }) : givenFilteredByRatingProducts
}
