import { Box, Button, HStack, Icon, Link, List, ListItem, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoBagOutline, IoLogoApple, IoSearch } from 'react-icons/io5'
import './navbar.css'
import { MobileMenu } from './MobileMenu'
import { motion } from 'framer-motion'

export const Navbar = () => {
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false })
    const [active, setActive] = useState(false)

    const [isAnimationStarted, setIsAnimationStarted] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 200;
            if (window.scrollY >= scrollThreshold) {
                setIsAnimationStarted(true);
            } else {
                setIsAnimationStarted(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, [isAnimationStarted]);

    return (
        <>
            {
                isAnimationStarted && <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.5, ease: 'easeIn' }}>
                    <Box w={'full'} pos={'fixed'} zIndex={99999} className='header-background' as='header' borderBottomWidth={1} borderBottomColor={'#f5f5f576'}>
                        <Box maxW="6xl" mx="auto" px={{ base: '6', lg: '12' }} py={1}>
                            <HStack display={'flex'} justifyContent={'space-between'} alignItems={'center'} color='gray.300' fontSize='xs'>
                                <Text color='white' fontSize={{ base: 'md', md: 'xl' }} fontWeight={600} py={1}>
                                    iPhone 15 Pro
                                </Text>
                                <List display={'flex'} gap={{ base: 2, md: 4 }} justifyContent={'space-between'} alignItems={'center'} color='gray.300' fontSize='xs'>
                                    {!isMobile && <>
                                        <ListItem className='nav-link' px={1}>
                                            <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Overview</Link>
                                        </ListItem>
                                        <ListItem className='nav-link' px={1}>
                                            <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Switch from Android to iPhone</Link>
                                        </ListItem>
                                        <ListItem className='nav-link' px={1}>
                                            <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Tech Specs</Link>
                                        </ListItem>
                                    </>}
                                    <ListItem className='nav-link' px={1}>
                                        <Button rounded={'full'} size={'xs'} fontWeight={400} colorScheme='primary'>Buy</Button>
                                    </ListItem>
                                    {
                                        isMobile &&
                                        <Stack spacing={2} pos={'relative'} ml={{ base: 3, md: 1 }} onClick={() => setActive(!active)} className={`menu ${active ? 'active' : ""}`} zIndex={9}>
                                            <Box className="menuline"></Box>
                                            <Box className="menuline2"></Box>
                                        </Stack>
                                    }
                                </List>
                            </HStack>
                            <MobileMenu active={active} />
                        </Box>
                    </Box>
                </motion.div>
            }
            <Box as='header' background={'black'}>
                <Box maxW="6xl" mx="auto" px={{ base: '6', lg: '12' }}>
                    <List display={'flex'} justifyContent={'space-between'} alignItems={'center'} color='gray.300' fontSize='xs'>
                        <ListItem className='nav-link' px={1} flexGrow={isMobile ? 1 : 'auto'}>
                            <Icon as={IoLogoApple} fontSize={{ base: 20, md: 16 }} lineHeight={{ base: 20, md: 24 }} color='#f5f5f7' />
                        </ListItem>
                        {
                            !isMobile && <>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Store</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Mac</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">iPad</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">iPhone</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Watch</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">AirPods</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">TV & Home</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Entertainment</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Accessories</Link>
                                </ListItem>
                                <ListItem className='nav-link' px={1}>
                                    <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Support</Link>
                                </ListItem>
                            </>
                        }
                        <ListItem className='nav-link' px={{ base: 3, md: 1 }} >
                            <Icon as={IoSearch} fontSize={{ base: 20, md: 16 }} color='#f5f5f7' />
                        </ListItem>
                        <ListItem className='nav-link' px={{ base: 3, md: 1 }} >
                            <Icon as={IoBagOutline} fontSize={{ base: 20, md: 16 }} color='#f5f5f7' />
                        </ListItem>
                        {
                            isMobile &&
                            <Stack spacing={2} pos={'relative'} ml={{ base: 3, md: 1 }} onClick={() => setActive(!active)} className={`menu ${active ? 'active' : ""}`} zIndex={9}>
                                <Box className="menuline"></Box>
                                <Box className="menuline2"></Box>
                            </Stack>
                        }
                    </List>
                    <MobileMenu active={active} />
                </Box>
            </Box>
        </>
    )
}
