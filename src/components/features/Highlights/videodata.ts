export interface HighlightVideo {
    id: number;
    url: string;
    text?: string[]
}

export const data: HighlightVideo[] = [
    {
        id: 0,
        url: './videos/slide1.mp4',
        text: ['Enter A17 Pro.', 'Game-changing chip.', 'Groundbreaking performance.']
    },
    {
        id: 1,
        url: './videos/slide2.mp4',
        text: ['Titanium', 'So strong. So light. So Pro']
    },
    {
        id: 2,
        url: './videos/slide3.mp4',
        text: ['iPhone 15 Pro Max has the', 'longest optical zoom in', 'iPhone ever. Far out.']
    },
    {
        id: 3,
        url: './videos/slide4.mp4',
        text: ['All-new Action button.', 'What will yours do?']
    }
]