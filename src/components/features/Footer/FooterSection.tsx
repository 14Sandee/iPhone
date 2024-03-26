import { Box, HStack, Heading, Stack, Text } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'

export const FooterSection = () => {
    return (
        <Box as='footer' pos={'relative'} bg="#000" py={{ base: 20, md: 20 }}>
            <AnimatePresence>
                <Box maxW={'7xl'} pb={{ base: 5, md: 10 }} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600}>
                        iPhone
                    </Heading>
                </Box>
                <HStack flexDirection={{ base: 'column', md: 'row' }} maxW={'7xl'} mx={{ base: 8, md: 'auto' }} spacing={{ base: 12, md: 16 }} w={{ base: '80%', md: 'full' }} py={{ base: 5, md: 10 }} alignItems={'start'}>
                    <Stack spacing={6} overflow={'hidden'} borderColor={'#86868b'}>
                        <Text color='#86868b' fontSize={'sm'}>Explore iPhone</Text>
                        <Stack spacing={3}>
                            <Text cursor={'pointer'} color='white' fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={'120%'}>Explore All iPhone</Text>
                            <Text cursor={'pointer'} color='white' fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={'120%'}>iPhone 15 Pro</Text>
                            <Text cursor={'pointer'} color='white' fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={'120%'}>iPhone 15</Text>
                            <Text cursor={'pointer'} color='white' fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={'120%'}>iPhone 14</Text>
                            <Text cursor={'pointer'} color='white' fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={'120%'}>iPhone 13</Text>
                            <Text cursor={'pointer'} color='white' fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={'120%'}>iPhone SE</Text>
                        </Stack>
                        <Stack spacing={3}>
                            <Text cursor={'pointer'} color='white' fontSize={'sm'} fontWeight={600}>Compare iPhone</Text>
                            <Text cursor={'pointer'} color='white' fontSize={'sm'} fontWeight={600}>Switch from Android</Text>
                        </Stack>
                    </Stack>
                    <HStack spacing={{ base: 12, md: 16 }} alignItems={'start'}>
                        <Stack spacing={6} overflow={'hidden'} borderColor={'#86868b'}>
                            <Text color='#86868b' fontSize={'sm'}>Shop iPhone</Text>
                            <Stack spacing={3}>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>Shop iPhone</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>iPhone Accessories</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>MagSafe Accessories</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>Trade In</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>Ways to Buy</Text>
                            </Stack>
                        </Stack>
                        <Stack spacing={6} overflow={'hidden'} borderColor={'#86868b'}>
                            <Text color='#86868b' fontSize={'sm'}>Go Further</Text>
                            <Stack spacing={3}>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>iPhone Support</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>iOS 17</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>iPhone Privacy</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>iCloud</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>Wallet</Text>
                                <Text cursor={'pointer'} color='white' fontSize={{ base: 'sm', md: 'sm' }} fontWeight={600}>Siri</Text>
                            </Stack>
                        </Stack>
                    </HStack>
                </HStack>
            </AnimatePresence >
        </Box >
    )
}
