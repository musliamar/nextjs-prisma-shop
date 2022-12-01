import {useRouter} from 'next/router'
import { titleize } from '../lib/util';
import Link from 'next/link';

const Breadcrumb = () => {

    const router = useRouter();
    const {category, product} = router.query;

  return (
    
      <nav className='mt-5 mb-5' aria-label="Breadcrumb">
      <ol role="list" className="mx-auto flex">
      <li>
          <div className="flex items-center">
            <Link href="/" className="mr-2 text-sm font-medium text-gray-900 uppercase">Home</Link>
          </div>
        </li>
        {category &&  
        <li>
          <div className="flex items-center">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <Link href={'/' + category} className="mr-2 text-sm font-medium text-gray-900 uppercase">{titleize(category as string)}</Link>
          </div>
        </li>}
        {product &&  
        <li>
          <div className="flex items-center">
          <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <Link href={'/' + category + '/' + product} className="mr-2 text-sm font-medium text-gray-900 uppercase">{titleize(product as string)}</Link>
          </div>
        </li>}
      </ol>
    </nav>
  )
}

export default Breadcrumb
