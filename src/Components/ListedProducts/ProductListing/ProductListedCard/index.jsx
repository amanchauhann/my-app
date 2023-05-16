import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';

const ProductCard = ({productImage, ratings, title, price}) => {
    return(
        <div style={{borderTop: "5px solid rgb(60,69,69, 0.8)"}}>
        <Card maxW='xs'>
  <CardBody>
    <Image
      src={productImage}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
      objectFit='s' // Ensure the entire image is visible
      boxSize='250px'
    />
    
    <Stack mt='6' spacing='3'>
      <div className='product-card-title-container' style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
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
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Add to cart
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Wishlist
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

        </div>
        
    )
}

export default ProductCard