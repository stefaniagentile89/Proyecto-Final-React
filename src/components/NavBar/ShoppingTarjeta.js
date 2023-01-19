import { Box, Text, Heading, Image, Button, Flex, Link } from "@chakra-ui/react"


const ShoppingTarjeta = ({ prod, addToCart, deleteFromCart }) => {

    return (
        <Box
            p="20px"
            borderBottom="solid 1.5px black"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            >
                <Image
                    maxW="40px"
                    src={prod.img}
                    />
                <Heading
                    as="h4"
                    textAlign="center"
                    fontSize="0.8rem"
                    color="--backg-color"
                    >{prod.titulo}</Heading>
                <Flex
                    flexDir="column"
                    justify="center"
                    align="center"
                    >
                    <Button
                        onClick={() => addToCart(prod.id)}
                        w="5px"
                        h="25px"
                        color="--backg-color"
                        >+</Button>
                    <Text
                        w="65px"
                        textAlign="center"
                        color="--backg-color"
                        >{prod.precio * prod.cantidad}</Text>
                    <Button
                        onClick={() => deleteFromCart(prod.id)}
                        w="5px"
                        h="25px"
                        color="--backg-color"
                        >-</Button>
                </Flex>
                <Link
                    onClick={() => deleteFromCart(prod.id, true)}
                    >🗑️</Link>
        </Box>
    )
}

export default ShoppingTarjeta
