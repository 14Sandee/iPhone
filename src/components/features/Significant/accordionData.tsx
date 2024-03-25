interface AccordionItems {
    id: number;
    title: string;
    content: string;
    url: string;
}

export const data: AccordionItems[] = [
    {
        id: 1,
        title: 'iPhone and Apple Watch',
        content: 'Misplaced your iPhone? The latest Apple Watch models can show you its approximate distance and direction.18 To set up a group photo on your iPhone, join the group and use Apple Watch as a viewfinder to snap the shot. And when you take a call on your Apple Watch, just tap your iPhone to continue the conversation there.',
        url: './src/assets/images/accordion1.jpeg'
    },
    {
        id: 2,
        title: 'iPhone and Mac',
        content: 'You can answer calls or messages from your iPhone directly on your Mac. Copy images, video or text from your iPhone, then paste into another app on your nearby Mac. And with iCloud, you can access your favourite files from either your iPhone or Mac.',
        url: './src/assets/images/accordion2.jpeg'
    },
    {
        id: 3,
        title: 'iPhone and AirPods',
        content: 'Set up AirPods on iPhone with just a tap. You’ll love Adaptive Audio, which automatically tailors the noise control to provide the best listening experience across different environments and interactions throughout the day.',
        url: './src/assets/images/accordion3.jpeg'
    }
]