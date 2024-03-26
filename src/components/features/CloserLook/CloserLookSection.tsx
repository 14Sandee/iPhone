import { Box, HStack, Heading, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { SectionButton } from '../Highlights/HighlightsSection'
import './styles.css'
import { data } from './phoneModel';

export const CloserLookSection = () => {
    const [active, setActive] = useState(1)
    const closerRef = useRef(null)
    const ref = useRef(null)
    const isInView = useInView(closerRef, { once: true })
    const isInView2 = useInView(ref, { once: false })

    return (
        <Box ref={closerRef} h={{ base: '90vh', md: '140vh' }} as='section' pos={'relative'} bg="#000">
            <AnimatePresence>
                <Box maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={{ base: 8, md: 'auto' }} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5.5xl' }} fontWeight={600}>
                                    Take a closer look.
                                </Heading>
                            </motion.div>
                        </>
                    }
                </Box>
                <Box ref={ref} pos={'relative'} w='full' h={'68%'}>
                    <Box w={'full'} position={'absolute'} top={0}>
                        <Box maxW={'7xl'} mx={'auto'} overflow={'hidden'}>
                            <HStack pt={{ base: 8, md: 16 }} justifyContent={'center'} >
                                <Image src={data[active - 1].url} alt='closerLook' objectFit='cover' w={'auto'} h={{ base: 'xs', md: 'lg' }} />
                            </HStack>
                        </Box>
                    </Box>
                    <SectionButton isInView={isInView2} text={data[active - 1].text} width={{ base: '200px', md: '200px' }}>
                        <HStack h={'58px'} px={4} justifyContent={'space-between'} alignItems={'center'} >
                            {data.map((d) => {
                                return (
                                    <motion.div key={d.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 1.5 }}>
                                        <Box className={`${active === d.id ? 'outline-blue' : ''}`} borderRadius='50px'>
                                            <Box cursor={'pointer'} className={`radio ${active === d.id ? 'active' : ''}`} bg={d.color} borderRadius='50px' onClick={() => setActive(d.id)} />
                                        </Box>
                                    </motion.div>
                                )
                            })}
                        </HStack>
                    </SectionButton>
                </Box>
            </AnimatePresence >
        </Box >
    )
}
