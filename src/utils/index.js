export const getFilteredByPriceProducts = (givenData, thresholdPrice) => givenData.filter(({ price }) => +price > thresholdPrice)

export const getFilteredByCategoriesProducts = (givenFilteredByPriceData, arrOfCategories) => arrOfCategories.length ? givenFilteredByPriceData.filter(({ categoryName }) => arrOfCategories.includes(categoryName)) : givenFilteredByPriceData

export const getFilteredByWeightProducts = (givenFilteredByCategoriesData, arrOfWeight) => {
    return givenFilteredByCategoriesData.filter(({ weight }) => arrOfWeight.min < weight && weight < arrOfWeight.max)
}

export const getFilteredByRatingProducts = (givenFilteredByWeightData, thresholdRating) => givenFilteredByWeightData.filter(({ ratings }) => ratings > thresholdRating)

export const getSortedAndFilteredData = (givenFilteredByRatingProducts, user_sort_filter) => {
    return user_sort_filter.sort ? user_sort_filter.sort === "low-to-high" ? givenFilteredByRatingProducts.sort(function (a, b) { return a.price - b.price }) : givenFilteredByRatingProducts.sort(function (a, b) { return b.price - a.price }) : givenFilteredByRatingProducts
}
