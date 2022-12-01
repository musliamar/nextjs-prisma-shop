import Breadcrumbs from '../components/breadcrumb'
import Header from '../components/header/header'
import Footer from '../components/footer'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {

  return (<>
            <Header />
            <main className='container mx-auto px-5'>
              <Breadcrumbs />
              {children}
            </main>
            <Footer />
          </>)
}

export default Container
