import { APP_NAME } from '../lib/constants'
import type ProductType from '../interfaces/product'
import type CategoryType from '../interfaces/category'
import ProductCard from './product-card'
import Link from 'next/link';

type Props = {
  products: ProductType[]
  category: CategoryType
}

const Category = ({products, category}: Props) => {

    const {name: categoryName, slug: categorySlug} = category;
  
  return (
    <section className="flex flex-col items-left md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-xl mb-7 md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        {categoryName}
      </h1>
      <div className="flex flex-wrap flex-row gap-x-10">
        {products.map((product) => {
        const {manufacturer, name, id, attributes, images, slug} = product;
        return(
          <Link key={slug} href={categorySlug+'/'+slug}><ProductCard key={id} id={id} images={images} manufacturer={manufacturer} name={name} attributes={attributes} /></Link>
      )})}
      </div>
    </section>
    
  )
}

export default Category
