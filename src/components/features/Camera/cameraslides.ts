interface CameraSlides {
    id: number,
    url: string,
    text: string,
    spanText: string
}

export const data: CameraSlides[] = [
    {
        id: 1,
        url: './src/assets/images/cameraslide1.jpeg',
        text: '0.5x',
        spanText: 'Ultra Wide | Macro'
    },
    {
        id: 2,
        url: './src/assets/images/cameraslide2.jpeg',
        text: '0.5x',
        spanText: 'Ultra Wide | 13mm'
    },
    {
        id: 3,
        url: './src/assets/images/cameraslide3.jpeg',
        text: '1x',
        spanText: 'Main | 24mm'
    },
    {
        id: 4,
        url: './src/assets/images/cameraslide4.jpeg',
        text: '1x',
        spanText: 'Main | 35mm'
    },
    {
        id: 5,
        url: './src/assets/images/cameraslide5.jpeg',
        text: 'New 5x',
        spanText: 'Telephoto | 120mm'
    }
]