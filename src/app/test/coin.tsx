import { Card, CardHeader, CardBody, CardFooter ,Image, Stack, Heading, Text, Button } from '@chakra-ui/react'
import React from 'react'

const Coin = ({Coin}) => {
  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  bg={"gray.900"}
  color={"white"}
  mt={2}
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={Coin.large}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md' overflow={"hidden"}>{Coin.name}</Heading>

      <Text py='2'>
        {Coin.symbol}
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy
      </Button>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default Coin
