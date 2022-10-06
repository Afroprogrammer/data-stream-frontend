import React from "react";

export default function BundleResourceDisplay({...props}) {
    return (
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="text-xl font-medium text-gray-900">{props.resource.title}</h2>
            <hr className="mx-1 my-4"/>
            <ul role="list" className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {props.resource.products.map((product: any) => (
                    <li
                        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                    >
                        <div className="flex flex-1 flex-col p-4">
                            <img className="mx-auto h-32 w-32 flex-shrink-0 " src={product.imageUrl} alt=""/>
                            <h3 className="mt-6 text-sm font-small text-gray-900">{product.airtimeProvider}</h3>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
