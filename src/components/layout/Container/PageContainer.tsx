import React from 'react'
import { Box, BoxProps } from '@chakra-ui/react'

interface Props extends BoxProps {
    children: React.ReactNode
}

export const PageContainer = ({children, ...props}: Props) => {

    return (
        <Box px="4" {...props}>
            {children}
        </Box>
    )
}
