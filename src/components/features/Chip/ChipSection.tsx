import { Box, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const ChipSection = () => {
    const chipRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(chipRef, { once: true })
    const isInView2 = useInView(ref, { once: false })
    const textRef = useRef(null);
    const isInView3 = useInView(textRef, { once: true })
    return (
        <Box ref={chipRef} h={{ base: '180vh', md: '225vh' }} as='section' pos={'relative'} bg="#000">
            <AnimatePresence key={'chip'}>
                <Box maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={{ base: 0, md: 10 }} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div key='chip' style={{ width: '100%' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <HStack w={'full'} justifyContent={'center'} spacing={0}>
                                    <Image src='./images/a17chip.jpeg' alt='chip' boxSize={{ base: 32, md: 44 }} />
                                </HStack>
                            </motion.div>
                        </>
                    }
                </Box>
                <Box pos={'relative'} w='full' h={{ base: '60%', md: '51%' }}>
                    <Box maxW={'5xl'} py={{ base: 16, md: 32 }} mx={'auto'} overflow={'hidden'}>
                        <Stack alignItems={'center'} spacing={0} mx={{ base: 2, md: 4 }}>
                            <Heading as='h2' color='#fff' textAlign={'center'} fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                A17 Pro chip.
                            </Heading>
                            <Heading as='h2' color='#fff' textAlign={'center'} fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                A monster win for gaming.
                            </Heading>
                            <Text mt={8} color={'#86868b'} mx={{ base: 8, md: 'auto' }} textAlign={{ base: 'center', md: 'left' }} fontSize={{ base: 'xl', md: '2xl' }} fontWeight={600}>
                                It’s here. The biggest redesign in the history of Apple GPUs.
                            </Text>
                        </Stack>
                        <Stack ref={ref} mt={20} spacing={12} className='grid-container' maxW={'5xl'} mx={'auto'} pos={'absolute'} left={'50%'} w='full' overflow={'hidden'}>
                            <Box w={'full'}>
                                <Image pos={'sticky'} zIndex={9} src='./images/iphoneframe.png' alt='iphoneframe' w={{ base: '90%', md: 'full' }} mx={{ base: 'auto' }} h={{ base: '3xs', md: 'lg' }} objectFit='contain' />
                                <Box pos={'absolute'} zIndex={8} top={{ base: 8, md: 6 }} rounded={40} left={{ base: 6, md: 4 }} w={{ base: '88%', md: '97%' }} h={'auto'} overflow={'hidden'}>
                                    <video autoPlay muted playsInline>
                                        <source src='./videos/game.mp4' type="video/mp4" style={{ objectFit: 'cover', }} />
                                    </video>
                                </Box>
                                <Text color={'#86868b'} textAlign={'center'} fontSize={'xl'} fontWeight={600} mt={4}>
                                    Honkai: Star Rail
                                </Text>
                            </Box>
                            <HStack ref={textRef} flexDirection={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 20 }} alignItems={{ base: 'start', md: 'start' }} mx={{ base: 16, md: 'auto' }} justifyContent={'space-around'}>
                                {isInView3 && <>
                                    <Box maxW={{ base: '95%', md: '33%' }}>
                                        <motion.div key='chip-2' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={4}>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                                    A17 Pro is an entirely new class of iPhone chip that delivers our <Text as={'span'} color={'#fff'}>best graphics performance by far</Text>
                                                </Text>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                                    Mobile <Text as={'span'} color={'#fff'}>games will look and feel so immersiver</Text>
                                                    , with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                                                </Text>
                                            </Stack>
                                        </motion.div>
                                    </Box>
                                    <Box maxW={{ base: '95%', md: '33%' }}>
                                        <motion.div key='chip3' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={0}>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>New</Text>
                                                <Text color={'#fff'} fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600} lineHeight={'120%'}>Pro-class GPU</Text>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>with 6 cores</Text>
                                            </Stack>
                                        </motion.div>
                                    </Box>
                                </>}
                            </HStack>
                        </Stack>
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '250px', md: '270px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div key='chip4' style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>Go depper on A17 Pro</Text>
                                    <IconButton rounded={'full'} colorScheme='primary' aria-label='arrow' icon={<IoAdd fontSize={24} fontWeight={700} />} />
                                </HStack>
                            </motion.div>
                        </HStack>
                    </SectionButton>
                </Box >
            </AnimatePresence >
        </Box >
    )
}
