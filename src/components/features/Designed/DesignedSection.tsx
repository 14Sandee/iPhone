import { Box, Button, Divider, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const DesignedSection = () => {
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    return (
        <Box ref={ref} h={'100vh'} as='section' pos={'relative'} bg="#000" pt={{ base: 5, md: 10 }}>
            <AnimatePresence>
                <Box maxW={'6xl'} mx='auto' bg={'#101010'} pos={'relative'} w='full' h='95%' pb={20}>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <Box overflow={'hidden'} >
                            <Box maxW={'5xl'} mx={'auto'} px={{ base: 4, md: 20 }}>
                                <Stack spacing={4} py={{ base: 10, md: 20 }} alignItems={'start'}>
                                    <Image src='./src/assets/images/designed.jpeg' alt='designed' h={16} objectFit='contain' />
                                    <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '6xl' }} fontWeight={600}>
                                        Designed to<br /> make a difference.
                                    </Heading>
                                </Stack>
                                <Divider orientation='horizontal' />
                                <HStack mt={12} spacing={{ base: 10, md: 10 }} alignItems={'start'} justifyContent={'space-between'}>
                                    <Text maxW={'50%'} color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                        <Text as={'span'} color={'#fff'}>What matters to you matters to Apple too.</Text> From privacy protections that give you more control over your data. To using more recycled materials that minimise environmental impact. To creating built‑in features that make iPhone accessible to all.
                                    </Text>
                                    <Stack maxW={'40%'} flex={1} spacing={0}>
                                        <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>The internal structural frame of iPhone 15 Pro has</Text>
                                        <Text color={'#fff'} fontSize={'4xl'} fontWeight={600} lineHeight={'120%'}>100% recycled aluminium</Text>
                                    </Stack>
                                </HStack>
                            </Box>
                        </Box>
                    </Box>
                    <SectionButton isInView={isInView2} width='280px'>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>What iPhone stands for</Text>
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
