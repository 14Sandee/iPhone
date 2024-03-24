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
    return (
        <Box ref={chipRef} h={'225vh'} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <HStack w={'full'} justifyContent={'center'} spacing={0}>
                                    <Image src='./src/assets/images/a17chip.jpeg' alt='chip' boxSize={44} />
                                </HStack>
                            </motion.div>
                        </>
                    }
                </Box>
                <Box pos={'relative'} w='full' h='51%'>
                    <Box maxW={'5xl'} py={{ base: 16, md: 32 }} mx={'auto'} overflow={'hidden'}>
                        <Stack alignItems={'center'} spacing={0} mx={{ base: 2, md: 4 }}>
                            <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '7xl' }} fontWeight={600}>
                                A17 Pro chip.
                            </Heading>
                            <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '7xl' }} fontWeight={600}>
                                A monster win for gaming.
                            </Heading>
                            <Text mt={8} color={'#86868b'} fontSize={{ base: 'xl', md: '2xl' }} fontWeight={600}>
                                It’s here. The biggest redesign in the history of Apple GPUs.
                            </Text>
                        </Stack>
                        <Stack ref={ref} mt={20} spacing={12} className='grid-container' maxW={'5xl'} mx={'auto'} pos={'absolute'} left={'50%'} w='full' overflow={'hidden'}>
                            <Box w={'full'}>
                                <Image pos={'sticky'} zIndex={9} src='./src/assets/images/iphoneframe.png' alt='iphoneframe' w={'full'} h='lg' objectFit='contain' />
                                <Box pos={'absolute'} zIndex={8} top={6} rounded={40} left={4} w={'97%'} h={'auto'} overflow={'hidden'}>
                                    <video autoPlay muted playsInline>
                                        <source src='./src/assets/videos/game.mp4' type="video/mp4" style={{ objectFit: 'cover', }} />
                                    </video>
                                </Box>
                                <Text color={'#86868b'} textAlign={'center'} fontSize={'xl'} fontWeight={600} mt={4}>
                                    Honkai: Star Rail
                                </Text>
                            </Box>
                            <HStack spacing={{ base: 10, md: 20 }} alignItems={'start'} justifyContent={'space-around'}>
                                <Stack spacing={4} maxW={'33%'}>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                        A17 Pro is an entirely new class of iPhone chip that delivers our <Text as={'span'} color={'#fff'}>best graphics performance by far</Text>
                                    </Text>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                        Mobile <Text as={'span'} color={'#fff'}>games will look and feel so immersiver</Text>
                                        , with incredibly detailed environments and more realistic characters. And with industry-leading speed and efficiency, A17 Pro takes fast and runs with it.
                                    </Text>
                                </Stack>
                                <Stack spacing={0} maxW={'33%'}>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>New</Text>
                                    <Text color={'#fff'} fontSize={'5xl'} fontWeight={600} lineHeight={'120%'}>Pro-class GPU</Text>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>with 6 cores</Text>
                                </Stack>
                            </HStack>
                        </Stack>
                    </Box>
                    <SectionButton isInView={isInView2} width='270px'>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>Go depper on A17 Pro</Text>
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
