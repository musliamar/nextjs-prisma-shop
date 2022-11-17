import type Author from '../interfaces/author'

type Props = {
    title: string 
    content: string
    viewCount: number
    id: number
  }

const Product = ({title, content, viewCount, id}: Props) => {
  return (
    <div>{title} {content} {viewCount} {id}</div>
  )
}

export default Product
