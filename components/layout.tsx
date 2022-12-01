import Meta from './meta'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      {children}
    </>
  )
}

export default Layout
