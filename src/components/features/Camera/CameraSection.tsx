import { Box, ButtonGroup, Divider, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useScroll } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import { IoAdd, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import { data } from './cameraslides'
import SwiperCore from 'swiper/core'
import './styles.css'

export const CameraSection = () => {
    const cameraRef = useRef(null)
    const ref = useRef(null)
    const isInView2 = useInView(ref, { once: false })
    const scrollRef = useRef(null);
    const scaleRef = useRef(null);
    const { scrollYProgress } = useScroll({
        offset: ["end end", "start start"],
        target: scrollRef
    });
    const [active, setActive] = useState(0)
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);

    const handleNext = () => {
        swiper?.slideNext();
    }
    const handlePrev = () => {
        swiper?.slidePrev();
    }

    return (
        <Box h={'442vh'} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box maxW={'5xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    <motion.div ref={scrollRef} initial={{ opacity: 0.5 }} style={{ opacity: scrollYProgress }}>
                        <Heading as='h2' color='#fff' fontSize={{ base: '3xl', md: '7xl' }} fontWeight={600}>
                            A camera that captures your wildest imagination.
                        </Heading>
                        <Text mt={8} color={'#86868b'} fontSize={{ base: 'xl', md: '2xl' }} fontWeight={600}>
                            From dramatic framing flexibility to next-generation portraits, see what you can do with our most powerful iPhone camera system.
                        </Text>
                    </motion.div>
                </Box>
                <Box ref={ref} pos={'relative'} w='full' h='85%'>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <Stack w={'full'} alignItems={'center'} spacing={0} mx={{ base: 2, md: 4 }}>
                            <Box w={'full'}>
                                <motion.div ref={scaleRef} style={{ scale: scrollYProgress }}>
                                    <Image pos={'sticky'} src='./src/assets/images/chameleon.jpeg' alt='camera' w={'100%'} />
                                </motion.div>
                                <Text maxW={'5xl'} mx='auto' color={'#86868b'} textAlign={'left'} fontSize={'xl'} fontWeight={600} mt={4}>
                                    A green iguana, captured by the 48MP Main camera
                                </Text>
                            </Box>
                        </Stack>
                        <Stack w={'full'} spacing={4}>
                            <HStack mt={32} left={0} spacing={{ base: 10, md: 20 }} alignItems={'start'} justifyContent={'space-around'}>
                                <Stack spacing={4} maxW={'28%'}>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                        With iPhone 15 Pro, you have multiple focal lengths to work with. It’s like having <Text as={'span'} color={'#fff'}>seven pro lenses in your pocket</Text>, everywhere you go.
                                    </Text>
                                </Stack>
                            </HStack>
                            <Stack w={'full'} mt={{ base: 6, md: 12 }} spacing={10}>
                                <Swiper
                                    cssMode={true}
                                    spaceBetween={20}
                                    slidesPerView={2}
                                    centeredSlides={true}
                                    modules={[Navigation]}
                                    style={{ width: '100%' }}
                                    onSwiper={setSwiper}
                                    onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                                    className="mySwiper"
                                >
                                    {data.map((d, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <Box w={'full'} className={`slide-container ${active === index ? 'active' : ''}`} aspectRatio={1.4}>
                                                    <Image src={d.url} alt={d.spanText} w={'100%'} h={'100%'} objectFit={'cover'} objectPosition={'center'} />
                                                </Box>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <HStack maxW={'4xl'} w='full' mx={'auto'} spacing={4} justifyContent={'space-between'} alignItems={'center'}>
                                    <Box w={'80%'} h={'full'}>
                                    </Box>
                                    {data.map((d, index) => {
                                        return (
                                            <>
                                                {active === index && <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>
                                                        {data[active].text}
                                                        <Text as={'span'} color={'#86868b'}> {data[active].spanText}</Text>
                                                    </Text>
                                                </motion.div>
                                                }
                                            </>
                                        )
                                    })}
                                    <ButtonGroup spacing={4}>
                                        <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} isDisabled={active < 1} onClick={handlePrev} aria-label='next' icon={<IoChevronBack fontSize={24} />} />
                                        <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} isDisabled={active >= data.length - 1} onClick={handleNext} aria-label='next' icon={<IoChevronForward fontSize={24} />} />
                                    </ButtonGroup>
                                </HStack>
                            </Stack>
                        </Stack>
                        <CameraScreen />
                        <Divider maxW={'4xl'} mx='auto' orientation='horizontal' />
                        <Stack textAlign={'center'} maxW={'5xl'} mx={'auto'} py={{ base: 20, md: 40 }} spacing={0}>
                            <Text color={'#fff'} fontSize={'4.5xl'} fontWeight={600} lineHeight={'120%'}>Shoot magical spatial videos,</Text>
                            <Text color={'#fff'} fontSize={'4.5xl'} fontWeight={600} lineHeight={'120%'}>then relive them on Apple Vision Pro</Text>
                        </Stack>
                    </Box>


                    <SectionButton isInView={isInView2} width='280px'>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'}>
                            <motion.div style={{ width: '100%' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                <HStack w={'full'} justifyContent={'space-between'} spacing={2}>
                                    <Text color={'white'} fontSize={'lg'} fontWeight={500}>Zoom in on the cameras</Text>
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

export const CameraScreen = () => {
    const ref = useRef(null)
    const textRef = useRef(null)
    const isInView = useInView(ref, { once: false })
    const isInView2 = useInView(textRef, { once: false })
    return (
        <Stack maxW={'5xl'} minH={{ md: '4xl' }} mx={'auto'} py={{ base: 20, md: 40 }} spacing={10}>
            <AnimatePresence>
                <HStack left={0} spacing={{ base: 10, md: 20 }} justifyContent={'center'}>
                    <Box ref={ref} maxW={'30%'}>
                        {isInView && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image src='./src/assets/images/cameraApp.jpeg' alt='camera' w={'100%'} h={'100%'} />
                        </motion.div>}

                    </Box>
                    <Box maxW={'31%'} w={'sm'} ref={textRef}>
                        {isInView2 &&
                            <motion.div
                                initial={{ opacity: 0, y: 80 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Stack spacing={4}>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                        The 48MP Main camera is more advanced than ever, capturing super‑high‑resolution photos with a <Text as={'span'} color={'#fff'}>new level of detail and colour</Text>.
                                    </Text>
                                    <Text color={'#86868b'} fontSize={'xl'} fontWeight={600}>
                                        You’ll see the improvements in your portraits. And now you no longer have to switch to Portrait mode. If your subject is a person, dog or cat, iPhone automatically captures depth information. So you can choose to instantly <Text as={'span'} color={'#fff'}>see your photo as a portrait</Text>, with an artful blur effect. Or later in the Photos app.
                                    </Text>
                                </Stack>
                            </motion.div>
                        }
                    </Box>
                </HStack>
            </AnimatePresence>
        </Stack>
    )
}