import { Box, Button, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const GigaSection = () => {
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    const ref2 = useRef(null)
    const textRef = useRef(null)
    const isInView = useInView(textRef, { once: true })
    const isInView3 = useInView(ref2, { once: true })
    return (
        <Box ref={ref} h={{ base: '160vh', md: '235vh' }} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box mb={{ base: 10, md: 20 }} maxW={'4xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    <Stack w={{ base: '70%', md: 'auto' }} spacing={0} mx={{ base: 2, md: 4 }}>
                        <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                            Gigablast<br /> your gigabits.
                        </Heading>
                    </Stack>
                </Box>
                <Box pos={'relative'} w='full' h={{ base: '80%', md: '70%' }}>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <HStack spacing={8} maxW={'5xl'} mx={'auto'} justifyContent={'space-between'} alignItems={'start'} overflow={'hidden'}>
                            <Stack minH={{ base: 'md', md: '3xl' }} pos={'relative'} overflow={'hidden'}>
                                <Image src='./images/gigablast.jpeg' alt='action' w={'full'} h={'full'} objectFit='contain' />
                            </Stack>
                        </HStack>
                        <HStack ref={textRef} flexDirection={{ base: 'column', md: 'row' }} maxW={'4xl'} mx={'auto'} mt={12} spacing={{ base: 10, md: 20 }} alignItems={{ base: 'center', md: 'start' }} justifyContent={'space-around'}>
                            {isInView && <>
                                <Box maxW={{ base: '70%', md: '33%' }}>
                                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                            iPhone 15 Pro is the first iPhone to support USB 3,4 for a
                                            <Text as={'span'} color={'#fff'}> huge leap in data transfer speeds</Text> and faster pro workflows than ever before.
                                        </Text>
                                    </motion.div>
                                </Box>
                                <Stack maxW={{ base: '70%', md: '33%' }} flex={1} spacing={0}>
                                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Stack spacing={0}>
                                            <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>Upto</Text>
                                            <Text color={'#fff'} fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600} lineHeight={'120%'}>20x faster</Text>
                                            <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>file transfers</Text>
                                        </Stack>
                                    </motion.div>
                                </Stack>
                            </>}
                        </HStack>
                        <HStack ref={ref2} flexDirection={{ base: 'column', md: 'row' }} maxW={'4xl'} mx={'auto'} mt={12} spacing={{ base: 10, md: 20 }} alignItems={{ base: 'center', md: 'start' }} justifyContent={'space-around'}>
                            {isInView3 && <>
                                <Box maxW={{ base: '70%', md: '33%' }}>
                                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                            The new USB‑C connector lets you
                                            <Text as={'span'} color={'#fff'}> charge your Mac or iPad with the same cable you use to charge iPhone 15 Pro</Text>. Bye‑bye, cable clutter.
                                        </Text>
                                    </motion.div>
                                </Box>
                                <Box maxW={{ base: '70%', md: '33%' }}>
                                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                            And with all‑new Wi‑Fi 6E5 you'll get <Text as={'span'} color={'#fff'}>two times faster wireless speeds</Text>. So you can upload, download, and transfer files in a flash.
                                        </Text>
                                    </motion.div>
                                </Box>
                            </>}
                        </HStack>
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '240px', md: '250px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>Explore connectivity</Text>
                                    <IconButton rounded={'full'} colorScheme='primary' aria-label='arrow' icon={<IoAdd fontSize={24} fontWeight={700} />} />
                                </HStack>
                            </motion.div>
                        </HStack>
                    </SectionButton>
                </Box>
            </AnimatePresence >
        </Box >
    )
}
