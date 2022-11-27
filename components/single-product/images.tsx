import {MouseEvent, useState} from 'react'
import Image from 'next/image';

type Props = {
    images: string
}

const Images = ({images}: Props) => {

    const imagesArray = images.split(', ')

  const [state, setState] = useState({currentImage: imagesArray[0], style: {objectPosition: '0% 0%' }, imageStyle: 'object-scale-down object-top'})
  const [overImage, setOverImage] = useState({mouseOver: false, naturalWidth: 0, naturalHeight: 0});
  const {currentImage, style, imageStyle} = state;

  const handleMouseMove = (event: MouseEvent) => {
    const { naturalWidth, naturalHeight } = overImage;
    const target = event.target as HTMLElement
    const { left, width, height, top: targetTop } = target.getBoundingClientRect()
    const {pageX, pageY} = event;
    const {scrollY} = window;
    const top = targetTop + scrollY;
    const x = (pageX - left) / width * 100
    const y = (pageY - top) / height * 100
    if(naturalWidth > 500 && naturalHeight > 500){
      setState({...state, style: {objectPosition: `${x}% ${y}%` }, imageStyle: 'object-none cursor-zoom-in'})}
  }

  const handleMouseLeave = () => {
    setState({...state, style: {objectPosition: '0% 0%' }, imageStyle: 'object-scale-down object-top'})
    setOverImage({...overImage, mouseOver: !overImage.mouseOver})
  }

  const handleMouseEnter = () => {
    setOverImage({...overImage, mouseOver: !overImage.mouseOver})
  }

  const handleImageLoad = ({naturalWidth, naturalHeight}: HTMLImageElement) => {
    setOverImage({...overImage, naturalWidth: naturalWidth, naturalHeight: naturalHeight})
  }

    return(
        <div className="flex flex-row w-1/2 justify-center">
    {images.length > 1 && 
      <div className="flex flex-col w-1/4 pt-6 gap-14 justify-start">
      {imagesArray.map((image: string) => 
      <div onClick={() => setState({...state, currentImage: image})} key={image} className="w-32 rounded-lg lg:block relative cursor-pointer">
        {image !== currentImage && <div className="bg-white opacity-50 w-full h-full absolute" />}
        <Image src={'/media/'+image} alt="Two each of gray, white, and black shirts laying flat." width='130' height='130' className="object-scale-down object-top" />
      </div>)}
      </div>}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="aspect-w-3 w-3/4 rounded-lg lg:block">
        <Image 
        priority
        onMouseMove={(event) => handleMouseMove(event)} 
        onLoadingComplete={handleImageLoad}
        src={'/media/'+currentImage} 
        alt="Two each of gray, white, and black shirts laying flat." 
        width={overImage ? '2000' : '500'} 
        height={overImage ? '2000' : '500'} 
        style={style} 
        className={imageStyle} />
      </div>
    </div>)
}

export default Images