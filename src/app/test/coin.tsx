import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { redirect } from "next/navigation";
import React from "react";

const Coin = ({ Coin }:any) => {
  return (
    <Card
      // minW={"min-content"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      bg={"gray.700"}
      color={"white"}
      px={2}
      flex={1}
      className="duration-500 hover:scale-105 hover:z-10 hover:shadow-md"
    >
      <Image
        objectFit="contain"
        maxW={{ base: "90%", sm: "190px" }}
        src={Coin.large}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md" overflow={"hidden"}>
            {Coin.name}
          </Heading>

          <Text py="2">{Coin.symbol}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="blue">
            Buy
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default Coin;
