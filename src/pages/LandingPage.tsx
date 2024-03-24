import React from 'react'
import { CloserLookSection, ExploreSection, HighlightsSection, WelcomeSection } from '../components/features'
import { Navbar } from '../components/layout/Navbar'

export const LandingPage = () => {
    return (
        <>
            <Navbar />
            <WelcomeSection />
            <HighlightsSection />
            <CloserLookSection />
            <ExploreSection />
        </>
    )
}
