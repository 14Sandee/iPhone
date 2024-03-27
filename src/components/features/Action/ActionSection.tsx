import { Box, Button, HStack, Heading, Image, Stack, Text, useBreakpointValue, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, useInView, motion } from 'framer-motion'
import { data } from './actionData'
import './styles.css'

export const ActionSection = () => {
    const [active, setActive] = useState(0);
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false, xl: false });
    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: true })
    return (
        <Box h={{ base: '180vh', md: '180vh' }} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box maxW={'4xl'} pt={{ base: 10, md: 40 }} pb={10} mx={{ base: 'auto', md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ base: 'center', md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    <Stack w={{ base: '70%', md: 'auto' }} spacing={0} mx={{ base: 2, md: 4 }}>
                        <Heading as='h2' color='#fff' fontSize={{ base: '4xl', md: '7xl' }} fontWeight={600}>
                            Get in on the<br /> Action button.
                        </Heading>
                    </Stack>
                </Box>
                <Box pos={'relative'} w='full' h='85%'>
                    <Box w='full' pos={'absolute'} top={0} minH={'100vh'} mx={'auto'} overflow={'auto'}>
                        <HStack w={{ base: '75%', md: 'full' }} flexDirection={{ base: 'column', md: 'row' }} spacing={8} maxW={'4xl'} mx={'auto'} justifyContent={'space-between'} alignItems={'start'} overflow={'hidden'}>
                            <Stack w={{ base: '100%', md: '40%' }} mx={{ base: 'auto', md: 2 }} px={{ base: 2, md: 4 }}>
                                <Text color={'#86868b'} fontSize={{ base: 'lg', md: 'xl' }} fontWeight={600}>
                                    The all‑new Action button is <Text as={'span'} color={'#fff'}>a fast track to your favourite feature</Text>. Once you set the one you want, just press and hold to launch the action.
                                </Text>
                                {
                                    !isMobile && <Stack spacing={2} mt={8} alignItems={'start'}>
                                        {data.map((d, i) =>
                                            <Button
                                                rounded={'full'}
                                                borderWidth={1}
                                                size={'sm'}
                                                borderColor={`${active === i ? 'white' : 'transparent'}`}
                                                bg={'transparent'}
                                                _hover={{ bg: `${active === i ? 'transparent' : '#424245b3'}` }}
                                                color={`${active === i ? 'white' : '#86868b'}`}
                                                w={'auto'}
                                                leftIcon={d.icon}
                                                onClick={() => setActive(i)}
                                            >
                                                {d.text}
                                            </Button>)}
                                    </Stack>
                                }
                            </Stack>
                            <Stack rounded={40} w={{ base: '90%', md: '45%' }} minH={{ base: 'xl', md: '3xl' }} pos={'relative'} overflow={'hidden'}>
                                <Box pos={'absolute'} bottom={0} zIndex={10} w={'xl'} h={'xl'} bgGradient={'linear(to top, black, transparent)'} />
                                <Image pos={'absolute'} zIndex={9} src='./images/iphoneframe2.png' alt='action' w={'full'} h={'full'} objectFit='contain' />
                                <Image pos={'absolute'} zIndex={8} top={{ base: 4, md: 2 }} left={{ base: 2, md: 4 }} src={data[active].url} alt='action' w={'full'} h={'full'} objectFit='contain' />
                            </Stack>
                        </HStack>
                        <HStack ref={textRef} flexDirection={{ base: 'column', md: 'row' }} maxW={'4xl'} mx={'auto'} mt={12} spacing={{ base: 10, md: 20 }} alignItems={{ base: 'center', md: 'start' }} justifyContent={'space-around'}>
                            {isInView && <>
                                <Box maxW={{ base: '70%', md: '33%' }}>
                                    <motion.div key={'action'} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                            By default, the
                                            <Text as={'span'} color={'#fff'}> Action button is set to toggle between Ring and Silent modes</Text>. If you choose a different action, you can use Control Centre to mute or use Focus filters to automatically set your iPhone to silent.
                                        </Text>
                                    </motion.div>
                                </Box>
                                <Box maxW={{ base: '70%', md: '33%' }}>
                                    <motion.div key={'action-text'} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                        <Text color={'#86868b'} fontSize={{ base: 'md', md: 'xl' }} fontWeight={600}>
                                            Whatever you’re doing, the Action button is at the ready. Launch Camera to catch a spontaneous selfie. Record an instant voice memo. You can even  <Text as={'span'} color={'#fff'}>select Shortcut to open an app or run a series of tasks</Text> like switching on the lights in your living room and playing music.
                                        </Text>
                                    </motion.div>
                                </Box>
                            </>}
                        </HStack>
                    </Box>
                </Box>
            </AnimatePresence >
        </Box>
    )
}