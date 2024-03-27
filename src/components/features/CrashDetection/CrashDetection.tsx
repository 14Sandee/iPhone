import { Box, Button, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const CrashDetection = () => {
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    return (
        <Box ref={ref} h={{ base: '120vh', md: '130vh' }} as='section' pos={'relative'} bg="#000" pt={{ base: 5, md: 10 }}>
            <AnimatePresence key='crash'>
                <Box maxW={'6xl'} mx='auto' bg={'#101010'} pos={'relative'} w='full' h='95%' pb={20}>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <Box overflow={'hidden'} >
                            <Box overflow={'hidden'} minH={{ base: 'lg', md: '2xl' }} bgImage={'./images/crashdetection.jpeg'} bgPosition={'center'} bgSize={'cover'}>
                                <Stack py={{ base: 10, md: 20 }} px={{ base: 16, md: 20 }} maxW={'5xl'} mx={'auto'}>
                                    <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '6xl' }} fontWeight={600}>
                                        In an emergency,<br /> iPhone has your back.
                                    </Heading>
                                </Stack>
                            </Box>
                            <HStack maxW={'5xl'} mx={{ base: 16, md: 'auto' }} px={{ base: 4, md: 20 }} mt={12} spacing={{ base: 10, md: 20 }} alignItems={'start'} justifyContent={'start'}>
                                <Text maxW={{ base: '80%', md: '60%' }} color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                    iPhone also has
                                    <Text as={'span'} color={'#fff'}>  Crash Detection</Text>,  a vital safety feature that has helped
                                    save lives.
                                </Text>
                            </HStack>
                        </Box>
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '240px', md: '260px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div key='crash' style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>Learn how it all works</Text>
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
