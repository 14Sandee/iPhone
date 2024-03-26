import { Box, Button, Heading, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { motion } from 'framer-motion'

export const WelcomeSection = () => {
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false, xl: false })

    return (
        <Stack as={'section'} w='full' bg={'black'} h='calc(100vh - 40px)' py={{ base: 10, md: 16 }} justifyContent={'center'}>
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
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}>
                        <Button rounded={'full'} size={'lg'} fontWeight={400} colorScheme='primary'>Buy</Button>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                        <Text color='gray.100' fontSize='xl' fontWeight={600}>From ₹21483.00/mo.‡ or ₹134900.00*</Text>
                    </motion.div>
                </Stack>
            </Stack>
        </Stack >
    )
}


export const MobileVideo = () => {
    return (
        <video autoPlay muted id="mobileVideo">
            <source src='./videos/mobileLanding.mp4' type='video/mp4' />
        </video>
    )
}
export const DesktopVideo = () => {
    return (
        <video autoPlay muted id="myVideo">
            <source src="./videos/landingVideo.mp4" type="video/mp4" />
        </video>
    )
}