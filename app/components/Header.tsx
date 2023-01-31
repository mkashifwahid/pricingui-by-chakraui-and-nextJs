import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Header() {
  return (
    <Box as="section" className={inter.className}>
      <Box
        textAlign={{ base: 'left', md: 'left', lg: 'center' }}
        color="#F7FAFC"
        bg="#6B46C1"
        height="400px"
        pt="90px"
        px="32px"
      >
        <Heading
          fontWeight="800"
          fontSize={{ base: '30px', md: '30px', lg: '48px' }}
        >
          Simple pricing for your business
        </Heading>
        <Text
          fontWeight="500"
          fontSize={{ base: '18px', md: '18px', lg: '24px' }}
          pt="16px"
        >
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
}
