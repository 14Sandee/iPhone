import { Box, Button, Divider, HStack, Heading, IconButton, Image, SimpleGrid, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd } from 'react-icons/io5'

export const IosSection = () => {
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    const textRef = useRef(null)
    const isInView = useInView(textRef, { once: true })
    return (
        <Box ref={ref} h={{ base: '170vh', md: '185vh' }} as='section' pos={'relative'} bg="#000" pt={{ base: 5, md: 10 }} pb={{ base: 10, md: 20 }}>
            <AnimatePresence key='ios'>
                <Box maxW={'6xl'} mx='auto' bg={'#101010'} pos={'relative'} w='full' h='95%' pb={20}>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <Box overflow={'hidden'} >
                            <Box maxW={'5xl'} mx={'auto'} px={{ base: 4, md: 20 }}>
                                <Stack spacing={0} py={{ base: 10, md: 20 }} px={{ base: 16, md: 20 }} alignItems={'start'}>
                                    <Heading as='h2' color='#86868b' fontSize={{ base: '4xl', md: '6xl' }} fontWeight={600}>
                                        iOS 17.
                                    </Heading>
                                    <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '6xl' }} fontWeight={600}>
                                        Style it out. Swap it over.
                                    </Heading>
                                    <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '6xl' }} fontWeight={600}>
                                        Sticker it up.
                                    </Heading>
                                </Stack>
                                <SimpleGrid columns={[3, 3]} spacing={{ base: 5, md: 12 }} mt={8}>
                                    <Stack spacing={4}>
                                        <Image src='./images/contact1.jpeg' alt='contact1' w={'full'} objectFit='contain' />
                                    </Stack>
                                    <Stack spacing={4}>
                                        <Image src='./images/contact2.jpeg' alt='contact1' w={'full'} objectFit='contain' />
                                    </Stack>
                                    <Stack spacing={4}>
                                        <Image src='./images/contact3.jpeg' alt='contact1' w={'full'} objectFit='contain' />
                                    </Stack>
                                </SimpleGrid>
                                <SimpleGrid ref={textRef} columns={[1, 3]} spacing={{ base: 5, md: 12 }} mx={{ base: 12, md: 'auto' }} mt={8}>
                                    {isInView && <>
                                        <motion.div key='ios' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Text color={'#86868b'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                                                <Text as={'span'} color={'#fff'}>Contact Poster</Text>. Create your own poster that contacts will see when you call. Pick a favourite pic or Memoji, pair it with a favourite font and there you have it — your very own calling card.
                                            </Text>
                                        </motion.div>
                                        <motion.div key='ios2' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Text color={'#86868b'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                                                <Text as={'span'} color={'#fff'}>Name Drop</Text>. Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.
                                            </Text>
                                        </motion.div>
                                        <motion.div key='ios3' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Text color={'#86868b'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                                                <Text as={'span'} color={'#fff'}>Live Stickers</Text>. Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.
                                            </Text>
                                        </motion.div>
                                    </>}
                                </SimpleGrid>
                            </Box>
                        </Box>
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '290px', md: '310px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>Find out more about iOS 17</Text>
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
