import React from 'react'
import { ActionSection, BatterySection, CameraSection, ChipSection, CloserLookSection, CrashDetection, DesignedSection, ExploreSection, FooterSection, GigaSection, HighlightsSection, IosSection, SignificantSection, WelcomeSection, ZoomSection } from '../components/features'
import { Navbar } from '../components/layout/Navbar'
import { KeepExploringSection } from '../components/features/Significant/KeepExploringSection'
import { Box } from '@chakra-ui/react'

export const LandingPage = () => {
    return (
        <Box bg='black'>
            <Navbar />
            <WelcomeSection />
            <HighlightsSection />
            <CloserLookSection />
            <ExploreSection />
            <ChipSection />
            <CameraSection />
            <ZoomSection />
            <ActionSection />
            <GigaSection />
            <BatterySection />
            <CrashDetection />
            <DesignedSection />
            <IosSection />
            <SignificantSection />
            <KeepExploringSection />
            <FooterSection />
        </Box>
    )
}
