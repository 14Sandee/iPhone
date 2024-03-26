import { Box, Button, ButtonGroup, HStack, Heading, IconButton, Image, Stack, Text, useBreakpointValue, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { IoAdd, IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { data } from './shopAtAppleData'

export const ShopAtApple = () => {
    const shopRef = useRef(null)
    const isInView = useInView(shopRef, { once: true })
    const [active, setActive] = useState(0)
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);
    const handleNext = () => {
        swiper?.slideNext();
    }
    const handlePrev = () => {
        swiper?.slidePrev();
    }
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false, xl: false })
    return (
        <AnimatePresence key='shop'>
            <Box ref={shopRef} mt={20} maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                {
                    isInView && <>
                        <motion.div key='shop' style={{ width: '100%' }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                            <HStack flexDirection={{ base: 'column', md: 'row' }} w={'full'} justifyContent={'space-between'} alignItems={{ base: 'start', md: 'flex-end' }} spacing={4}>
                                <Heading maxW={{ base: '80%', md: 'auto' }} as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600}>
                                    Ways to shop and save at Apple.
                                </Heading>
                                <Button colorScheme='primary' variant={'link'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={500} rightIcon={<IoChevronForward fontSize={16} />}>
                                    Shop iPhone
                                </Button>
                            </HStack>
                        </motion.div>
                    </>
                }
            </Box>
            <Stack spacing={12} maxW={'7xl'} mx={'auto'} py={10}>
                <Swiper
                    cssMode={true}
                    spaceBetween={isMobile ? 10 : 30}
                    slidesPerView={isMobile ? 1 : 3}
                    modules={[Navigation]}
                    style={{ width: '100%' }}
                    onSwiper={setSwiper}
                    onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                    className="mySwiper"
                >
                    {data.map((d, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Stack mx={{ base: '8', md: "auto" }} minH={{ base: 'auto', md: 340 }} pos={'relative'} justifyContent={'space-between'} bg='#242426' p={{ base: 6, md: 8 }} rounded={20}>
                                    <Stack spacing={4}>
                                        <Image src={d.url} alt='shop-icon' w={{ base: 10, md: 14 }} objectFit='contain' />
                                        <Text color='white' fontSize={{ base: 'xl', md: '2.5xl' }} fontWeight={600} lineHeight={'120%'}>
                                            {isMobile ? d.title : d.title.split('\n').map((text, index) => (
                                                <React.Fragment key={index}>
                                                    {text}
                                                    {index !== d.title.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </Text>
                                        <Text color='white' fontSize={{ base: 'md', md: 'lg' }}>{d.content}</Text>
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
            <Stack spacing={12} maxW={'7xl'} mx={{ base: 8, md: 'auto' }} py={10} alignItems={'flex-end'}>
                <ButtonGroup spacing={4}>
                    <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} isDisabled={active < 1} onClick={handlePrev} aria-label='next' icon={<IoChevronBack fontSize={24} />} />
                    <IconButton bg='#424245b3' boxSize={10} backdropBlur={'7px'} _hover={{ bg: '#424245d3' }} rounded={'full'} color={'white'} isDisabled={isMobile ? active >= data.length - 1 : active >= data.length - 3} onClick={handleNext} aria-label='next' icon={<IoChevronForward fontSize={24} />} />
                </ButtonGroup>
            </Stack>
        </AnimatePresence>
    )
}