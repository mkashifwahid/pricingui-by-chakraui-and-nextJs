'use client';

import { Inter } from '@next/font/google';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Pricing from './components/Pricing';
import Feauters from './components/Feauters';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
      <Feauters />
    </ChakraProvider>
  );
}
