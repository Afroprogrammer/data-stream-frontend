import  Link from 'next/link';
import { CashIcon, LightningBoltIcon, PhoneIcon, WifiIcon } from '@heroicons/react/outline';
import QuickLink from '../../components/Dashboard/QuickLink';

function dashboard() {
    const QuickLinks = [
        {name: "Airtime", icon:PhoneIcon, url : 'dashboard/topup'},
        {name: "Electricity", icon:LightningBoltIcon, url : 'dashboard/electricity'},
        {name: "Data", icon:WifiIcon, url : '#'},
        {name: "Collect Payment", icon: CashIcon, url : '#'},
    ]

    // @ts-ignore
    return (
        // <div>
        //     <Transition.Root show={sidebarOpen} as={Fragment}>
        //         <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
        //             <Transition.Child
        //                 as={Fragment}
        //                 enter="transition-opacity ease-linear duration-300"
        //                 enterFrom="opacity-0"
        //                 enterTo="opacity-100"
        //                 leave="transition-opacity ease-linear duration-300"
        //                 leaveFrom="opacity-100"
        //                 leaveTo="opacity-0"
        //             >
        //                 <div className="fixed inset-0 bg-gray-600 bg-opacity-75"/>
        //             </Transition.Child>

        //             <div className="fixed inset-0 flex z-40">
        //                 <Transition.Child
        //                     as={Fragment}
        //                     enter="transition ease-in-out duration-300 transform"
        //                     enterFrom="-translate-x-full"
        //                     enterTo="translate-x-0"
        //                     leave="transition ease-in-out duration-300 transform"
        //                     leaveFrom="translate-x-0"
        //                     leaveTo="-translate-x-full"
        //                 >
        //                     <Dialog.Panel
        //                         className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-indigo-700">
        //                         <Transition.Child
        //                             as={Fragment}
        //                             enter="ease-in-out duration-300"
        //                             enterFrom="opacity-0"
        //                             enterTo="opacity-100"
        //                             leave="ease-in-out duration-300"
        //                             leaveFrom="opacity-100"
        //                             leaveTo="opacity-0"
        //                         >
        //                             <div className="absolute top-0 right-0 -mr-12 pt-2">
        //                                 <button
        //                                     type="button"
        //                                     className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        //                                     onClick={() => setSidebarOpen(false)}
        //                                 >
        //                                     <span className="sr-only">Close sidebar</span>
        //                                     <XIcon className="h-6 w-6 text-white" aria-hidden="true"/>
        //                                 </button>
        //                             </div>
        //                         </Transition.Child>
        //                         <div className="flex-shrink-0 flex items-center px-4">
        //                             <img
        //                                 className="h-8 w-auto"
        //                                 // src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
        //                                 src="/crushBigCrop.png"
        //                                 alt="Workflow"
        //                             />
        //                         </div>
        //                         <div className="mt-5 flex-1 h-0 overflow-y-auto">
        //                             <nav className="px-2 space-y-1">
        //                                 {navigation.map((item) => (
        //                                     <a
        //                                         key={item.name}
        //                                         href={item.href}
        //                                         className={classNames(
        //                                             item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
        //                                             'group flex items-center px-2 py-2 text-base font-medium rounded-md'
        //                                         )}
        //                                     >
        //                                         <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-indigo-300"
        //                                                    aria-hidden="true"/>
        //                                         {item.name}
        //                                     </a>
        //                                 ))}
        //                             </nav>
        //                         </div>
        //                     </Dialog.Panel>
        //                 </Transition.Child>
        //                 <div className="flex-shrink-0 w-14" aria-hidden="true">
        //                     {/* Dummy element to force sidebar to shrink to fit close icon */}
        //                 </div>
        //             </div>
        //         </Dialog>
        //     </Transition.Root>

        //     {/* Static sidebar for desktop */}
        //     <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        //         {/* Sidebar component, swap this element with another sidebar if you like */}
        //         <div className="flex flex-col flex-grow pt-5 bg-indigo-700 overflow-y-auto">
        //             <div className="flex items-center flex-shrink-0 px-4">
        //                 <img
        //                     className="h-8 w-auto"
        //                     // src="https://tailwindui.com/img/logos/workflow-logo-indigo-300-mark-white-text.svg"
        //                     src="/logowhite.png"
        //                     alt="Workflow"
        //                 />
        //             </div>
        //             <div className="mt-5 flex-1 flex flex-col">
        //                 <nav className="flex-1 px-2 pb-4 space-y-1">
        //                     {navigation.map((item) => (
        //                         <a
        //                             key={item.name}
        //                             href={item.href}
        //                             className={classNames(
        //                                 item.current ? 'bg-indigo-800 text-white' : 'text-indigo-100 hover:bg-indigo-600',
        //                                 'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
        //                             )}
        //                         >
        //                             <item.icon className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-300"
        //                                        aria-hidden="true"/>
        //                             {item.name}
        //                         </a>
        //                     ))}
        //                 </nav>
        //             </div>
        //         </div>
        //     </div>
        //     <div className="md:pl-64 flex flex-col flex-1">
        //         <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow">
        //             <button
        //                 type="button"
        //                 className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        //                 onClick={() => setSidebarOpen(true)}
        //             >
        //                 <span className="sr-only">Open sidebar</span>
        //                 <MenuAlt2Icon className="h-6 w-6" aria-hidden="true"/>
        //             </button>
        //             <div className="flex-1 px-4 flex justify-between">
        //                 <div className="flex-1 flex">
        //                     <form className="w-full flex md:ml-0" action="#" method="GET">
        //                         <label htmlFor="search-field" className="sr-only">
        //                             Search
        //                         </label>
        //                         <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        //                             <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
        //                                 <SearchIcon className="h-5 w-5" aria-hidden="true"/>
        //                             </div>
        //                             <input
        //                                 id="search-field"
        //                                 className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
        //                                 placeholder="Search"
        //                                 type="search"
        //                                 name="search"
        //                             />
        //                         </div>
        //                     </form>
        //                 </div>
        //                 <div className="ml-4 flex items-center md:ml-6">
        //                     <button
        //                         type="button"
        //                         className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                     >
        //                         <span className="sr-only">View notifications</span>
        //                         <BellIcon className="h-6 w-6" aria-hidden="true"/>
        //                     </button>
        //                     <Balance />

        //                     {/* Profile dropdown */}
        //                     <Menu as="div" className="ml-3 relative">
        //                         <div>
        //                             <Menu.Button
        //                                 className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        //                                 <span className="sr-only">Open user menu</span>
        //                                 {/*loading user profile name is paused for now */}
        //                                 {/*{ user? (*/}
        //                                 {/*    <img*/}
        //                                 {/*        className="h-8 w-8 rounded-full" src={session.user?.image as string | undefined} alt="profile image"*/}
        //                                 {/*    />*/}
        //                                 {/*) : (*/}
        //                                 {/*    <img*/}
        //                                 {/*        className="h-8 w-8 rounded-full"*/}
        //                                 {/*        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"*/}
        //                                 {/*        alt="profile image"*/}
        //                                 {/*    />*/}
        //                                 {/*)}*/}
        //                                 <img
        //                                     className="h-8 w-8 rounded-full"
        //                                     src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        //                                     alt="profile image"
        //                                 />

        //                             </Menu.Button>
        //                         </div>
        //                         <Transition
        //                             as={Fragment}
        //                             enter="transition ease-out duration-100"
        //                             enterFrom="transform opacity-0 scale-95"
        //                             enterTo="transform opacity-100 scale-100"
        //                             leave="transition ease-in duration-75"
        //                             leaveFrom="transform opacity-100 scale-100"
        //                             leaveTo="transform opacity-0 scale-95"
        //                         >
        //                             <Menu.Items
        //                                 className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        //                                 {/*{userNavigation.map((item) => (*/}
        //                                 <Menu.Item>
        //                                     {({active}) => (
        //                                         // <a
        //                                         //     href={item.href}
        //                                         //     className={classNames(
        //                                         //         active ? 'bg-gray-100' : '',
        //                                         //         'block px-4 py-2 text-sm text-gray-700'
        //                                         //     )}
        //                                         // >
        //                                         //     {item.name}
        //                                         // </a>

        //                                         <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
        //                                             Your Profile</a>
        //                                         // <a className={classNames( active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
        //                                         // Settings </a>
        //                                         // <a className={classNames( active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
        //                                         // Sign out</a>
        //                                     )}
        //                                 </Menu.Item>
        //                                 <Menu.Item>
        //                                     {({active}) => (
        //                                         <a className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
        //                                             Settings </a>
        //                                     )}
        //                                 </Menu.Item>

        //                                 <Menu.Item>
        //                                     {({active}) => (
        //                                         <a onClick={handleSignOut}
        //                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
        //                                             Sign out</a>
        //                                     )}
        //                                 </Menu.Item>
        //                                 {/*))}*/}
        //                             </Menu.Items>
        //                         </Transition>
        //                     </Menu>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
        <main>
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-10">
                    <h1 className="text-2xl font-semibold text-gray-900">Welcome, Taiwo</h1>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 ">
                    <div className=" bg-gray-100 rounded-md p-2.5 grid grid-cols-1 lg:grid-cols-2 gap-2.5 md:gap-10 md:px-10 md:py-10">
                        <div className='duration-700 hover:scale-105 hover:shadow-xl h-56 bg-white p-8 flex justify-between items-center flex-col rounded-lg'>
                            <div className='w-full '>
                                <h2 className='text-xl font-bold'>Wallet Balance: N 0.00</h2>
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <div>
                                    <h4 className='font-normal text-md'>NAFIU TAIWO</h4>
                                </div>
                                <div className='h-10 w-10 flex justify-center items-center'>
                                    <img src="/mastercard.png" alt="" className='w-full' />
                                </div>
                            </div>
                        </div>
                        <div className='gap-3 duration-700 hover:scale-105 hover:shadow-xl bg-white p-8 grid grid-cols-1 lg:grid-cols-2 md:justify-items-center rounded-lg'>
                            {QuickLinks.map((link, index) :any => {
                                const {name, icon, url} = link
                                return (
                                    <QuickLink link={link} />
                                )
                            })}
                        </div>
                        <div className='bg-white p-8 md:col-span-full'>
                            <div>
                                <h2>Last Transactions</h2>
                            </div>
                            <div>
                                <h3>Transactions</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )


    // return (
    //     <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
    //         <div className="flex">
    //             <div className="flex-shrink-0">
    //                 <ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
    //             </div>
    //             <div className="ml-3">
    //                 <p className="text-sm text-yellow-700">
    //                     You have no credits left.{' '}
    //                     <a href="#" className="font-medium underline text-yellow-700 hover:text-yellow-600">
    //                        You are not signed in
    //                     </a>
    //                 </p>
    //             </div>
    //         </div>
    //     </div>
    // )


};

export default dashboard;








