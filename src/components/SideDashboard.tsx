import { Box, Divider, Heading, VStack } from '@chakra-ui/react'
import React from 'react'

const SideDashboard = () => (
  <div className="overflow-x-hidden bg-slate-900 ">
    <VStack className='text-white h-full mr-14' gap={2} pt={4}>
      <div className="order-3 flex m-2 p-2 gap-4">
        <img className="rounded-full w-7"
          src="https://i.pinimg.com/originals/1e/c4/62/1ec4624b6606c8c358e41c85ccdd20a9.jpg"
          alt="" />
        <Heading fontSize={"2xl"} className='font'>TradeIn</Heading>
      </div>
    </VStack>
    <span className="text-white opacity-70 text-xs lg:ml-9">
      INDEX LIST   {" "}

    </span>
    <span className="text-white opacity-70 lg:mr-10 float-right">+</span>
    <div>
    <Box w="230px" h="50px" bg="purple.200" opacity={0.1} borderRadius={7} display="flex" alignItems="center" justifyContent="center">
      {/* Your content */}
    </Box>
    </div>
  </div>


)

export default SideDashboard
