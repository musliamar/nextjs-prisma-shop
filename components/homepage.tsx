import { APP_NAME } from '../lib/constants'
import type Post from '../interfaces/post'
import Product from './product-card'

type Props = {
  products: Post[]
}

const Intro = ({products}: Props) => {
  console.log(products)
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-xl md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        New products
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        This will be {APP_NAME}.
      </h4>
      {products.map((product) => {
        const {title, content, viewCount, id} = product;
        return(
        <Product key={id} title={title} content={content} viewCount={viewCount} id={id} />
      )})}
    </section>
    
  )
}

export default Intro
