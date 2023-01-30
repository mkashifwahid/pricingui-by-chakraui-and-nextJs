import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

export default function Header() {
  return (
    <>
      <Box
        as="section"
        color="#F7FAFC"
        bg="#6B46C1"
        textAlign="center"
        height="400px"
        pt="90px"
        pb="190px"
        px="32px"
      >
        <Heading fontWeight="800" fontSize="48px">
          Simple pricing for your business
        </Heading>
        <Text fontWeight="500" fontSize="24px" pt="16px">
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </>
  );
}
