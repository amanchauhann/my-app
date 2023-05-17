// const {productsData, filteredPrice} = useContext(ContextData)
//     console.log(filteredPrice)
//     const filteredByPriceProducts = (productsData.filter(({price})=> +price>filteredPrice))
    export const getFilteredByPriceProducts = (givenData, thresholdPrice) => givenData.filter(({price})=> +price>thresholdPrice)