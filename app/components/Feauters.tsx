import {
  Box,
  HStack,
  Stack,
  Text,
  Icon,
  Heading,
  Flex,
} from '@chakra-ui/react';
import React from 'react';
import { MoneyBackIcon, MonthlySubIcon, SetupIcon } from '../icons/Icon';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Feauters() {
  return (
    <Box
      maxW="1024px"
      m="auto"
      fontWeight="700"
      fontSize="18px"
      mt="60px"
      pb="130px"
      bg="#FFFFFF"
      className={inter.className}
    >
      <Stack>
        <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
          <HStack m="25px">
            <Icon as={MoneyBackIcon}></Icon>
            <Text pl="24px">30 days money back Guarantee</Text>
          </HStack>
          <HStack m="25px">
            <Icon as={SetupIcon}></Icon>
            <Text pl="24px">No setup fees 100% hassle-free</Text>
          </HStack>
          <HStack m="25px">
            <Icon as={MonthlySubIcon}></Icon>
            <Text pl="24px">No monthly subscription Pay once and for all</Text>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
}
