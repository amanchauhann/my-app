import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react"
import "../Cart.css"
import { useContext } from "react"
import { AuthContext } from "../../../index"

const CartCard = ({ productImage, title, brand, description, categoryName, weight, price, qty, qty_increment_btn, qty_decrement_btn, remove_cart_btn, move_wishlist_btn, id }) => {
    const existing_id = id
    const { logged_user } = useContext(AuthContext)
    const is_Wishlisted = logged_user?.wishlist?.length > 0 ? logged_user?.wishlist?.find(({ id }) => id === existing_id) : false
    return (
        <>
            <div style={{ padding: "0.1rem", border: "1px solid grey", borderRadius: "5px", maxWidth: "60rem" }}>
                <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                    size="xs"
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={productImage}
                        alt='Caffe Latte'
                    />

                    <Stack padding="1rem">
                        <CardBody>
                            <Heading size='md'>{title}</Heading>
                            <Text> {brand}</Text>
                            <Text py='2'>
                                <span style={{ fontWeight: "500" }}>
                                    Description :
                                </span>
                                {description}
                            </Text>
                            <Text>
                                <span style={{ fontWeight: "500" }}>Category :
                                </span>
                                {categoryName}</Text>
                            <Text>
                                <span style={{ fontWeight: "500" }}>
                                    Weight :
                                </span>
                                {weight}Kg
                            </Text>
                        </CardBody>

                        <CardFooter display="flex" flexDirection="column" gap="1rem">
                            <div className="qty_mgmt">
                                <p className="decrement_qty qty-btn" onClick={qty_decrement_btn}><i class="bi bi-dash-circle"></i></p>
                                <p className="cart_qty">{qty}</p>
                                <p className="increment_qty qty-btn" onClick={qty_increment_btn}><i class="bi bi-plus-circle"></i></p>
                            </div>
                            <Text fontWeight={"500"} fontSize='20px'>${price}</Text>
                            <div className="cart_btn_grp">
                                <Button onClick={remove_cart_btn} variant='solid' colorScheme='blue'>
                                    Remove from Cart
                                </Button>
                                {is_Wishlisted ? <Button isDisabled>Wishlisted</Button> :
                                    <Button onClick={move_wishlist_btn} variant='ghost' colorScheme='blue'>
                                        Move to wishlist
                                    </Button>
                                }

                            </div>

                        </CardFooter>
                    </Stack>
                </Card>
            </div >
        </>
    )
}

export default CartCard