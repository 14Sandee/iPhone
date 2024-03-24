
export interface PhoneModels {
    id: number;
    url: string;
    text: string;
    color: string;
}

export const data: PhoneModels[] = [
    {
        id: 1,
        url: './src/assets/images/allvariant.jpeg',
        text: '6.1” iPhone 15 Pro in four colours',
        color: 'radial-gradient(154.81% 154.81% at 50% 50%, #8F8A81 0%, #202630 28.5%, #C9C8C3 60.5%, #242526 100%)'
    },
    {
        id: 2,
        url: './src/assets/images/naturaltitanium.jpeg',
        text: 'iPhone 15 Pro in Natural Titanium',
        color: '#8f8a81'
    },
    {
        id: 3,
        url: './src/assets/images/bluetitanium.jpeg',
        text: 'iPhone 15 Pro in Blue Titanium',
        color: '#202630'
    },
    {
        id: 4,
        url: './src/assets/images/whitetitanium.jpeg',
        text: 'iPhone 15 Pro in White Titanium',
        color: '#c9c8c3'
    },
    {
        id: 5,
        url: './src/assets/images/blacktitanium.jpeg',
        text: 'iPhone 15 Pro in Black Titanium',
        color: '#242526'
    }
]