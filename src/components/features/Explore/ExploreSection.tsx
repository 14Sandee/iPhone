import { Box, Grid, GridItem, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { AnimatePresence, motion, useInView, useScroll } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import './styles.css'
import { IoAdd } from 'react-icons/io5'

export const ExploreSection = () => {
    const exploreRef = useRef(null)
    const ref = useRef(null)
    const scrollRef = useRef(null);
    const textRef = useRef(null);
    const isInView = useInView(exploreRef, { once: true })
    const isInView2 = useInView(ref, { once: false })
    const isInView3 = useInView(textRef, { once: true })
    const { scrollYProgress } = useScroll({
        offset: ["start center", "end end"],
        target: scrollRef
    });
    return (
        <Box ref={exploreRef} h={{ base: '320vh', md: '255vh' }} as='section' pos={'relative'} bg="#101010">
            <AnimatePresence key='explore'>
                <Box maxW={'7xl'} pt={{ base: 16, md: 40 }} pb={10} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div key='explore' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5.5xl' }} fontWeight={600}>
                                    Explore the full story.
                                </Heading>
                            </motion.div>
                        </>
                    }
                </Box>
                <Box pos={'relative'} w='full' h={{ base: '80%', md: '63%' }}>
                    <Box maxW={'5xl'} py={{ base: 16, md: 32 }} mx={{ base: 8, md: 'auto' }} overflow={'hidden'}>
                        <Stack spacing={0} mx={{ base: 4, md: 4 }}>
                            <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                iPhone.
                            </Heading>
                            <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                                Forged in titanium.
                            </Heading>
                        </Stack>
                        <Stack spacing={12} ref={ref} className='grid-container' maxW={'5xl'} mx={'auto'} pos={'absolute'} left={'50%'} w='full' overflow={'hidden'}>
                            <Grid ref={scrollRef} w={'full'} templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6} mt={10}>
                                <GridItem colSpan={2} bg={'#000'} backgroundImage='./images/explore_1.jpeg' backgroundSize={'cover'} backgroundPosition={'bottom'} w={'full'} h={'lg'} overflow='hidden'>
                                </GridItem>
                                <GridItem colSpan={{ base: 2, md: 1 }} bg={'#000'} w={'full'} h={'lg'} overflow='hidden'>
                                    <motion.div key='explore2' initial={{ opacity: 0.5 }} style={{ opacity: scrollYProgress }}>
                                        <Image src='./images/explore_2.jpeg' alt='iphoneframe' w={'full'} h='lg' objectFit='contain' />
                                    </motion.div>
                                </GridItem>
                                <GridItem colSpan={{ base: 2, md: 1 }} bg={'#000'} w={'full'} h={'lg'} overflow='hidden'>
                                    <motion.div key='explore3' initial={{ opacity: 0.5 }} style={{ opacity: scrollYProgress }}>
                                        <Image src='./images/explore_3.jpeg' alt='iphoneframe' w={'full'} h='lg' objectFit='contain' />
                                    </motion.div>
                                </GridItem>
                            </Grid>
                            <HStack ref={textRef} flexDirection={{ base: 'column', md: 'row' }} spacing={{ base: 10, md: 20 }} alignItems={{ base: 'center', md: 'start' }} justifyContent={'space-around'}>
                                {isInView3 && <>
                                    <Box maxW={{ md: '33%', base: '80%' }}>
                                        <motion.div key='explore4' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                                iPhone 15 Pro is <Text as={'span'} color={'#fff'}>the first iPhone to feature an aerospace‑grade titanium design</Text>, using the same alloy that spacecraft use for missions to Mars.
                                            </Text>
                                        </motion.div>
                                    </Box>
                                    <Box maxW={{ md: '33%', base: '80%' }}>
                                        <motion.div key='explore5' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                            <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                                Titanium has one of the best strength‑to‑weight ratios of any metal, making these our  <Text as={'span'} color={'#fff'}>lightest Pro models ever</Text>. You’ll notice the difference the moment you pick one up.
                                            </Text>
                                        </motion.div>
                                    </Box>
                                </>}
                            </HStack>
                        </Stack>
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '270px', md: '290px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div key='explore5' style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={500}>More on design & display</Text>
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
