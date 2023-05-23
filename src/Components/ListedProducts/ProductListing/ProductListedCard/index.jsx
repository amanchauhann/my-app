import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import outofstock from "../../../../Logos/Utils/outofstock.png"
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, ContextData } from '../../../../index';
import MainProductCard from '../../../Action/Common/MainProductCard';

const ProductCard = ({ ...product_props }) => {
  // const existing_id = _id
  // const { logged_user } = useContext(AuthContext)
  // const is_Wishlisted = logged_user.wishlist.find(({ _id }) => _id === existing_id)
  // console.log("from productcard>>", logged_user.wishlist)

  // const soldOut = !availability;
  return (
    <>
      <MainProductCard {...product_props} />
    </>

  )
}

export default ProductCard