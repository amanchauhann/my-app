// const {productsData, filteredPrice} = useContext(ContextData)
//     console.log(filteredPrice)
//     const filteredByPriceProducts = (productsData.filter(({price})=> +price>filteredPrice))
    export const getFilteredByPriceProducts = (givenData, thresholdPrice) => givenData.filter(({price})=> +price>thresholdPrice)
    // userFilters.categories.length ? filteredByPriceProducts.filter(({categoryName}) => userFilters.categories.includes(categoryName)) : filteredByPriceProducts
    export const getFilteredByCategoriesProducts = (givenFilteredByPriceData, arrOfCategories) => arrOfCategories.length ? givenFilteredByPriceData.filter(({categoryName}) => arrOfCategories.includes(categoryName)) : givenFilteredByPriceData
    // filteredByCategoryProducts.filter(({weight})=> (userFilters.weight).min<weight && weight<(userFilters.weight).max)
    export const getFilteredByWeightProducts = (givenFilteredByCategoriesData, arrOfWeight) => {
        return givenFilteredByCategoriesData.filter(({weight})=> arrOfWeight.min<weight && weight<arrOfWeight.max)
    }
    // filteredByWeightProducts.filter(({ratings})=> ratings>userFilters.ratings)
    export const getFilteredByRatingProducts = (givenFilteredByWeightData, thresholdRating) => givenFilteredByWeightData.filter(({ratings})=> ratings>thresholdRating)