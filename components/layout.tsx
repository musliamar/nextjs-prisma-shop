import Footer from './footer'
import Header from './header'
import Meta from './meta'
import type CategoryType from '../interfaces/category'

type Props = {
  children: React.ReactNode
  categories?: CategoryType[]
}

const Layout = ({ categories, children }: Props) => {
  return (
    <>
      <Meta />
      <Header categories={categories} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
