import { Box, Button, ButtonGroup, HStack, Heading, Link, Stack, Text } from '@chakra-ui/react'
import React, { ReactNode, RefObject, useEffect, useRef, useState } from 'react'
import { IoChevronForward, IoPlayCircleOutline } from 'react-icons/io5'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import SwiperCore from 'swiper/core'
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css'
import { VideoSlide } from './HighlightVideos';
import { data } from './videodata'

interface SwiperVideoProps {
    url: string,
    id: number,
}

export const HighlightsSection = () => {
    const higlightsRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(higlightsRef, { once: true })
    const isInView2 = useInView(ref, { once: false })

    const [active, setActive] = useState(0)
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);

    const handleSlide = (index: number) => {
        if (swiper) {
            swiper.slideTo(index)
        }
    }

    const playPause = (ref: RefObject<HTMLVideoElement>) => {
        if (ref.current) {
            if (ref.current.paused) {
                ref.current.play();
            } else {
                ref.current.pause();
            }
        }
    };

    return (
        <Box ref={higlightsRef} h={'100vh'} as='section' pos={'relative'} bg="#101010">
            <AnimatePresence>
                <Box maxW={'7xl'} pt={{ base: 10, md: 32 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5.5xl' }} fontWeight={600}>
                                    Get the highlights.
                                </Heading>
                            </motion.div>
                            <ButtonGroup flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 2, md: 4 }} spacing={{ base: 0, md: 4 }}>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}>
                                    <Button colorScheme='primary' variant={'link'} fontSize={'xl'} fontWeight={500} rightIcon={<IoPlayCircleOutline fontSize={20} />}>
                                        Watch the film
                                    </Button>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}>
                                    <Button colorScheme='primary' variant={'link'} fontSize={'xl'} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                        Watch the event
                                    </Button>
                                </motion.div>
                            </ButtonGroup>
                        </>
                    }
                </Box>
                <Box ref={ref} bg="#101010" pos={'relative'} w='full' h='full' backdropBlur='7px'>
                    <Box w={'full'} position={'absolute'} top={0}>
                        <Box maxW={'7xl'} height={'2xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
                            {
                                isInView && data && <Swiper
                                    cssMode={true}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    pagination={{
                                        clickable: true,
                                        renderBullet: function (index, className) {
                                            return ``;
                                        }
                                    }}
                                    modules={[Pagination]}
                                    onSwiper={setSwiper}
                                    onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                                    className="mySwiper"
                                >
                                    {data.map((d: SwiperVideoProps, index: number) => <SwiperSlide key={index}>
                                        <VideoSlide dataArray={data} data={d} activeIndex={active} index={index} />
                                    </SwiperSlide>)}
                                </Swiper>
                            }
                        </Box>
                        {/* <Swiper
                            cssMode={true}
                            spaceBetween={30}
                            slidesPerView={'auto'}
                            centeredSlides={true}
                            pagination={{
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return ``;
                                }
                            }}
                            modules={[Pagination]}
                            onSwiper={setSwiper}
                            onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <Box maxW={'7xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
                                    <VideoSlide1 active={active} />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box maxW={'7xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
                                    <VideoSlide2 active={active} />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box maxW={'7xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
                                    <VideoSlide3 active={active} />
                                </Box>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Box maxW={'7xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
                                    <VideoSlide4 active={active} />
                                </Box>
                            </SwiperSlide>
                        </Swiper> */}
                    </Box>
                    <SectionButton isInView={isInView2}>
                        <HStack h={'58px'} px={6} justifyContent={'space-between'} alignItems={'center'} >
                            {[...Array(4)].map((_, i) => (
                                <Box cursor={'pointer'} key={i} className={`pagination ${active === i ? 'active' : ''}`} bg='gray.100' borderRadius='50px' onClick={() => handleSlide(i)} />
                            ))}
                        </HStack>
                    </SectionButton>
                </Box>
            </AnimatePresence>
        </Box>
    )
}

export const SectionButton = ({ isInView, children }: { isInView: boolean, children?: ReactNode }) => {
    return (
        <HStack spacing={8} w='full' h='full' justifyContent={'center'} alignItems={'flex-end'}>
            {
                isInView && <>
                    <motion.div
                        style={{ position: 'sticky' }}
                        className="box"
                        animate={{
                            scale: [0, 1, 1, 1],
                            borderRadius: ["50%", "50%", "999px", "999px"],
                            outlineWidth: ["10px", "10px", "0px", "0px"],
                            width: ["56px", "56px", "56px", "168px"],
                            // backgroundColor: ['#424245b3', '#424245b3', '#424245b3', '#424245b3']
                        }}
                        exit={{
                            scale: [1, 1, 0],
                            borderRadius: ["999px", "50%", "50%"],
                            width: ["56px", "56px", "56px"],
                        }}
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                            times: [0, 0.5, 0.7, 1],
                            delay: 0.2
                        }}
                    >
                        {children}
                    </motion.div>
                    {/* <motion.div className='sticky-button'
                        initial={{ width: 0, y: 0 }}
                        animate={{ width: '168px', y: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.2 }}
                    >
                    </motion.div> */}
                </>
            }
        </HStack >
    )
}
