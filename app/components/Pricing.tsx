import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import CheckIcon from '../icons/Icon';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
export default function Pricing() {
  return (
    <Box mx="20px" className={inter.className}>
      <Box
        maxW="994px"
        margin="auto"
        mt="-150px"
        borderRadius="12px"
        overflow={'hidden'}
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
      >
        <Flex direction={{ base: 'column', md: 'column', lg: 'row' }}>
          <Box bg="#F0EAFB" p="60px" textAlign={'center'}>
            <Text fontWeight="800" fontSize="24px" ml="20px">
              Premium PRO
            </Text>
            <Heading fontWeight="800" fontSize="60px" mt="16px">
              $329
            </Heading>
            <Text fontWeight="500" fontSize="18px" mt="8px">
              billed just once
            </Text>
            <Button
              fontWeight="700"
              fontSize="16px"
              mt="24px"
              size="lg"
              colorScheme="purple"
              w={{ base: '200px', md: '200px', lg: '282px' }}
            >
              Get Started
            </Button>
          </Box>
          <Box p="50px" fontWeight="400" fontSize="16px" bg="#FFFFFF" mr="20px">
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <HStack>
                <Icon as={CheckIcon} />
                <Text>International calling and messaging API</Text>
              </HStack>
              <HStack>
                <Icon as={CheckIcon} />
                <Text>Additional phone numbers</Text>
              </HStack>
              <HStack>
                <Icon as={CheckIcon} />
                <Text>Automated messages via Zapier</Text>
              </HStack>
              <HStack>
                <Icon as={CheckIcon} />
                <Text>24/7 support and consulting</Text>
              </HStack>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
