import { Box, Button, ButtonGroup, Divider, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core'
import { IoChevronForward } from 'react-icons/io5';
import { SectionButton } from '../Highlights/HighlightsSection';

export const KeepExploringSection = () => {
    const keepExploringRef = useRef(null)
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: true })
    const isInView = useInView(keepExploringRef, { once: true })
    const [active, setActive] = useState(0)
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);
    const handleNext = () => {
        swiper?.slideNext();
    }
    const handlePrev = () => {
        swiper?.slidePrev();
    }

    return (
        <Box ref={ref} h={{ base: '150vh', md: '220vh' }} bg={'#101010'} as='section' pos={'relative'} pt={{ base: 5, md: 10 }} pb={{ base: 10, md: 20 }}>
            <AnimatePresence>
                <Box ref={keepExploringRef} maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <HStack flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} alignItems={{ base: 'start', md: 'flex-end' }} spacing={4}>
                                    <Heading maxW={{ base: '80%', md: 'auto' }} as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600}>
                                        Keep exploring iPhone.
                                    </Heading>
                                    <Button colorScheme='primary' variant={'link'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                        Explore all iPhone
                                    </Button>
                                </HStack>
                            </motion.div>
                        </>
                    }
                </Box>
                <Box maxW={'7xl'} mx='auto' pos={'relative'} w='full' h={{ base: '96%', md: '88%' }} pb={20}>
                    <Stack pos={'absolute'} maxW={'full'} mx={{ base: 4, md: 'auto' }} spacing={12} w={{ base: '90%', md: 'full' }} minH={'xl'} px={{ base: 2, md: 16 }} py={{ base: 10, md: 20 }} rounded={20} bg='black' justifyContent={'space-between'} >
                        <HStack maxW={{ base: 'full', md: '70%' }} mx={{ base: 0, md: 'auto' }} px={{ base: 4, md: 20 }} spacing={{ base: 10, md: 24 }} alignItems={'start'} justifyContent={'center'}>
                            <Stack spacing={8} alignItems={'center'}>
                                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                                    <Image cursor={'pointer'} src={'./src/assets/images/iphone15pro.jpeg'} alt='iphone' w={'full'} h={{ base: 44, md: 'sm' }} objectFit='contain' />
                                </motion.div>
                                <Stack alignItems={{ base: 'start', md: 'center' }}>
                                    <Text as='span' color={'orange'} fontSize={{ base: 'md', md: 'sm' }} fontWeight={600}>
                                        New
                                    </Text>
                                    <Text color={'white'} fontSize={{ base: 'md', md: '3xl' }} fontWeight={600}>
                                        iPhone 15 Pro
                                    </Text>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                                        From ₹134900.00*
                                    </Text>
                                </Stack>
                                <HStack flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'start', md: 'center' }} spacing={{ base: 4, md: 8 }}>
                                    <Button rounded={'full'} _hover={{}} size={{ base: 'xs', md: 'md' }} fontWeight={400} bg={'transparent'} color={'#86868b'}>Currently viewing</Button>
                                    <Button colorScheme='primary' variant={'link'} fontSize={{ base: 'sm', md: 'md' }} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                        Buy
                                    </Button>
                                </HStack>
                            </Stack>
                            <Stack spacing={8} alignItems={'center'}>
                                <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                                    <Image cursor={'pointer'} src={'./src/assets/images/iphone15.jpeg'} alt='iphone' w={'full'} h={{ base: 44, md: 'sm' }} objectFit='contain' />
                                </motion.div>
                                <Stack alignItems={{ base: 'start', md: 'center' }}>
                                    <Text as='span' color={'orange'} fontSize={{ base: 'md', md: 'sm' }} fontWeight={600}>
                                        New
                                    </Text>
                                    <Text color={'white'} fontSize={{ base: 'md', md: '3xl' }} fontWeight={600}>
                                        iPhone 15
                                    </Text>
                                    <Text color={'white'} fontSize={{ base: 'md', md: 'lg' }} fontWeight={600}>
                                        From ₹79900.00*
                                    </Text>
                                </Stack>
                                <HStack flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'start', md: 'center' }}
                                    spacing={{ base: 4, md: 8 }}>
                                    <Button rounded={'full'} size={{ base: 'sm', md: 'lg' }} fontWeight={400} colorScheme='primary'>Learn more</Button>
                                    <Button colorScheme='primary' variant={'link'} fontSize={{ base: 'sm', md: 'md' }} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                        Buy
                                    </Button>
                                </HStack>
                            </Stack>
                        </HStack>
                        <Divider maxW={{ base: '90%', md: 'xl' }} mx={'auto'} orientation='horizontal' />
                        <HStack maxW={{ base: ' 100%', md: '70%' }} mx={{ base: 0, md: 'auto' }} px={{ base: 4, md: 20 }} spacing={{ base: 10, md: 24 }} alignItems={'start'} justifyContent={'center'}>
                            <Stack spacing={12} alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                <Stack alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                    <Image src='./src/assets/images/a17icon.png' alt='iphone' w={14} objectFit='contain' />
                                    <Text color={'white'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'md', md: '2xl' }} lineHeight={'120%'} fontWeight={600}>
                                        A17 Pro chip<br /> with 6-core GPU
                                    </Text>
                                </Stack>
                                <Stack alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                    <Image src='./src/assets/images/triplecamera.png' alt='iphone' w={14} objectFit='contain' />
                                    <Text color={'white'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'md', md: '2xl' }} lineHeight={'120%'} fontWeight={600}>
                                        Pro camera<br /> system
                                    </Text>
                                    <Stack spacing={0}>
                                        <Text color={'gray.200'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'xs', md: 'xs' }}>
                                            Our most advanced 48MP Main camera
                                        </Text>
                                        <Text color={'gray.200'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'xs', md: 'xs' }}>
                                            3x or 5x Telephoto camera
                                        </Text>
                                        <Text color={'gray.200'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'xs', md: 'xs' }}>
                                            Ultra Wide camera
                                        </Text>
                                    </Stack>
                                </Stack>
                                <Stack alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                    <Image src='./src/assets/images/batteryicon.png' alt='iphone' w={14} objectFit='contain' />
                                    <Text color={'white'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'md', md: '2xl' }} lineHeight={'120%'} fontWeight={600}>
                                        Up to 29 hours video<br /> playback
                                    </Text>
                                </Stack>
                            </Stack>
                            <Stack spacing={12} alignItems={'center'} justifyContent={'start'}>
                                <Stack alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                    <Image src='./src/assets/images/a16icon.png' alt='iphone' w={14} objectFit='contain' />
                                    <Text color={'white'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'md', md: '2xl' }} lineHeight={'120%'} fontWeight={600}>
                                        A16 Bionic chip<br /> with 5-core GPU
                                    </Text>
                                </Stack>
                                <Stack alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                    <Image src='./src/assets/images/dualcamera.png' alt='iphone' w={14} objectFit='contain' />
                                    <Text color={'white'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'md', md: '2xl' }} lineHeight={'120%'} fontWeight={600}>
                                        Advanced dual-camera<br /> system
                                    </Text>
                                    <Stack spacing={0}>
                                        <Text color={'gray.200'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'xs', md: 'xs' }}>
                                            48MP Main camera
                                        </Text>
                                        <Text color={'gray.200'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'xs', md: 'xs' }}>
                                            2x Telephoto
                                        </Text>
                                        <Text color={'gray.200'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'xs', md: 'xs' }}>
                                            Ultra Wide camera
                                        </Text>
                                    </Stack>
                                </Stack>
                                <Stack alignItems={{ base: 'start', md: 'center' }} justifyContent={'start'}>
                                    <Image src='./src/assets/images/batteryicon.png' alt='iphone' w={14} objectFit='contain' />
                                    <Text color={'white'} textAlign={{ base: 'left', md: 'center' }} fontSize={{ base: 'md', md: '2xl' }} lineHeight={'120%'} fontWeight={600}>
                                        Up to 26 hours video<br /> playback
                                    </Text>
                                </Stack>
                            </Stack>
                        </HStack>
                    </Stack>
                    <SectionButton isInView={isInView2} width='310px'>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>Compare all iPhone models</Text>
                                    <IconButton rounded={'full'} colorScheme='primary' aria-label='arrow' icon={<IoChevronForward fontSize={24} fontWeight={700} />} />
                                </HStack>
                            </motion.div>
                        </HStack>
                    </SectionButton>
                </Box>
            </AnimatePresence>
        </Box>
    )
}
