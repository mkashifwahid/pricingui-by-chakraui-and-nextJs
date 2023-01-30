import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import CheckIcon from '../icons/Icon';

export default function Pricing() {
  return (
    <Box bg="#FFFFFF">
      <Flex>
        <Box bg="#F0EAFB" ml="220px" px="110px">
          <Text fontWeight="800" fontSize="24px">
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
            w="282px"
          >
            Get Started
          </Button>
        </Box>
        <Box fontWeight={400} fontSize="16px">
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
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
        </Box>
      </Flex>
    </Box>
  );
}
