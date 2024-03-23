import { Box, Button, Heading, Stack, Text, calc, useBreakpointValue } from '@chakra-ui/react'
import React, { useState } from 'react'

export const WelcomeSection = () => {
    const [isPlaying, setIsPlaying] = useState(true)
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false, xl: false })
    console.log(isMobile)
    return (
        <Stack w='full' bg={'black'} h='calc(100vh - 48px)' py={{ base: 10, md: 16 }} justifyContent={'center'}>
            {/* {isPlaying ? <video autoPlay muted id="myVideo" onPause={() => setIsPlaying(false)}>
                <source src="./src/assets/videos/landingVideo.mp4" type="video/mp4" />
            </video> : <img src="./src/assets/images/landingImage.jpeg" alt="landingImage" />} */}
            <Stack w={'full'} mt={{ base: 2, md: 10 }}>
                <Stack w='full' pos={'relative'} py={{ base: 8, md: 16 }} alignItems={'center'}>
                    <Heading as={'h1'} top={{ base: -5, md: 'auto' }} color='#BEB8AE' fontSize={{ base: '2xl', md: '3xl' }} fontWeight={600} pos={'absolute'}>
                        iPhone 15 Pro
                    </Heading>
                    <Stack mx={{ base: 5, md: 10 }} w={{ base: 'auto', lg: '4xl', xl: '6xl' }}>
                        {isMobile ? <MobileVideo /> : <DesktopVideo />}
                    </Stack>
                </Stack>
                <Stack spacing={8} w='full' alignItems={'center'}>
                    <Button rounded={'full'} size={'lg'} fontWeight={400} colorScheme='primary'>Buy</Button>
                    <Text color='gray.100' fontSize='xl' fontWeight={600}>From ₹21483.00/mo.‡ or ₹134900.00*</Text>
                </Stack>
            </Stack>
        </Stack>
    )
}


export const MobileVideo = () => {
    return (
        <video autoPlay muted id="mobileVideo">
            <source src='./src/assets/videos/mobileLanding.mp4' type='video/mp4' />
        </video>
    )
}
export const DesktopVideo = () => {
    return (
        <video autoPlay muted id="myVideo">
            <source src="./src/assets/videos/landingVideo.mp4" type="video/mp4" />
        </video>
    )
}