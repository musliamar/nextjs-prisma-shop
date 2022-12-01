import { APP_NAME } from '../lib/constants'
import type ProductType from '../interfaces/product'
import type CategoryType from '../interfaces/category'
import ProductCard from './product-card'
import Link from 'next/link';
import { useDispatch, useStore } from '../store/context'
import { ADD_TO_CART } from '../lib/constants'

type Props = {
  products: ProductType[]
  category: CategoryType
}

const Category = ({products, category}: Props) => {

    const {name: categoryName, slug: categorySlug} = category;

    const dispatch = useDispatch();
    const store = useStore();

    const {itemsInCart} = store;

    const addToCart = (product: ProductType) => {
      dispatch({
        type: ADD_TO_CART,
        payload: product
      })
    }
  
  return (
    <section className="flex flex-col items-left md:justify-between pt-6 pb-6">
      <h1 className="text-xl mb-7 md:text-3xl font-bold tracking-tighter leading-tight md:pr-8">
        {categoryName}
      </h1>
      <div className="flex flex-wrap flex-row gap-x-10">
        {products.map((product) => {
        const {manufacturer, name, id, attributes, images, slug, price} = product;
        return(
          <Link key={slug} href={categorySlug+'/'+slug}>
            <ProductCard key={id} id={id} price={price} images={images} manufacturer={manufacturer} name={name} attributes={attributes} />
          </Link>
      )})}
      </div>
    </section>
    
  )
}

export default Category
