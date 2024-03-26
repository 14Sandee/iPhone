import { useEffect, useRef } from "react";
import { HighlightVideo } from "./videodata";
import { Box, Stack, Text } from "@chakra-ui/react";
import './styles.css'

interface VideoProps {
    dataArray: HighlightVideo[];
    data: HighlightVideo;
    activeIndex: number;
    index: number;
}

export const VideoSlide = ({ dataArray, data, activeIndex, index }: VideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const isIdEqual = dataArray[activeIndex]?.id === data.id;
        if (isIdEqual) {
            videoRef.current?.play();
        }
    }, []);

    return (
        <Box w={'full'} pos={"relative"} height={'2xl'} mx={'auto'} rounded={'3xl'} overflow={'hidden'}>
            {data.text &&
                <Stack spacing={0} pos={'absolute'} top={10} left={10} w={'full'} h={'full'}>
                    {data.text.map(t => <Text key={t} color={'white'} fontSize={{ base: 'xl', md: '3xl' }} fontWeight={600} lineHeight={"125%"}>{t}</Text>)}
                </Stack>
            }
            <video ref={videoRef} style={{
                height: '100%',
                width: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
            }} autoPlay muted>
                <source src={data.url} type="video/mp4" />
            </video>
        </Box>
    )
}

export const VideoSlide1 = ({ active }: { active: number }) => {
    return (
        <video autoPlay={active === 1} muted playsInline>
            <source src="./src/assets/videos/slide2.mp4" type="video/mp4" />
        </video>
    )
}

export const VideoSlide2 = ({ active }: { active: number }) => {
    return (
        <video autoPlay={active === 1} muted playsInline>
            <source src="./src/assets/videos/slide2.mp4" type="video/mp4" />
        </video>
    )
}

export const VideoSlide3 = ({ active }: { active: number }) => {
    return (
        <video autoPlay={active === 2} muted playsInline>
            <source src="./src/assets/videos/slide3.mp4" type="video/mp4" />
        </video>
    )
}

export const VideoSlide4 = ({ active }: { active: number }) => {
    return (
        <video autoPlay={active === 3} muted playsInline>
            <source src="./src/assets/videos/slide4.mp4" type="video/mp4" />
        </video>
    )
}