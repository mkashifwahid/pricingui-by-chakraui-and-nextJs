'use client';
import { ChakraProvider } from '@chakra-ui/react';
import Header from './components/Header';
import Pricing from './components/Pricing';

export default function Home() {
  return (
    <ChakraProvider>
      <Header />
      <Pricing />
    </ChakraProvider>
  );
}
