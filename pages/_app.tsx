import { AppProps } from 'next/app'
import '../styles/index.css'
import { StoreProvider } from '../store/context'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )      
        
}
