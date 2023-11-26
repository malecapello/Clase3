import React from "react";
import "./CardP.css"
import { Box, ChakraProvider, Image, Text } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter, Button, Stack, Heading } from '@chakra-ui/react'


const CardP = () => {
  return (
    <ChakraProvider>

      <Card className="Card"

        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
      >
        <Image
          objectFit='cover'
          maxW={{ base: '100%', sm: '200px' }}
          src="https://mayor.lenceriamoda.com/images/products_gallery/6543dba4f16db412134234.jpg"
          alt='Caffe Latte'
        />

        <Stack>
          <CardBody>
            <Heading size='md'>PIJAMA BRIANA BORDO</Heading>

            <Text py='2'>
              Pijama de modal con detalles de puntilla. Musculosa con breteles regulables, con ganchitos metálicos, con detalles de Brillos al frente. Short con detalle de puntilla. Marca Bianca Secreta.
            </Text>
            <Text>Precio: $10.999</Text>
            <Text>SKU: 24034</Text>
            <Text>Cantidad: En Stock</Text>
          </CardBody>

          <CardFooter>
            <Button variant='solid' colorScheme='blue'>
              Comprar
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </ChakraProvider>


  )
}

export { CardP }