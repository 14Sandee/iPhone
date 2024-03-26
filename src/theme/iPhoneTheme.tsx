import { extendTheme } from "@chakra-ui/react";

export const iPhoneTheme = extendTheme({
    colors: {
        primary: {
            50: "#cce3f9",
            100: "#aad0f6",
            200: "#80b8f1",
            300: "#55a0ec",
            400: "#2a89e8",
            500: "#0071E3",
            600: "#005ebd",
            700: "#004b97",
            800: "#003972",
            900: "#00264c",
        },
    },
    fontSizes: {
        "2.5xl": "1.75rem",
        "4.5xl": "2.75rem",
        "5.5xl": " 3.5rem"
    }
})