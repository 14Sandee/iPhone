import { Box, Button, ButtonGroup, HStack, Heading, IconButton, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoAdd, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { data } from './shopAtAppleData'

export const KeepExploringSection = () => {
    const keepExploringRef = useRef(null)
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
        <AnimatePresence>
            <Box ref={keepExploringRef} maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                {
                    isInView && <>
                        <motion.div style={{ width: '100%' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                            <HStack w={'full'} justifyContent={'space-between'} alignItems={'flex-end'} spacing={4}>
                                <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600}>
                                    Keep exploring iPhone.
                                </Heading>
                                <Button colorScheme='primary' variant={'link'} fontSize={'xl'} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                    Explore all iPhone
                                </Button>
                            </HStack>
                        </motion.div>
                    </>
                }
            </Box>
            <Stack spacing={12} maxW={'7xl'} mx={'auto'} py={10}>
                <Swiper
                    cssMode={true}
                    spaceBetween={30}
                    slidesPerView={3}
                    modules={[Navigation]}
                    style={{ width: '100%' }}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                    className="mySwiper"
                >
                    {data.map((d, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Stack minH={340} pos={'relative'} justifyContent={'space-between'} bg='#242426' p={{ base: 4, md: 8 }} rounded={20}>
                                    <Stack spacing={4}>
                                        <Image src={d.url} alt='shop-icon' w={14} objectFit='contain' />
                                        <Text color='white' fontSize='2.5xl' fontWeight={600} lineHeight={'120%'}>
                                            {d.title.split('\n').map((text, index) => (
                                                <React.Fragment key={index}>
                                                    {text}
                                                    {index !== d.title.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </Text>
                                        <Text color='white' fontSize='lg'>{d.content}</Text>
                                    </Stack>
                                    <HStack justifyContent={'flex-end'} spacing={4}>
                                        <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} aria-label='shop' icon={<IoAdd fontSize={24} />} />
                                    </HStack>
                                </Stack>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Stack>
            <Stack spacing={12} maxW={'7xl'} mx={'auto'} py={10} alignItems={'flex-end'}>
                <ButtonGroup spacing={4}>
                    <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} isDisabled={active < 1} onClick={handlePrev} aria-label='next' icon={<IoChevronBack fontSize={24} />} />
                    <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} isDisabled={active >= data.length - 3} onClick={handleNext} aria-label='next' icon={<IoChevronForward fontSize={24} />} />
                </ButtonGroup>
            </Stack>
        </AnimatePresence>
    )
}
