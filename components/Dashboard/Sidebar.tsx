import {
    HomeIcon,
    DeviceMobileIcon,
    XIcon,
    LightningBoltIcon
} from '@heroicons/react/outline';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, Fragment } from 'react';
import {Dialog, Transition} from '@headlessui/react';

const navigation = [
    {name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true},
    {name: 'Airtime & Bundle', href: '/dashboard/topup', icon: DeviceMobileIcon, current: false},
    {name: 'Electricity', href: '/dashboard/electricity', icon: LightningBoltIcon, current: false},
    // {name: 'Pay Bills', href: 'dashboard/bills', icon: ShoppingCartIcon, current: false},
    // {name: 'Cable TV', href: 'dashboard/cable', icon: InboxIcon, current: false},
    // // coming soon
    // {name: 'Car Insurance', href: 'dashboard/insurance', icon: TruckIcon, current: false},
    // {name: 'Betting', href: 'dashboard/betting', icon: UsersIcon, current: false},
    // {name: 'Fund Transfer', href: 'dashboard/transfer', icon: CashIcon, current: false},
    // {name: 'Virtual Naira and Dollar Cards', href: 'dashboard/virtual-cards', icon: CurrencyDollarIcon, current: false},
]

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = ({sidebarOpen, setSidebarOpen}: any) => {
    const router = useRouter();
  return (
    <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="transition-opacity ease-linear duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity ease-linear duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
                </Transition.Child>

                <div className="fixed inset-0 flex z-40">
                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel
                            className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-in-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in-out duration-300"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <span className="sr-only">Close sidebar</span>
                                        <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
                                    </button>
                                </div>
                            </Transition.Child>
                            <div className="flex-shrink-0 flex items-center px-4 ">
                                <img
                                    className="h-8 w-auto"
                                    src="/cushlogo-blue.png"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="mt-5 flex-1 h-0 overflow-y-auto">
                                <nav className="px-2 space-y-1">
                                    {navigation.map((item) => (
                                        <Link
                                            href={item.href}
                                            key={item.name}
                                            >
                                            <a
                                                className={classNames(
                                                    router.pathname == item.href ? 'bg-indigo-800 text-white active text-bold' : 'text-indigo-800 hover:bg-indigo-800 hover:text-white',
                                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                                )}
                                            >
                                                <item.icon className="mr-3 flex-shrink-0 h-6 w-6"
                                                            aria-hidden="true"/>
                                                {item.name}
                                            </a>
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    <div className="flex-shrink-0 w-14" aria-hidden="true">
                        {/* Dummy element to force sidebar to shrink to fit close icon */}
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow pt-5 bg-white-100 overflow-y-auto border-r-2 border-indigo-100">
            <div className="flex items-center flex-shrink-0 px-4">
                <img
                    className="h-9 w-auto"
                    src="/cushlogo-blue.png"
                    alt="Workflow"
                />
            </div>
            <div className="mt-10 flex-1 flex flex-col">
                <nav className="flex-1 px-2 pb-4 space-y-1">
                    {navigation.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                            >
                            <a
                                className={classNames(
                                    router.pathname == item.href ? 'bg-indigo-800 text-white active text-bold' : 'text-indigo-800 hover:bg-indigo-800 hover:text-white',
                                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                )}
                            >
                                <item.icon className="mr-3 flex-shrink-0 h-6 w-6"
                                            aria-hidden="true"/>
                                {item.name}
                            </a>
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Sidebar