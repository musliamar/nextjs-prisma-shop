import { AppProps } from 'next/app'
import '../styles/index.css'
import { CounterProvider } from '../context/cartContext'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <CounterProvider>
          <Component {...pageProps} />
          </CounterProvider>
        
}
