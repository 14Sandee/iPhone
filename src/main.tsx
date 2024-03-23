import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App.tsx'
import { iPhoneTheme } from './theme/iPhoneTheme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={iPhoneTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
