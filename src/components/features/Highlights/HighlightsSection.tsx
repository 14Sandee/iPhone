import { Box, Button, ButtonGroup, HStack, Heading, Link, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
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
        <Box ref={higlightsRef} h={{ base: '125vh', md: '140vh' }} as='section' pos={'relative'} bg="#101010">
            <AnimatePresence key='highlight-section'>
                <Box maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div key='highlight' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5.5xl' }} fontWeight={600}>
                                    Get the highlights.
                                </Heading>
                            </motion.div>
                            <ButtonGroup flexDirection={{ base: 'column', md: 'row' }} gap={{ base: 2, md: 4 }} spacing={{ base: 0, md: 4 }}>
                                <motion.div key='highlight2' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}>
                                    <Button colorScheme='primary' variant={'link'} fontSize={'xl'} fontWeight={500} rightIcon={<IoPlayCircleOutline fontSize={20} />}>
                                        Watch the film
                                    </Button>
                                </motion.div>
                                <motion.div key='highlight3' initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1 }}>
                                    <Button colorScheme='primary' variant={'link'} fontSize={'xl'} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                        Watch the event
                                    </Button>
                                </motion.div>
                            </ButtonGroup>
                        </>
                    }
                </Box>
                <Box bg="#101010" pos={'relative'} w='full' h={{ base: '75%', md: '70%' }} backdropBlur='7px'>
                    <Box w={'full'} position={'absolute'} top={0}>
                        <Box ref={ref} maxW={'7xl'} height={'2xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
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
                    </Box>
                    <SectionButton isInView={isInView2} width={{ base: '168px', md: '168px' }}>
                        <HStack h={'58px'} px={6} justifyContent={'space-between'} alignItems={'center'} >
                            {[...Array(4)].map((_, i) => (
                                <Box cursor={'pointer'} key={i} className={`pagination ${active === i ? 'active' : ''}`} bg='gray.100' borderRadius='50px' onClick={() => handleSlide(i)} />
                            ))}
                        </HStack>
                    </SectionButton>
                </Box>
            </AnimatePresence >
        </Box >
    )
}

export const SectionButton = ({ isInView, children, text, width }: { isInView: boolean, children?: ReactNode, text?: string, width?: { base: string, md?: string } }) => {
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false, xl: false })
    return (
        <HStack spacing={8} w='full' h='full' justifyContent={'center'} alignItems={'flex-end'}>
            {
                isInView && <AnimatePresence key='highlight'>
                    <Stack position={'sticky'} bottom={10} alignItems={'center'} zIndex={9999}>
                        {text && <motion.div key='text'
                            style={{ backgroundColor: 'rgba(0,0,0,0.5)', padding: '2px' }}
                            initial={{ opacity: 0, y: 0 }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.5,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        >
                            <Text color='white' fontSize='sm' lineHeight='125%'>{text}</Text>
                        </motion.div>}
                        <motion.div
                            key={'section-button'}
                            className="box"
                            animate={{
                                scale: [0, 1, 1, 1],
                                borderRadius: ["50%", "50%", "999px", "999px"],
                                outlineWidth: ["10px", "10px", "0px", "0px"],
                                width: ["56px", "56px", "56px", isMobile && width ? width.base : width?.md],
                            }}
                            exit={{
                                scale: [1, 1, 1, 0],
                                borderRadius: ["999px", "999px", "50%", "50%",],
                                width: [isMobile && width ? width.base : width?.md, "56px", "56px", "56px"],
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
                    </Stack>

                </AnimatePresence>
            }
        </HStack >
    )
}
