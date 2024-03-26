import React from 'react'
import { Box, Icon, Link, List, ListItem, Slide, Stack } from '@chakra-ui/react'
import './navbar.css'
import { AnimatePresence, motion } from 'framer-motion'

export const MobileMenu = ({ active }: { active: boolean }) => {
    return (
        <Slide direction='top' transition={{ exit: { duration: 0.5, ease: 'easeInOut' } }} in={active} style={{ zIndex: 8 }}>
            <Box height={'100vh'} p={8} bg={'#161617'} w={'xl'}>
                <Stack spacing={10} h={'full'}>
                    <AnimatePresence>
                        {active && <motion.div key='menu' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
                            <List color='gray.100' fontSize='2xl' fontWeight={600}>
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
                            </List>
                        </motion.div>
                        }
                    </AnimatePresence>
                </Stack>
            </Box>
        </Slide>
    )
}
