import { Box, Button, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const CrashDetection = () => {
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    return (
        <Box ref={ref} h={'120vh'} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                {/* <Box mb={20} maxW={'4xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    <Stack spacing={0} mx={{ base: 2, md: 4 }}>
                        <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '7xl' }} fontWeight={600}>
                            Gigablast<br /> your gigabits.
                        </Heading>
                    </Stack>
                </Box> */}
                <Box maxW={'5xl'} mx='auto' bg={'#101010'} pos={'relative'} w='full' h='95%' pb={20}>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <Box overflow={'hidden'} >
                            <Box overflow={'hidden'} minH={'2xl'} bgImage={'./src/assets/images/crashdetection.jpeg'} bgPosition={'center'} bgSize={'cover'}>
                                <Stack py={{ base: 10, md: 20 }} px={{ base: 4, md: 20 }} maxW={'4xl'} mx={'auto'}>
                                    <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '6xl' }} fontWeight={600}>
                                        In an emergency,<br /> iPhone has your back.
                                    </Heading>
                                </Stack>
                            </Box>
                            <HStack maxW={'4xl'} mx={'auto'} px={{ base: 4, md: 20 }} mt={12} spacing={{ base: 10, md: 20 }} alignItems={'start'} justifyContent={'start'}>
                                <Text maxW={'60%'} color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                    iPhone also has
                                    <Text as={'span'} color={'#fff'}>  Crash Detection</Text>,  a vital safety feature that has helped
                                    save lives.
                                </Text>
                            </HStack>
                        </Box>
                    </Box>
                    <SectionButton isInView={isInView2} width='250px'>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>Explore connectivity</Text>
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
