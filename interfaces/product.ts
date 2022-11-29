
interface ProductType {
  id: number
  createdAt: Date
  updatesAt: Date
  manufacturer: string
  name: string
  attributes: string
  images: string
  price: number
  description: string
  published: boolean
  slug: string
  categorySlug: string
  categoryId: number
}

export default ProductType
