import { ReactElement } from "react"
import { BsStack } from "react-icons/bs"
import { HiMiniMagnifyingGlassPlus, HiOutlineMagnifyingGlassPlus } from "react-icons/hi2"
import { IoIosFlashlight } from "react-icons/io"
import { IoAccessibility, IoCamera, IoFlashlight, IoMoon, IoNotificationsOff, IoRecording } from "react-icons/io5"
import { MdTranslate } from "react-icons/md"

interface ActionImages {
    id: number,
    url: string,
    text: string,
    icon: ReactElement
}

export const data: ActionImages[] = [
    {
        id: 1,
        url: './images/silent.jpeg',
        text: 'Silent mode',
        icon: <IoNotificationsOff fontSize={16} />
    },
    {
        id: 2,
        url: './images/focus.jpeg',
        text: 'Focus',
        icon: <IoMoon fontSize={16} />
    },
    {
        id: 3,
        url: './images/camera.jpeg',
        text: 'Camera',
        icon: <IoCamera fontSize={16} />
    },
    {
        id: 4,
        url: './images/flashlight.jpeg',
        text: 'Flashlight',
        icon: <IoIosFlashlight fontSize={16} />
    },
    {
        id: 5,
        url: './images/memos.jpeg',
        text: 'Voice Memo',
        icon: <IoRecording fontSize={16} />
    },
    {
        id: 6,
        url: './images/translate.jpeg',
        text: 'Translate',
        icon: <MdTranslate fontSize={16} />
    },
    {
        id: 7,
        url: './images/magnifier.jpeg',
        text: 'Magnifier',
        icon: <HiMiniMagnifyingGlassPlus fontSize={16} />
    },
    {
        id: 8,
        url: './images/shortcut.jpeg',
        text: 'Shortcut',
        icon: <BsStack fontSize={16} />
    },
    {
        id: 9,
        url: './images/accessibility.jpeg',
        text: 'Accessibility',
        icon: <IoAccessibility fontSize={16} />
    },
]