import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../index';
import { useContext } from 'react';


const WishlistCard = ({ productImage, ratings, title, price, availability, _id, wishlist_btn_handler, remove_wishlist_btn_handler, move_to_cart_btn_handler, id, cart_btn_handler }) => {
    const { cartData } = useContext(AuthContext)
    const existing_id = id
    const { logged_user } = useContext(AuthContext)
    const is_Wishlisted = logged_user.wishlist.find(({ id }) => id === existing_id)
    const in_cart = cartData.length > 0 ? cartData.find(({ id }) => id === existing_id) : false
    console.log("from productcard>>", logged_user.wishlist)

    const soldOut = !availability;
    return (
        <>
            <div style={{ borderTop: "5px solid rgb(60,69,69, 0.8)", position: "relative" }}>
                <Card maxW='xs'>
                    <Link to={`/products/${_id}`}>
                        <CardBody>
                            <Image
                                src={productImage}
                                alt='Green double couch with wooden legs'
                                borderRadius='lg'
                                objectFit='s' // Ensure the entire image is visible
                                boxSize='250px'
                            />

                            <Stack mt='6' spacing='3'>
                                <div className='product-card-title-container' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Heading size='md'>{title}</Heading>
                                    <p>★{ratings}</p>
                                </div>

                                {/* <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text> */}
                                <Text color='blue.600' fontSize='2xl'>
                                    ${price}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Link>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            {in_cart ?
                                <Link to="/cart">
                                    <Button border='1px solid red'
                                        variant='ghost' colorScheme='red'>
                                        Go to Cart
                                    </Button>
                                </Link>
                                //     <Button isDisabled
                                //     variant='ghost' colorScheme='blue'>
                                //     Already in cart
                                // </Button>
                                :
                                <Button onClick={move_to_cart_btn_handler} isDisabled={soldOut}
                                    variant='solid' colorScheme='blue'>
                                    Move to cart
                                </Button>
                            }


                            {is_Wishlisted ?
                                <Button
                                    variant='ghost' colorScheme='blue' border="1px" onClick={remove_wishlist_btn_handler}>
                                    Remove
                                </Button> :
                                <Button onClick={wishlist_btn_handler} isDisabled={soldOut} variant='ghost' colorScheme='blue'>
                                    Wishlist
                                </Button>}
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                {soldOut && <img src={""} style={{ width: "100px", position: "absolute", top: "-25px", right: "13px", opacity: "0.5", transform: "rotate(-30deg)" }} />}
            </div >
        </>
    )
}

export default WishlistCard