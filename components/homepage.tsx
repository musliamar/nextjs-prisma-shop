import { APP_NAME } from '../lib/constants'
import type ProductType from '../interfaces/product'
import Product from './product-card'
import Link from 'next/link';

type Props = {
  products: ProductType[]
}

const Intro = ({products}: Props) => {
  
  return (
    <section className="flex flex-col items-left md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-xl mb-4 md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        New products
      </h1>
      <div className="flex flex-row gap-x-10">
        {products.map((product) => {
        const {manufacturer, name, id, attributes, images} = product;
        return(
          <Link href={'/products/'+product.slug}><Product key={id} id={id} images={images} manufacturer={manufacturer} name={name} attributes={attributes} /></Link>
      )})}
      </div>
    </section>
    
  )
}

export default Intro
