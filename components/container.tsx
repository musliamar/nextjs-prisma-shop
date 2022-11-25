import Breadcrumb from './breadcrumb'

type Props = {
  children?: React.ReactNode
}

const Container = ({ children }: Props) => {

  return <div className="container mx-auto px-5">
            <Breadcrumb />
            {children}
          </div>
}

export default Container
