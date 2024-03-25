import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, HStack, Heading, Image, Stack, Text, } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { data } from './accordionData'
import { ShopAtApple } from './ShopAtApple';
import { KeepExploringSection } from './KeepExploringSection';

export const SignificantSection = () => {
    const significantRef = useRef(null)
    const isInView = useInView(significantRef, { once: true })
    const [active, setActive] = useState(0)
    return (
        <Box ref={significantRef} h={'350vh'} as='section' pos={'relative'} bg="#101010">
            <AnimatePresence>
                <Box maxW={'7xl'} pt={{ base: 10, md: 40 }} pb={10} mx={'auto'} display='flex' flexDirection={{ base: 'column', md: 'row' }} alignItems={{ md: 'flex-end' }} justifyContent={{ md: 'space-between' }} gap={{ base: 5, md: 10 }}>
                    {
                        isInView && <>
                            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}>
                                <Heading as='h2' color='#86868b' fontSize={{ base: '3xl', md: '5xl' }} fontWeight={600}>
                                    Significant others.
                                </Heading>
                            </motion.div>
                        </>
                    }
                </Box>
                <HStack maxW={'7xl'} mx={'auto'} spacing={12} w='full' minH={'xl'} px={{ base: 8, md: 16 }} py={{ base: 10, md: 20 }} rounded={20} bg='black' justifyContent={'space-between'}>
                    <Accordion w={'sm'} h={'lg'} overflow={'hidden'} borderColor={'#86868b'} defaultIndex={[0]}>
                        {data.map((item, index) => <AccordionItem borderTop={`${index === 0 ? 0 : 'auto'}`} borderBottom={`${index === 2 ? 0 : 'auto'}`} py={{ base: 3, md: 6 }}>
                            <AccordionButton onClick={() => setActive(index)}>
                                <Box as="span" flex='1' textAlign='left'>
                                    <Text color='white' fontSize='3xl' fontWeight={600} lineHeight={'120%'}>{item.title}</Text>
                                </Box>
                                <AccordionIcon fontSize={'4xl'} color={'#86868b'} />
                            </AccordionButton>
                            <AccordionPanel>
                                <Text color='#86868b' fontSize='md'>{item.content}</Text>
                            </AccordionPanel>
                        </AccordionItem>)}
                    </Accordion>
                    <Stack flex={0.8} spacing={6}>
                        <Image src={data[active].url} alt='iphone' w={'full'} h='lg' objectFit='contain' />
                    </Stack>
                </HStack>
                <ShopAtApple />
                <KeepExploringSection />
            </AnimatePresence >
        </Box >
    )
}