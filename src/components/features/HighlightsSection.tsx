import { Box, Button, ButtonGroup, HStack, Heading, Link, Stack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { IoChevronForward, IoPlayCircleOutline } from 'react-icons/io5'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import './styles.css'
import { HighlightSwiper } from './HighlightSwiper'

export const HighlightsSection = () => {
    const higlightsRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(higlightsRef, { once: false })
    const isInView2 = useInView(ref, { once: false })
    return (
        <Box h={'100vh'} as='section' pos={'relative'} bg="#101010" p={4}>
            <AnimatePresence>
                <Box ref={higlightsRef} maxW={'7xl'} pt={{ base: 10, md: 32 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
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

                <HighlightSwiper />
                <Box ref={ref} pos={'relative'} w='full' h='full' backdropBlur='7px'>
                    <SectionButton isInView={isInView2} />
                </Box>

            </AnimatePresence>
        </Box>
    )
}

export const SectionButton = ({ isInView }: { isInView: boolean }) => {
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
                        transition={{
                            duration: 1.2,
                            ease: "easeInOut",
                            times: [0, 0.5, 0.7, 1],
                            delay: 0.2
                        }}
                    >
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