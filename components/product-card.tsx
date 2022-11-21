
type Props = {
    name: string 
    manufacturer: string
    attributes: string
    id: number
    images: string
  }

const Product = ({name, manufacturer, images: imagesToSplit, attributes: attributesToParse, id}: Props) => {
  const attributes = JSON.parse(attributesToParse)
  const images = imagesToSplit.split(', ')
  
  return (
    <div className="mb-10 w-64 flex flex-col">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
          <img src={'/media/'+images[0]} className="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 className="mt-4 text-lg text-gray-700">{manufacturer} {name}</h3>
        <p className="mt-1 text-lg font-medium text-gray-900">price</p>
    </div>
  )
}

export default Product
