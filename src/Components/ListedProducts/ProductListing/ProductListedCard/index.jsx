import MainProductCard from '../../../Action/Common/MainProductCard';

const ProductCard = ({ ...product_props }) => {
  return (
    <>
      <MainProductCard {...product_props} />
    </>

  )
}

export default ProductCard