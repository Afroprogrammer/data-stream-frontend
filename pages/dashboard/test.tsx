import React from 'react';
import AirtimeDisplay from "../../components/Display";
import BundleDisplay from "../../components/BundleDIsplay";
import {LockClosedIcon} from '@heroicons/react/solid'

import { Dialog, Transition } from '@headlessui/react'

const Test = () => {
    return (
        // <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        //     <div className="w-full max-w-md space-y-8">
        //         <form className="mt-8 space-y-6" action="#" method="POST">
        //             <input type="hidden" name="remember" defaultValue="true"/>
        //             <div className="-space-y-px rounded-md shadow-sm">
        //                 <div>
        //                     <label htmlFor="password" className="sr-only">
        //                         Enter your phone number
        //                     </label>
        //                     <input
        //                         id="number"
        //                         name="password"
        //                         type="number"
        //                         required
        //                         className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        //                         placeholder="Phone number"
        //                     />
        //                 </div>
        //             </div>
        //             <div>
        //                 <button
        //                     type="submit"
        //                     className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        //                 >
        //         <span className="absolute inset-y-0 left-0 flex items-center pl-3">
        //           <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
        //         </span>
        //                     Submit
        //                 </button>
        //             </div>
        //         </form>
        //     </div>
        // </div>

  <AirtimeDisplay/>
    )
}
export default Test;
