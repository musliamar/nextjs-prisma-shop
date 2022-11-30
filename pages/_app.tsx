import { AppProps } from 'next/app'
import '../styles/index.css'
import { StoreProvider } from '../store/context'
import { useStore, useDispatch } from '../store/context'
import Header from '../components/header'
import Footer from '../components/footer'

function Button() {
  
  const store = useStore()
  const {count} = store
  const dispatch = useDispatch()

  return  <>
    <p>todo</p>
   {/*  <button onClick={increaseCount}>Increase</button> */}
    </>
}

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider>
      <Header button={<Button />} />
      <Component {...pageProps} />
      <Footer />
    </StoreProvider>
  )      
        
}
