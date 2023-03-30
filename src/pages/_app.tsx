import { store } from '@/store'
import '@/styles/globals.css'
import { ThemeProvider } from '@/styles/theme/ThemeProvider'
import { StoreProvider } from 'easy-peasy'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <StoreProvider store={store}>
        <Component {...pageProps} />
      </StoreProvider>
    </ThemeProvider>
  )
}
