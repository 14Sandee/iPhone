import { Box, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AnimatePresence, motion, useInView, useScroll } from 'framer-motion'

export const BatterySection = () => {

    const ref = useRef(null)
    const ref2 = useRef(null)
    const isInView = useInView(ref, { once: true })
    const isInView2 = useInView(ref2, { once: true })
    return (
        <Box h={{ base: '170vh', md: '200vh' }} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box pos={'relative'} w='full' h='51%'>
                    <Box maxW={'5xl'} py={{ base: 16, md: 32 }} mx={'auto'} overflow={'hidden'}>
                        <Stack w={{ base: '75%', md: 'auto' }} alignItems={{ base: 'start', md: 'center' }} spacing={0} mx={{ base: 'auto', md: 4 }}>
                            <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                Battery life that’s
                            </Heading>
                            <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                positively Pro.
                            </Heading>
                            <Text maxW={'3xl'} mt={8} color={'#86868b'} fontSize={{ base: 'lg', md: '2xl' }} textAlign={{ base: 'left', md: 'center' }} fontWeight={600}>
                                Even with so many advanced new features, iPhone 15 Pro still gives you amazing all‑day battery life.
                            </Text>
                        </Stack>
                        <Stack mt={20} spacing={12} className='grid-container' maxW={'5xl'} mx={'auto'} pos={'absolute'} left={'50%'} w='full' overflow={'hidden'}>
                            <Box w={'full'}>
                                <Image pos={'sticky'} zIndex={9} src='./images/iphoneframe.png' alt='iphoneframe' w={{ base: '90%', md: 'full' }} mx={{ base: 'auto' }} h={{ base: '3xs', md: 'lg' }} objectFit='contain' />
                                <Box pos={'absolute'} zIndex={8} top={{ base: 8, md: 6 }} rounded={40} left={{ base: 6, md: 4 }} w={{ base: '88%', md: '97%' }} h={'auto'} overflow={'hidden'}>
                                    <video autoPlay muted playsInline>
                                        <source src='./videos/battery.mp4' type="video/mp4" style={{ objectFit: 'cover', }} />
                                    </video>
                                </Box>
                            </Box>
                            <HStack mx={{ base: 16, md: 0 }} flexDirection={{ base: 'column', md: 'row' }} ref={ref} spacing={{ base: 5, md: 20 }} alignItems={{ base: 'start', md: 'center' }} justifyContent={'space-around'}>
                                <Box maxW={{ base: '85%', md: '33%' }}>
                                    {isInView &&
                                        <motion.div key={'battery'} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0} >
                                                <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>Up to</Text>
                                                <Text color={'#fff'} fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600} lineHeight={'120%'}>29 hours</Text>
                                                <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>video playback on<br /> iPhone 15 Pro Max</Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                                <Box maxW={{ base: '85%', md: '33%' }}>
                                    {isInView &&
                                        <motion.div key={'battery2'} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0}>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: '2xl' }} fontWeight={600}>
                                                    Add a MagSafe Charger for <Text as={'span'} color={'#fff'}>fast, efficient wireless charging</Text>
                                                </Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                            </HStack>
                            <HStack mx={{ base: 16, md: 0 }} flexDirection={{ base: 'column', md: 'row' }} ref={ref2} spacing={{ base: 5, md: 20 }} alignItems={{ base: 'start', md: 'center' }} justifyContent={'space-around'}>
                                <Box maxW={{ base: '85%', md: '33%' }}>
                                    {isInView2 &&
                                        <motion.div key={'battery3'} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0} >
                                                <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>Up to</Text>
                                                <Text color={'#fff'} fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600} lineHeight={'120%'}>23 hours</Text>
                                                <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>video playback on<br /> iPhone 15 Pro</Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                                <Box maxW={{ base: '85%', md: '33%' }}>
                                    {isInView2 &&
                                        <motion.div key={'battery4'} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={4} >
                                                <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                                    iPhone 15 Pro Max has up to 9 more hours video playback than iPhone 12 Pro Max
                                                </Text>
                                                <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                                    iPhone 15 Pro has up to 6 more hours video playback than iPhone 12 Pro
                                                </Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                            </HStack>
                        </Stack>
                    </Box>
                </Box >
            </AnimatePresence >
        </Box >
    )
}
