import {useState} from 'react'

const Header = () => {

  const [open, setOpen] = useState('');

  return (
 
<div className="bg-white border-b border-gray-200">
  <header className="relative bg-white">
    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>

    <nav aria-label="Top" className="container mx-auto px-5">
        <div className="flex h-16 items-center">
          <button type="button" className="rounded-md bg-white p-2 text-gray-400 lg:hidden">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

        
          <div className="ml-4 flex lg:ml-0">
            <a href="#">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
            </a>
          </div>

        
          <div className="hidden lg:ml-8 lg:block lg:self-stretch">
            <div className="flex h-full space-x-8">
              <div className="flex">
                <div className="relative flex">
                  <button onMouseEnter={() => setOpen('women')} onMouseLeave={() => setOpen('')} type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Women</button>
                </div>

               
                {open === 'women' 
                && <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                          <div className="group relative text-base sm:text-sm">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-cover object-center" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>

                          <div className="group relative text-base sm:text-sm">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-cover object-center" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              Basic Tees
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                          <div>
                            <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Tops</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Watches</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Full Nelson</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
              </div>

              <div className="flex">
                <div className="relative flex">
                  <button onMouseEnter={() => setOpen('men')} onMouseLeave={() => setOpen('')} type="button" className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out" aria-expanded="false">Men</button>
                </div>

               
                {open === 'men' 
                && <div className="absolute inset-x-0 top-full text-sm text-gray-500">
                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"></div>

                  <div className="relative bg-white">
                    <div className="mx-auto max-w-7xl px-8">
                      <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                        <div className="col-start-2 grid grid-cols-2 gap-x-8">
                          <div className="group relative text-base sm:text-sm">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-cover object-center" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              New Arrivals
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>

                          <div className="group relative text-base sm:text-sm">
                            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                              <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-cover object-center" />
                            </div>
                            <a href="#" className="mt-6 block font-medium text-gray-900">
                              <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                              Artwork Tees
                            </a>
                            <p aria-hidden="true" className="mt-1">Shop now</p>
                          </div>
                        </div>
                        <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                          <div>
                            <p id="Clothing-heading" className="font-medium text-gray-900">Clothing</p>
                            <ul role="list" aria-labelledby="Clothing-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Tops</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Accessories-heading" className="font-medium text-gray-900">Accessories</p>
                            <ul role="list" aria-labelledby="Accessories-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Watches</a>
                              </li>
                            </ul>
                          </div>

                          <div>
                            <p id="Brands-heading" className="font-medium text-gray-900">Brands</p>
                            <ul role="list" aria-labelledby="Brands-heading" className="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                              <li className="flex">
                                <a href="#" className="hover:text-gray-800">Re-Arranged</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
              </div>

              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Company</a>

              <a href="#" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Stores</a>
            </div>
          </div>

          <div className="ml-auto flex items-center">
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true"></span>
              <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
            </div>

            <div className="hidden lg:ml-8 lg:flex">
              <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
                <span className="ml-3 block text-sm font-medium">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>

           <div className="flex lg:ml-6">
              <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </a>
            </div>

            <div className="ml-4 flow-root lg:ml-6">
              <a href="#" className="group -m-2 flex items-center p-2">
               <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                <span className="sr-only">items in cart, view bag</span>
              </a>
            </div>
          </div>
        </div>
    </nav>
  </header>
  <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
    
    <div className="fixed inset-0 bg-black bg-opacity-25"></div>

    <div className="fixed inset-0 z-40 flex">
     
      <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
        <div className="flex px-4 pt-5 pb-2">
          <button type="button" className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400">
            <span className="sr-only">Close menu</span>
            
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

       
        <div className="mt-2">
          <div className="border-b border-gray-200">
            <div className="-mb-px flex space-x-8 px-4" aria-orientation="horizontal" role="tablist">
              <button id="tabs-1-tab-1" className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">Women</button>

              <button id="tabs-1-tab-2" className="text-gray-900 border-transparent flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">Men</button>
            </div>
          </div>

          <div id="tabs-1-panel-1" className="space-y-10 px-4 pt-10 pb-8" aria-labelledby="tabs-1-tab-1" role="tabpanel">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="group relative text-sm">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." className="object-cover object-center" />
                </div>
                <a href="#" className="mt-6 block font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>

              <div className="group relative text-sm">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." className="object-cover object-center" />
                </div>
                <a href="#" className="mt-6 block font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                  Basic Tees
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
            </div>

            <div>
              <p id="women-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <a href="#" className="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
              </ul>
            </div>

            <div>
              <p id="women-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="women-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <a href="#" className="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
              </ul>
            </div>

            <div>
              <p id="women-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="women-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <a href="#" className="-m-2 block p-2 text-gray-500">Full Nelson</a>
                </li>
              </ul>
            </div>
          </div>

         
          <div id="tabs-1-panel-2" className="space-y-10 px-4 pt-10 pb-8" aria-labelledby="tabs-1-tab-2" role="tabpanel">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="group relative text-sm">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." className="object-cover object-center" />
                </div>
                <a href="#" className="mt-6 block font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                  New Arrivals
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>

              <div className="group relative text-sm">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                  <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." className="object-cover object-center" />
                </div>
                <a href="#" className="mt-6 block font-medium text-gray-900">
                  <span className="absolute inset-0 z-10" aria-hidden="true"></span>
                  Artwork Tees
                </a>
                <p aria-hidden="true" className="mt-1">Shop now</p>
              </div>
            </div>

            <div>
              <p id="men-clothing-heading-mobile" className="font-medium text-gray-900">Clothing</p>
              <ul role="list" aria-labelledby="men-clothing-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <a href="#" className="-m-2 block p-2 text-gray-500">Tops</a>
                </li>
              </ul>
            </div>

            <div>
              <p id="men-accessories-heading-mobile" className="font-medium text-gray-900">Accessories</p>
              <ul role="list" aria-labelledby="men-accessories-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <a href="#" className="-m-2 block p-2 text-gray-500">Watches</a>
                </li>
              </ul>
            </div>

            <div>
              <p id="men-brands-heading-mobile" className="font-medium text-gray-900">Brands</p>
              <ul role="list" aria-labelledby="men-brands-heading-mobile" className="mt-6 flex flex-col space-y-6">
                <li className="flow-root">
                  <a href="#" className="-m-2 block p-2 text-gray-500">Re-Arranged</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-6 border-t border-gray-200 py-6 px-4">
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Company</a>
          </div>

          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Stores</a>
          </div>
        </div>

        <div className="space-y-6 border-t border-gray-200 py-6 px-4">
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
          </div>
          <div className="flow-root">
            <a href="#" className="-m-2 block p-2 font-medium text-gray-900">Create account</a>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6 px-4">
          <a href="#" className="-m-2 flex items-center p-2">
            <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 flex-shrink-0" />
            <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
            <span className="sr-only">, change currency</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Header
