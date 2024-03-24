import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Box } from '@chakra-ui/react';
import './styles.css'
import SwiperCore from 'swiper/core'

export const HighlightSwiper = () => {
    const [active, setActive] = useState(0)
    const [swiper, setSwiper] = useState<SwiperCore | null>(null);

    const handleSlide = (index: number) => {
        if (swiper) {
            swiper.slideTo(index)
        }
    }

    return (
        <>
            <Swiper
                cssMode={true}
                spaceBetween={30}
                slidesPerView={'auto'}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                onSwiper={setSwiper}
                onSlideChange={(swiper) => setActive(swiper.activeIndex)}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Box maxW={'7xl'} pb={10} mx={'auto'} >
                        <Box bg='gray.100' h='xl'>Slide 1</Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box maxW={'7xl'} pb={10} mx={'auto'} >
                        <Box bg='gray.100' h='xl'>Slide 2</Box>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box maxW={'7xl'} pb={10} mx={'auto'} >
                        <Box bg='gray.100' h='xl'>Slide 3</Box>
                    </Box>
                </SwiperSlide>
            </Swiper>
        </>
    )
}