import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
    children: React.ReactNode
}

export const ContentContainer = ({ children, ...props }: Props) => {

    return (
        <Box pt="20" pb="20" {...props}>
            {children}
        </Box>
    )
}
