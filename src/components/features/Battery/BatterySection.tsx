import { Box, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const BatterySection = () => {

    const ref = useRef(null)
    const ref2 = useRef(null)
    const isInView = useInView(ref, { once: true })
    const isInView2 = useInView(ref2, { once: true })

    return (
        <Box h={'225vh'} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                {/* <Box maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <HStack w={'full'} justifyContent={'center'} spacing={0}>
                                    <Image src='./src/assets/images/a17chip.jpeg' alt='chip' boxSize={44} />
                                </HStack>
                            </motion.div>
                        </>
                    }
                </Box> */}
                <Box pos={'relative'} w='full' h='51%'>
                    <Box maxW={'5xl'} py={{ base: 16, md: 32 }} mx={'auto'} overflow={'hidden'}>
                        <Stack alignItems={'center'} spacing={0} mx={{ base: 2, md: 4 }}>
                            <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '7xl' }} fontWeight={600}>
                                Battery life that’s
                            </Heading>
                            <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '7xl' }} fontWeight={600}>
                                positively Pro.
                            </Heading>
                            <Text maxW={'3xl'} mt={8} color={'#86868b'} fontSize={{ base: 'xl', md: '2xl' }} textAlign={'center'} fontWeight={600}>
                                Even with so many advanced new features, iPhone 15 Pro still gives you amazing all‑day battery life.
                            </Text>
                        </Stack>
                        <Stack mt={20} spacing={12} className='grid-container' maxW={'5xl'} mx={'auto'} pos={'absolute'} left={'50%'} w='full' overflow={'hidden'}>
                            <Box w={'full'}>
                                <Image pos={'sticky'} zIndex={9} src='./src/assets/images/iphoneframe.png' alt='iphoneframe' w={'full'} h='lg' objectFit='contain' />
                                <Box pos={'absolute'} zIndex={8} top={6} rounded={40} left={4} w={'97%'} h={'auto'} overflow={'hidden'}>
                                    <video autoPlay muted playsInline>
                                        <source src='./src/assets/videos/battery.mp4' type="video/mp4" style={{ objectFit: 'cover', }} />
                                    </video>
                                </Box>
                            </Box>
                            <HStack ref={ref} spacing={{ base: 10, md: 20 }} alignItems={'center'} justifyContent={'space-around'}>
                                <Box maxW={'33%'}>
                                    {isInView &&
                                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0} >
                                                <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>Up to</Text>
                                                <Text color={'#fff'} fontSize={'7xl'} fontWeight={600} lineHeight={'120%'}>29 hours</Text>
                                                <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>video playback on<br /> iPhone 15 Pro Max</Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                                <Box maxW={'33%'}>
                                    {isInView &&
                                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0}>
                                                <Text color={'#86868b'} fontSize={'2xl'} fontWeight={600}>
                                                    Add a MagSafe Charger for <Text as={'span'} color={'#fff'}>fast, efficient wireless charging</Text>
                                                </Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                            </HStack>
                            <HStack ref={ref2} spacing={{ base: 10, md: 20 }} alignItems={'center'} justifyContent={'space-around'}>
                                <Box maxW={'33%'}>
                                    {isInView2 &&
                                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0} >
                                                <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>Up to</Text>
                                                <Text color={'#fff'} fontSize={'7xl'} fontWeight={600} lineHeight={'120%'}>23 hours</Text>
                                                <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>video playback on<br /> iPhone 15 Pro</Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                                <Box maxW={'33%'}>
                                    {isInView2 &&
                                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={4} >
                                                <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                                    iPhone 15 Pro Max has up to 9 more hours video playback than iPhone 12 Pro Max
                                                </Text>
                                                <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                                    iPhone 15 Pro has up to 6 more hours video playback than iPhone 12 Pro
                                                </Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                            </HStack>
                        </Stack>
                    </Box>
                    {/* <SectionButton isInView={isInView2} width='270px'>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>Go depper on A17 Pro</Text>
                                    <IconButton rounded={'full'} colorScheme='primary' aria-label='arrow' icon={<IoAdd fontSize={24} fontWeight={700} />} />
                                </HStack>
                            </motion.div>
                        </HStack>
                    </SectionButton> */}
                </Box >
            </AnimatePresence >
        </Box >
    )
}
