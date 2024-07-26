import React, { useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Text, Heading, Stack, AspectRatio } from '@chakra-ui/react';


export const Product = ({ props }) => {
  return (
    <Card id={props.id} variant='outline'>
      <CardBody>
        <AspectRatio ratio={1/1} >
          <Image src={props.image} borderRadius='xl' fit="none"/> 
        </AspectRatio>
        <Stack spacing={4} marginBlockStart={4}>
          <Heading 
            noOfLines={2} 
            size='lg'
            fontWeight={700}
            >{props.title}</Heading>
          <Text noOfLines={3}>{props.description}</Text>
          <Text fontSize={24} as='b'>${props.price}</Text>
        </Stack>
      </CardBody>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}
