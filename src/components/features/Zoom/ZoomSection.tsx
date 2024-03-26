import { Box, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const ZoomSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    return (
        <Box h={{ base: '160vh', md: '190vh' }} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box pos={'relative'} w='full' h={{ base: '75%', md: '64%' }}>
                    <Box maxW={'5xl'} py={{ base: 16, md: 32 }} mx={'auto'} overflow={'hidden'}>
                        <Stack alignItems={'center'} spacing={0} mx={{ base: 2, md: 4 }}>
                            <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                120 mm of
                            </Heading>
                            <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                pure Pro zoom.
                            </Heading>
                        </Stack>
                        <Stack mt={20} spacing={16} className='grid-container' maxW={'5xl'} mx={'auto'} pos={'absolute'} left={'50%'} w='full' overflow={'hidden'}>
                            <Box h={{ base: 'lg', md: 'auto' }} overflow={'hidden'}>
                                <video ref={videoRef} autoPlay muted playsInline style={{ height: '100%', objectFit: 'cover' }}>
                                    <source src='./videos/zoom.mp4' type="video/mp4" />
                                </video>
                                <Text cursor={'pointer'} onClick={() => videoRef.current?.play()} color={'#86868b'} textAlign={'center'} fontSize={'xl'} fontWeight={600} mt={4}>
                                    Replay
                                </Text>
                            </Box>
                            <HStack ref={ref} flexDirection={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 20 }} alignItems={{ base: 'center', md: 'start' }} justifyContent={'space-around'}>
                                <Box maxW={{ base: '80%', md: '33%' }}>
                                    {isInView2 &&
                                        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Stack spacing={4}>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                                    For iPhone 15 Pro Max, we designed a 5x Telephoto camera with <Text as={'span'} color={'#fff'}>the longest optical zoom of any iPhone ever </Text>
                                                    to fit in our compact Pro camera system.
                                                </Text>
                                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                                    Now you can <Text as={'span'} color={'#fff'}>take sharper close‑ups from farther away </Text>
                                                    — like a phenomenal photo of your friend or a goal in your kid’s soccer match.
                                                </Text>
                                            </Stack>
                                        </motion.div>
                                    }
                                </Box>
                                <Box maxW={{ base: '80%', md: '33%' }}>
                                    {isInView2 && <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Stack spacing={0}>
                                            <Text color={'#fff'} fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600} lineHeight={'120%'}>5x optical</Text>
                                            <Text color={'#fff'} fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600} lineHeight={'120%'}>Zoom</Text>
                                            <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>with the 120 mm lens</Text>
                                        </Stack>
                                    </motion.div>}
                                </Box>
                            </HStack>
                        </Stack>
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '280px', md: '300px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>Nerd out on 5x Telephoto</Text>
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
