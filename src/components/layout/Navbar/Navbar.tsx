import { Box, Icon, Link, List, ListItem, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { IoBagOutline, IoLogoApple, IoSearch } from 'react-icons/io5'
import './navbar.css'

export const Navbar = () => {
    const isMobile = useBreakpointValue({ base: true, md: false, lg: false })
    console.log(isMobile)
    return (
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
                                <Link _hover={{ textDecoration: 'none', color: 'gray.100' }} href="/">Airpods</Link>
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
                        isMobile && <ListItem className='nav-link' px={{ base: 3, md: 1 }} >
                            <Icon as={IoBagOutline} fontSize={{ base: 20, md: 16 }} color='#f5f5f7' />
                        </ListItem>
                    }
                </List>
            </Box>
        </Box>
    )
}
