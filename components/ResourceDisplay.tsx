import React from 'react';


export default function ResourceDisplay({serviceSelected, resource} : any) {
    return (
        <div className="mx-auto max-w-2xl py-0 sm:py-0 md:py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-medium text-gray-900">{resource.title}</h2>
            <hr className="mx-1 my-4"/>
            <ul role="list" className="grid grid-cols-2 gap-2.5 md:10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {resource.products.map((product: any) => {
                    const {image, provider, serviceType} = product
                return (
                    <li onClick={() => serviceSelected({provider, image, serviceType}) }
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow sm:h-44 md:h-auto"
                    >
                        <div className="flex flex-1 flex-col p-4">
                            <img className="mx-auto h-32 w-32 flex-shrink-0  " src={image} alt=""/>
                            <h3 className="mt-0.5 text-sm font-small text-gray-900">{provider}</h3>
                        </div>
                    </li>
                )})}
            </ul>
        </div>
    )
}



// return (
//     <div className="bg-white">
//         <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//             <h2 className="text-xl font-bold text-gray-900">{props.resource.title}</h2>
//
//             <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
//                 {props.resource.products.map((product:any) => (
//
//                 <div key={product.id}>
//                         <div className="relative">
//                             <div className="relative h-72 w-full overflow-hidden rounded-lg">
//                                 <img
//                                     src={product.imageUrl}
//                                     // alt={product.imageAlt}
//                                     className="h-full w-full object-cover object-center"
//                                 />
//                             </div>
//                             <div className="relative mt-4">
//                                 <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
//                                 {/*<p className="mt-1 text-sm text-gray-500">{product.color}</p>*/}
//                             </div>
//                             <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
//                                 <div
//                                     aria-hidden="true"
//                                     className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
//                                 />
//                                 <p className="relative text-lg font-semibold text-white">{product.price}</p>
//                             </div>
//                         </div>
//                         <div className="mt-6">
//                             <a
//                                 href={product.href}
//                                 className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-200"
//                             >
//                                 click to purchase <span className="sr-only">, {product.name}</span>
//                             </a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
// )
// }



